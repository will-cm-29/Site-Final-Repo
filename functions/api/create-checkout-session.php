<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$STRIPE_SECRET_KEY = getenv('STRIPE_SECRET_KEY'); // or load from a config file outside webroot
$SITE_URL = getenv('SITE_URL');                  // https://www.mw-photography.co.uk

if (!$STRIPE_SECRET_KEY) { http_response_code(500); echo json_encode(['ok'=>false,'error'=>'Stripe secret key not configured.']); exit; }
if (!$SITE_URL) { http_response_code(500); echo json_encode(['ok'=>false,'error'=>'SITE_URL not configured.']); exit; }

$raw = file_get_contents('php://input');
$body = json_decode($raw, true);
if (!is_array($body)) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Invalid request body.']); exit; }

$mode = (string)($body['mode'] ?? 'deposit');
$selectedPackage = (string)($body['selectedPackage'] ?? 'Photography Booking');
$estimate = (float)($body['estimate'] ?? 0);

// Backend-controlled pricing (good)
$amountInPence = 5000; // £50
if ($mode === 'deposit') $amountInPence = 5000;

$metadata = [
  'selectedPackage' => substr($selectedPackage, 0, 500),
  'estimate' => (string)$estimate,
  'propertyType' => substr((string)($body['propertyType'] ?? ''), 0, 100),
  'sizeBand' => substr((string)($body['sizeBand'] ?? ''), 0, 100),
];

$postFields = http_build_query(array_merge([
  'mode' => 'payment',
  'success_url' => $SITE_URL . '/?payment=success',
  'cancel_url'  => $SITE_URL . '/?payment=cancel',
  'line_items[0][price_data][currency]' => 'gbp',
  'line_items[0][price_data][product_data][name]' => 'MW Photography Booking Deposit',
  'line_items[0][price_data][product_data][description]' => 'Deposit for ' . $selectedPackage,
  'line_items[0][price_data][unit_amount]' => (string)$amountInPence,
  'line_items[0][quantity]' => '1',
], array_reduce(array_keys($metadata), function($carry, $k) use ($metadata) {
  $carry["metadata[$k]"] = $metadata[$k];
  return $carry;
}, [])));

$ch = curl_init('https://api.stripe.com/v1/checkout/sessions');
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => $postFields,
  CURLOPT_HTTPHEADER => [
    'Authorization: Bearer ' . $STRIPE_SECRET_KEY,
    'Content-Type: application/x-www-form-urlencoded'
  ]
]);

$response = curl_exec($ch);
$http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$data = json_decode($response, true);

if ($http < 200 || $http >= 300) {
  http_response_code(500);
  echo json_encode(['ok'=>false,'error'=>$data['error']['message'] ?? 'Stripe session creation failed.']);
  exit;
}

echo json_encode(['ok'=>true,'id'=>$data['id'] ?? null,'url'=>$data['url'] ?? null]);