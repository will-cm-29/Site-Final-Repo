MW PHOTOGRAPHY — PORTFOLIO THUMBNAIL SIZE FIX
13 October 2026

Problem:
The homepage portfolio had CSS rules scoped to #portfolioGrid.portfolio-curated-grid,
but index.html was missing the class portfolio-curated-grid. The default 12-column
masonry rule was consequently applied and shrunk images into tiny thumbnails.

Fix:
1. index.html: added portfolio-curated-grid to the portfolio container.
2. styles.css: simplified the curated gallery selectors to match #portfolioGrid
   directly. This guards against this mismatch recurring.
3. index.html: added a version query to the stylesheet URL to avoid cached CSS.

Preserved:
- 18 selected portfolio images, with the first 12 visible by default and 6 on Show more.
- Project galleries, Casterbridge photographs/video, pricing and navigation.

Checks:
- Rendered responsive portfolio section with embedded local images at 1440px,
  820px and 390px viewport widths.
- Verified resulting columns: 3, 2, 1. On desktop each image tile is ~413px wide.
- Verified all thumbnail/full files for 18 images are present.
- script.js passes node --check.

Installation:
For the EXISTING GitHub repository, replace index.html and styles.css at the
repository root with these two files. Do not delete project folders.
Wait for GitHub Pages deployment, then refresh the browser (Ctrl+F5).
If the old layout persists, check the deployed HTML has:
  class="masonry portfolio-curated-grid"
on the element with id="portfolioGrid".

The actual live website has not been changed by this patch.

Preview images are available separately in the conversation.
