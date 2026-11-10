# MW Photography — portfolio image selection
10 November 2026 — revised following client review

## Outcome
- Homepage portfolio now displays **32 carefully selected photographs**, down from 36.
- Four images were removed at the client's request: original #02 Bournemouth conservatory, #21 Bournemouth Airbnb dining, #33 white kitchen/yellow skylight, and #35 bedroom incorrectly labelled sea view.
- **#27 Southampton city-centre dining room with skylight has been retained.** It has a warm appearance from wooden furniture and warm-toned finishes, but whites are reasonably neutral and the wide, bright composition meets the portfolio brief. No colour adjustment was applied.
- The erroneous 'coastal view' alt text was removed with the bedroom image. No other page text references that specific image as having a sea view. The source filename is no longer included in the homepage gallery assets.
- Images belonging to individual project galleries were left intact; this review concerns the curated homepage portfolio only.
- Homepage Featured Projects and the All Projects archive retain the improved distinct opening order.

## Selected homepage gallery images in new display order

| # | Image file (base name) | Project / subject | Was in previous homepage gallery? |
|---:|---|---|---|
| 1 | `hardy-house-exterior` | Hardy House, Ferndown | Yes |
| 2 | `seashells-dining-room-wide` | Seashells, Hythe | New |
| 3 | `white-kitchen-skylight-fitted-appliances` | Residential interior | New |
| 4 | `bournemouth-airbnb-swimming-pool` | Bournemouth Airbnb with pool | New |
| 5 | `southampton-four-poster-bedroom-ensuite` | Southampton serviced apartment | Yes |
| 6 | `patio-seating-coastal-view` | Poole seaside holiday let | Yes |
| 7 | `living-dining-area-garden-doors` | Residential and holiday-let interiors | Yes |
| 8 | `hardy-house-lounge` | Hardy House, Ferndown | Yes |
| 9 | `aerial-beach-coastline` | South Coast aerial work | Yes |
| 10 | `seashells-terrace-water-view` | Seashells, Hythe | New |
| 11 | `open-plan-kitchen-dining-living` | Residential and holiday-let interiors | New |
| 12 | `bournemouth-airbnb-blue-kitchen` | Bournemouth Airbnb with pool | New |
| 13 | `conservatory-seating-garden-view` | Residential and holiday-let interiors | Yes |
| 14 | `aerial-house-garden` | South Coast drone property work | New |
| 15 | `living-room-sofas-garden-view` | Residential interior | Yes |
| 16 | `hardy-house-conservatory` | Hardy House, Ferndown | New |
| 17 | `garden-hot-tub-sauna-pod` | Boscombe holiday let | New |
| 18 | `bedroom-bay-window-seating` | Residential interior | Yes |
| 19 | `seashells-main-bar` | Seashells, Hythe | New |
| 20 | `hardy-house-day-lounge` | Hardy House, Ferndown | Yes |
| 21 | `coastal-house-front-garden-exterior` | Coastal holiday let | Yes |
| 22 | `open-plan-dining-living-garden-doors` | Residential and holiday-let interiors | New |
| 23 | `bournemouth-airbnb-garden-patio` | Bournemouth Airbnb with pool | New |
| 24 | `kitchen-island-pendant-lighting` | Residential interior | Yes |
| 25 | `southampton-city-centre-dining-room-skylight` | Southampton serviced apartment | New |
| 26 | `aerial-marina-boats` | South Coast aerial work | Yes |
| 27 | `hardy-house-garden-rear` | Hardy House, Ferndown | New |
| 28 | `dining-area-sliding-glass-doors` | Residential and holiday-let interiors | Yes |
| 29 | `upholstered-bed-dressing-table` | Bournemouth Airbnb with pool | New |
| 30 | `rear-house-exterior-garden` | Coastal holiday let | Yes |
| 31 | `bedroom-wooden-bed-wall-art` | Residential interior | New |
| 32 | `bournemouth-airbnb-front-exterior` | Bournemouth Airbnb with pool | New |

## Changes from prior 36-image selection
- Removed `bournemouth-airbnb-conservatory-lounge` (former #02).
- Removed `bournemouth-airbnb-dining-kitchen` (former #21).
- Removed `white-kitchen-yellow-skylight` (former #33).
- Removed `bedroom-sea-view` (former #35; not actually a sea view).
- Kept `southampton-city-centre-dining-room-skylight` (former #27).

## Implementation
- Updated `index.html` gallery markup and initial photograph count.
- Removed unused homepage-only resized copies for the four excluded images.
- Kept the existing responsive gallery, progressive reveal and image lightbox logic.
- The original photography and project galleries remain unchanged.
