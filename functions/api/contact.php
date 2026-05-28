<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$raw = file_get_contents('php://input');
$body = json_decode($raw, true);
if (!is_array($body)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid request body.']);
  exit;
}

// Honeypot
if (!empty($body['bot-field'])) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Spam blocked.']);
  exit;
}

$required = ['name','email','message'];
foreach ($required as $field) {
  if (empty(trim((string)($body[$field] ?? '')))) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => "Missing required field: $field"]);
    exit;
  }
}

$email = trim((string)$body['email']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid email address.']);
  exit;
}

// Build submission
$submission = [
  'receivedAt' => gmdate('c'),
  'name' => trim((string)$body['name']),
  'email' => $email,
  'phone' => trim((string)($body['phone'] ?? '')),
  'propertyArea' => trim((string)($body['propertyArea'] ?? '')),
  'propertyType' => trim((string)($body['propertyType'] ?? '')),
  'timeframe' => trim((string)($body['timeframe'] ?? '')),
  'servicesRequired' => trim((string)($body['servicesRequired'] ?? '')),
  'selectedPackage' => trim((string)($body['selectedPackage'] ?? '')),
  'quoteEstimate' => trim((string)($body['quoteEstimate'] ?? '')),
  'selectedServicesJson' => trim((string)($body['selectedServicesJson'] ?? '')),
  'message' => trim((string)$body['message']),
];

// ---- PHPMailer (install via Composer) ----
// require __DIR__ . '/../vendor/autoload.php';
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// $mail = new PHPMailer(true);
// $mail->isSMTP();
// $mail->Host = 'smtp.ionos.co.uk';        // check your mailbox settings
// $mail->SMTPAuth = true;
// $mail->Username = 'hello@mw-photography.co.uk';
// $mail->Password = 'YOUR_MAILBOX_PASSWORD';
// $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
// $mail->Port = 587;

// $mail->setFrom('hello@mw-photography.co.uk', 'MW Photography');
// $mail->addAddress('hello@mw-photography.co.uk');
// $mail->addReplyTo($submission['email'], $submission['name']);

// $mail->Subject = 'New website enquiry';
// $mail->Body = print_r($submission, true);
// $mail->send();

echo json_encode(['ok' => true, 'message' => 'Enquiry received.']);