# MW Photography SEO implementation

Updated: 21 July 2026

## Implemented

- Added indexable service architecture for property photography, Airbnb/holiday-let photography, drone photography and hospitality photography.
- Added Southampton, Bournemouth, Poole and Dorset location landing pages with distinct local content and project links.
- Added dedicated About and Contact pages, a quote form, contextual calls to action and a mobile contact bar.
- Added a custom noindex 404 page for GitHub Pages.
- Reworked global navigation and footer links to expose the new architecture.
- Improved homepage targeting and added a service overview.
- Added contextual project information and related service links without inventing results.
- Added author/trust boxes to blog articles.
- Added Twitter/X sharing metadata and retained canonical/Open Graph metadata.
- Added image dimensions where a static source is available, async decoding and appropriate lazy loading.
- Recompressed 64 oversized thumbnail derivatives while preserving their dimensions, saving approximately 32 MB.
- Rebuilt sitemap.xml and checked robots.txt.
- Corrected duplicated Southampton wording and shortened selected overloaded titles.

## Deliberately not invented

- Client performance results, booking increases or ROI.
- Credentials, licence numbers, insurance details, phone numbers or a public address not supplied in the repository.
- Before/after comparisons or named client endorsements without source material and permission.
- Review ratings or aggregate review schema.

## Deployment checks still requiring live services

After deployment, submit the sitemap in Google Search Console and test representative URLs with PageSpeed Insights, Rich Results Test and Search Console URL Inspection. Confirm the Formspree endpoint still accepts the expanded contact form and update Google Business Profile links to the new contact/location pages where useful.


## Evidence-led revision

- Removed the standalone 360-tour/floor-plan service page because the repository does not contain a representative 360 portfolio example or embedded tour.
- Removed new promotional references that presented 360 capture or floor plans as evidenced core services on the added pages.
- Preserved the pre-existing educational article and verbatim client review references; these are not presented as a current 360 portfolio.
- Removed unsupported food-photography wording from the hospitality service page.
- Reworded drone compliance wording so it does not imply an unverified credential.
- Corrected duplicated mobile contact bars and the duplicate H1 in the custom 404 page.


## August 2026 content and AI-search update
- Updated Still Image Video pricing to £45 standalone and £35 when added to an existing photography package.
- Added a crawlable pricing page with visible GBP prices and matching Offer schema.
- Added a curated Bournemouth Airbnb project using 16 of 23 supplied photographs; near-duplicate bathroom, conservatory, pool and exterior angles were excluded.
- Refreshed the homepage portfolio with eight strong images from the new shoot and removed eight weaker or repetitive items.
- Added explicit OAI-SearchBot, ChatGPT-User and Bingbot access while retaining full general crawl access. This supports access but does not guarantee recommendation or citation.
- No llms.txt file was added because Google states it is not required for AI search visibility.

## v2.2 service-intent and technical repair batch
- Added four service-specific FAQ sections using only operationally supportable claims.
- Added matching FAQPage structured data to each service page.
- Strengthened the pricing-to-service decision path with contextual service links.
- Repaired two zero-byte full-size WebP assets using their valid 1600px derivatives, preventing broken lightbox images.
- Revalidated local links, image assets, canonical URLs, heading structure and JSON-LD after the changes.

## v2.4 project presentation fixes
- Standardised the Bournemouth Airbnb with pool project gallery/lightbox behaviour.
- Restored the Southampton serviced-apartment gallery to the shared masonry layout.
- Replaced the Southampton page hero kitchen image with a brighter four-poster bedroom image.
- Increased homepage hero CTA contrast and button definition.


## v2.5 project thumbnail update
- Replaced the Bournemouth Airbnb with Pool archive thumbnail and structured-data image from the kitchen image to the stronger private-pool exterior image.
