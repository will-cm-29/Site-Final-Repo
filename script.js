document.addEventListener("DOMContentLoaded", () => {
    // ============================================================
    // DATA
    // ============================================================
    const heroImages = [
        "assets/hero/hero-01.webp",
        "assets/hero/hero-02.webp",
        "assets/hero/hero-03.webp",
        "assets/hero/hero-04.webp",
        "assets/hero/hero-05.webp"
    ];

    const projects = {
        "boscombe-5-bed": {
            title: "5-Bed House — Boscombe",
            byline: "Holiday let / property marketing",
            description:
                "Photography for a five-bedroom Boscombe holiday let, created to highlight the property's layout, design details and guest amenities for stronger listing and marketing presentation.",
            hero: "assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-kitchen-2400.webp",
            layout: ["w2", "h2", "", "h2", "", "w2", "h2", "h2", "", "w2", "w2"],
            gallery: [
                {
                    thumb: "assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-living-800.webp",
                    full: "assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-living-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-living2-800.webp",
                    full: "assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-living2-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-kitchen2-800.webp",
                    full: "assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-kitchen2-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-bedroom-800.webp",
                    full: "assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-bedroom-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-bathroom-800.webp",
                    full: "assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-bathroom-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-football-800.webp",
                    full: "assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-football-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-tennis-800.webp",
                    full: "assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-tennis-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-shower-800.webp",
                    full: "assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-shower-2400.webp"
                }
            ]
        },

        "boscombe-3-bed": {
            title: "3-Bed House — Boscombe",
            byline: "Modern family home / property marketing",
            description:
                "Interior and drone photography for a bright three-bedroom home in Boscombe, focused on presenting the open-plan living spaces, natural light, bedroom styling and wider exterior setting for property marketing.",
            hero: "assets/projects/commissioned/boscombe-3-bed-j/full/boscombe-3-bed-kitchen-2400.webp",
            layout: ["w2", "h2", "h2", "w2", "", "", "h2", "", "h2", "", "w2", "w2"],
            gallery: [
                {
                    thumb: "assets/projects/commissioned/boscombe-3-bed-j/thumb/boscombe-3-bed-dining-800.webp",
                    full: "assets/projects/commissioned/boscombe-3-bed-j/full/boscombe-3-bed-dining-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-3-bed-j/thumb/boscombe-3-bed-table-800.webp",
                    full: "assets/projects/commissioned/boscombe-3-bed-j/full/boscombe-3-bed-table-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-3-bed-j/thumb/boscombe-3-bed-living-800.webp",
                    full: "assets/projects/commissioned/boscombe-3-bed-j/full/boscombe-3-bed-living-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-3-bed-j/thumb/boscombe-3-bed-landing-800.webp",
                    full: "assets/projects/commissioned/boscombe-3-bed-j/full/boscombe-3-bed-landing-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-3-bed-j/thumb/boscombe-3-bed-master-800.webp",
                    full: "assets/projects/commissioned/boscombe-3-bed-j/full/boscombe-3-bed-master-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-3-bed-j/thumb/boscombe-3-bed-bed-800.webp",
                    full: "assets/projects/commissioned/boscombe-3-bed-j/full/boscombe-3-bed-bed-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-3-bed-j/thumb/boscombe-3-bed-bedb-800.webp",
                    full: "assets/projects/commissioned/boscombe-3-bed-j/full/boscombe-3-bed-bedb-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-3-bed-j/thumb/boscombe-3-bed-drone-800.webp",
                    full: "assets/projects/commissioned/boscombe-3-bed-j/full/boscombe-3-bed-drone-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-3-bed-j/thumb/boscombe-3-bed-chair-800.webp",
                    full: "assets/projects/commissioned/boscombe-3-bed-j/full/boscombe-3-bed-chair-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-3-bed-j/thumb/boscombe-3-bed-dronec-800.webp",
                    full: "assets/projects/commissioned/boscombe-3-bed-j/full/boscombe-3-bed-dronec-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/boscombe-3-bed-j/thumb/boscombe-3-bed-droned-800.webp",
                    full: "assets/projects/commissioned/boscombe-3-bed-j/full/boscombe-3-bed-droned-2400.webp"
                }
            ]
        },

        "bournemouth-coach": {
            title: "The Coach House — Bournemouth",
            byline: "Character property / listing visuals",
            description:
                "Interior and exterior photography for The Coach House in Bournemouth, created to showcase the property's character, layout, bedroom presentation and outdoor setting for strong listing imagery.",
            hero: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-2400.webp",
            layout: ["w2", "h2", "", "h2", "", "w2", "w2", "", "h2", "", "w2", "", ""],
            gallery: [
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-drive-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-drive-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-bed6-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-bed6-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-out-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-out-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-bed7-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-bed7-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-out2-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-out2-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-bed11-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-bed11-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-bed12-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-bed12-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-bed13-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-bed13-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-bed10-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-bed10-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-bed8-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-bed8-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-bed9-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-bed9-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-bed2-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-bed2-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-living-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-living-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-lounge3-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-lounge3-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-bed4-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-bed4-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-bed5-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-bed5-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-bath-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-bath-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-game-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-game-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bournemouth-coach-house/thumb/bournemouth-coach-bed-800.webp",
                    full: "assets/projects/commissioned/bournemouth-coach-house/full/bournemouth-coach-bed-2400.webp"
                }
            ]
        }
    };

    const pricingData = {
        "photography": {
            title: "Photography",
            intro: "Interior and exterior photography for listings, websites and marketing materials.",
            packages: [
                { tier: "Small Property", price: "From £145", detail: "10–15 edited images" },
                { tier: "Standard Property", price: "From £195", detail: "15–20 edited images" },
                { tier: "Large Property", price: "From £245", detail: "20–30 edited images" }
            ],
            delivery: [
                "Standard delivery: 72 hours",
                "Next working day priority: +£25 to +£40",
                "Same day, subject to availability: +£50 to +£90",
                "Weekend / urgent booking: +20% to +30%"
            ],
            notes: [
                "Final pricing depends on property size, access and location.",
                "Image count and scope may vary depending on the layout and brief."
            ]
        },

        "photography-drone": {
            title: "Photography + Drone",
            intro: "Photography with aerial coverage to show plot, setting and exterior context.",
            packages: [
                { tier: "Essential", price: "From £235", detail: "10–15 photos + 3–5 drone images" },
                { tier: "Plus", price: "From £285", detail: "15–20 photos + 5–8 drone images" },
                { tier: "Premium", price: "From £345", detail: "20–30 photos + 8–12 drone images" }
            ],
            delivery: [
                "Standard delivery: 72 hours",
                "Next working day priority: +£25 to +£40",
                "Same day, subject to availability: +£50 to +£90",
                "Weekend / urgent booking: +20% to +30%"
            ],
            notes: [
                "Drone coverage is subject to weather, permissions and safe operating conditions.",
                "Image counts may vary depending on property size and exterior scope."
            ]
        },

        "photography-floorplan": {
            title: "Photography + Floor Plan",
            intro: "Photography combined with floor plan delivery for sales, lettings and holiday-let marketing.",
            packages: [
                { tier: "Small", price: "From £175", detail: "10–15 photos + floor plan" },
                { tier: "Standard", price: "From £215", detail: "15–20 photos + floor plan" },
                { tier: "Large", price: "From £255", detail: "20–30 photos + floor plan" }
            ],
            delivery: [
                "Standard delivery: 72 hours",
                "Next working day priority: +£25 to +£40",
                "Same day, subject to availability: +£50 to +£90",
                "Weekend / urgent booking: +20% to +30%"
            ],
            notes: [
                "Final pricing depends on size, access and complexity.",
                "Larger or more complex properties may require a tailored quote."
            ]
        },

        "drone-only": {
            title: "Drone Only",
            intro: "Aerial stills and optional short clip coverage for exterior presentation and site overview.",
            packages: [
                { tier: "Basic", price: "From £95", detail: "3–5 edited drone shots" },
                { tier: "Standard", price: "From £145", detail: "5–10 edited drone shots" },
                { tier: "Enhanced", price: "From £195", detail: "10+ drone shots or stills + short clip" }
            ],
            delivery: [
                "Standard delivery: 72 hours",
                "Next working day priority: +£25 to +£40",
                "Same day, subject to availability: +£50 to +£90",
                "Weekend / urgent booking: +20% to +30%"
            ],
            notes: [
                "Drone-only work is subject to weather, permissions and safe flying conditions.",
                "Exterior scope and site restrictions may affect final pricing."
            ]
        },

        "video": {
            title: "Video",
            intro: "Short-form property and marketing video tailored to the space and required output.",
            packages: [
                { tier: "Highlight Reel", price: "From £145", detail: "30–45 sec" },
                { tier: "Walkthrough Video", price: "From £195", detail: "45–60 sec" },
                { tier: "Feature Video", price: "From £295", detail: "60–90 sec, more polished edit" }
            ],
            delivery: [
                "Standard delivery: 72 hours",
                "Next working day priority: +£25 to +£40",
                "Same day, subject to availability: +£50 to +£90",
                "Weekend / urgent booking: +20% to +30%"
            ],
            notes: [
                "Final pricing depends on edit complexity, shot list and required output.",
                "Feature videos may be quoted individually depending on scope."
            ]
        },

        "tour-360": {
            title: "360 Tour",
            intro: "Interactive 360 tour options for stronger online presentation and walkthrough-style viewing.",
            packages: [
                { tier: "Basic 360 Tour", price: "From £85", detail: "Entry-level 360 capture" },
                { tier: "Standard Hosted Tour", price: "From £115", detail: "Hosted tour setup included" },
                { tier: "Larger / Enhanced Tour", price: "From £145+", detail: "Larger property or enhanced tour setup" }
            ],
            delivery: [
                "Standard delivery: 72 hours",
                "Next working day priority: +£25 to +£40",
                "Same day, subject to availability: +£50 to +£90",
                "Weekend / urgent booking: +20% to +30%"
            ],
            notes: [
                "Hosted tour requirements and property size can affect final pricing.",
                "Larger or multi-level properties may require a tailored quote."
            ]
        },

        "floor-plans": {
            title: "Floor Plans",
            intro: "Clear floor plan delivery for listings and supporting marketing packs.",
            packages: [
                { tier: "Small / Simple", price: "From £35", detail: "Smaller or simpler property layout" },
                { tier: "Standard", price: "From £45", detail: "Typical residential property layout" },
                { tier: "Large / Complex", price: "From £55", detail: "Larger or more complex floor plan" }
            ],
            delivery: [
                "Standard delivery: 72 hours",
                "Next working day priority: +£25 to +£40",
                "Same day, subject to availability: +£50 to +£90",
                "Weekend / urgent booking: +20% to +30%"
            ],
            notes: [
                "Final pricing depends on size and layout complexity.",
                "Larger multi-level properties may be quoted individually."
            ]
        }
    };

    // ============================================================
    // UTILITIES
    // ============================================================
    const qs = (sel, root = document) => root?.querySelector(sel);
    const qsa = (sel, root = document) => Array.from(root?.querySelectorAll(sel) || []);

    let scrollLockCount = 0;
    let lastFocusedElement = null;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function lockScroll() {
        scrollLockCount += 1;
        if (scrollLockCount === 1) document.body.style.overflow = "hidden";
    }

    function unlockScroll() {
        scrollLockCount = Math.max(0, scrollLockCount - 1);
        if (scrollLockCount === 0) document.body.style.overflow = "";
    }

    function trapFocus(container, event) {
        if (!container || event.key !== "Tab") return;

        const focusable = qsa(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
            container
        ).filter(el => el.offsetParent !== null);

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    function preloadImage(src) {
        if (!src) return;
        const img = new Image();
        img.src = src;
    }

    // ============================================================
    // MOBILE NAV
    // ============================================================
    const navToggle = qs("#navToggle");
    const mobileNav = qs("#mobileNav");

    if (navToggle && mobileNav) {
        navToggle.addEventListener("click", () => {
            const isOpen = mobileNav.classList.toggle("is-open");
            navToggle.setAttribute("aria-expanded", String(isOpen));
        });

        qsa(".nav-link", mobileNav).forEach(link => {
            link.addEventListener("click", () => {
                mobileNav.classList.remove("is-open");
                navToggle.setAttribute("aria-expanded", "false");
            });
        });

        document.addEventListener("click", (e) => {
            if (!mobileNav.classList.contains("is-open")) return;
            const insideNav = e.target.closest(".nav");
            if (!insideNav) {
                mobileNav.classList.remove("is-open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    // ============================================================
    // HERO CROSSFADE
    // ============================================================
    const slideA = qs(".hero-slide-a");
    const slideB = qs(".hero-slide-b");

    function loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;

            if (img.complete) {
                resolve(src);
                return;
            }

            if (typeof img.decode === "function") {
                img.decode()
                    .then(() => resolve(src))
                    .catch(() => resolve(src));
            } else {
                img.onload = () => resolve(src);
                img.onerror = reject;
            }
        });
    }

    if (slideA && slideB && heroImages.length) {
        let index = 0;
        let showingA = true;
        let isTransitioning = false;

        slideA.style.backgroundImage = `url("${heroImages[0]}")`;
        slideA.style.opacity = "1";
        slideB.style.opacity = "0";

        if (heroImages[1]) {
            preloadImage(heroImages[1]);
        }

        if (!prefersReducedMotion && heroImages.length > 1) {
            slideA.style.transition = "opacity 1.2s ease";
            slideB.style.transition = "opacity 1.2s ease";

            const changeSlide = async () => {
                if (isTransitioning) return;
                isTransitioning = true;

                const nextIndex = (index + 1) % heroImages.length;
                const nextSrc = heroImages[nextIndex];

                const incoming = showingA ? slideB : slideA;
                const outgoing = showingA ? slideA : slideB;

                try {
                    await loadImage(nextSrc);
                    incoming.style.backgroundImage = `url("${nextSrc}")`;

                    requestAnimationFrame(() => {
                        incoming.style.opacity = "1";
                        outgoing.style.opacity = "0";

                        showingA = !showingA;
                        index = nextIndex;

                        setTimeout(() => {
                            isTransitioning = false;
                        }, 1200);
                    });
                } catch {
                    isTransitioning = false;
                }
            };

            setInterval(changeSlide, 5200);
        }
    }

    // ============================================================
    // FOOTER YEAR
    // ============================================================
    const yearEl = qs("#year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ============================================================
    // MODAL HELPERS
    // ============================================================
    function openDialog(overlayEl, panelEl) {
        if (!overlayEl || !panelEl) return;

        lastFocusedElement = document.activeElement;
        overlayEl.hidden = false;
        overlayEl.scrollTop = 0;
        panelEl.scrollTop = 0;

        lockScroll();

        requestAnimationFrame(() => {
            panelEl.focus({ preventScroll: true });
        });
    }

    function closeDialog(overlayEl) {
        if (!overlayEl || overlayEl.hidden) return;

        overlayEl.hidden = true;
        overlayEl.scrollTop = 0;

        unlockScroll();

        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus();
        }
    }

    // ============================================================
    // ABOUT MODAL
    // ============================================================
    const aboutOverlay = qs("#aboutOverlay");
    const aboutPanel = qs(".overlay-about");
    const aboutOpenBtn = qs("#aboutOpen");

    const openAbout = () => openDialog(aboutOverlay, aboutPanel);
    const closeAbout = () => closeDialog(aboutOverlay);

    if (aboutOpenBtn) aboutOpenBtn.addEventListener("click", openAbout);
    qsa("[data-close-about]").forEach(el => el.addEventListener("click", closeAbout));

    // ============================================================
    // PRICING MODAL
    // ============================================================
    const pricingOverlay = qs("#pricingOverlay");
    const pricingPanel = qs(".overlay-pricing");
    const pricingTitle = qs("#pricingModalTitle");
    const pricingDescription = qs("#pricingModalDescription");
    const pricingPackages = qs("#pricingModalPackages");
    const pricingDeliveryList = qs("#pricingDeliveryList");
    const pricingNotesList = qs("#pricingNotesList");

    function renderPricingPackages(packages = []) {
        if (!pricingPackages) return;
        pricingPackages.innerHTML = "";

        packages.forEach(item => {
            const card = document.createElement("article");
            card.className = "pricing-package-card";
            card.innerHTML = `
                <p class="pricing-package-tier">${item.tier}</p>
                <p class="pricing-package-price">${item.price}</p>
                <p class="pricing-package-detail">${item.detail}</p>
            `;
            pricingPackages.appendChild(card);
        });
    }

    function renderPricingList(target, items = []) {
        if (!target) return;
        target.innerHTML = "";

        items.forEach(text => {
            const li = document.createElement("li");
            li.textContent = text;
            target.appendChild(li);
        });
    }

    function openPricing(pricingId) {
        const item = pricingData[pricingId];
        if (!item || !pricingOverlay || !pricingPanel) return;

        if (pricingTitle) pricingTitle.textContent = item.title || "Pricing";
        if (pricingDescription) pricingDescription.textContent = item.intro || "";

        renderPricingPackages(item.packages || []);
        renderPricingList(pricingDeliveryList, item.delivery || []);
        renderPricingList(pricingNotesList, item.notes || []);

        openDialog(pricingOverlay, pricingPanel);
    }

    function closePricing() {
        closeDialog(pricingOverlay);
        if (pricingPackages) pricingPackages.innerHTML = "";
        if (pricingDeliveryList) pricingDeliveryList.innerHTML = "";
        if (pricingNotesList) pricingNotesList.innerHTML = "";
    }

    qsa(".pricing-trigger").forEach(btn => {
        btn.addEventListener("click", () => openPricing(btn.dataset.pricingId));
    });

    qsa("[data-close-pricing]").forEach(el => {
        el.addEventListener("click", closePricing);
    });

    // ============================================================
    // LIGHTBOX
    // ============================================================
    const lightbox = qs("#lightbox");
    const lightboxStage = qs(".lightbox-stage");
    const lightboxImg = qs("#lightboxImage");
    const lightboxCaption = qs("#lightboxCaption");
    const lightboxPrev = qs("#lightboxPrev");
    const lightboxNext = qs("#lightboxNext");
    const lightboxTapLeft = qs(".lightbox-tapzone-left");
    const lightboxTapRight = qs(".lightbox-tapzone-right");

    let lightboxImages = [];
    let lightboxIndex = 0;
    let lightboxCaptionText = "";

    function renderLightbox() {
        if (!lightboxImg || !lightboxImages.length) return;

        const src = lightboxImages[lightboxIndex];
        lightboxImg.src = src;
        lightboxImg.alt = lightboxCaptionText || `Image ${lightboxIndex + 1}`;

        if (lightboxCaption) {
            lightboxCaption.textContent = `${lightboxCaptionText || "Image"} (${lightboxIndex + 1}/${lightboxImages.length})`;
        }

        preloadImage(lightboxImages[(lightboxIndex + 1) % lightboxImages.length]);
        preloadImage(lightboxImages[(lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length]);
    }

    function openLightbox(images, startIndex = 0, captionText = "") {
        if (!lightbox || !lightboxStage || !images.length) return;
        lightboxImages = images.slice();
        lightboxIndex = Math.max(0, Math.min(startIndex, lightboxImages.length - 1));
        lightboxCaptionText = captionText;
        renderLightbox();
        openDialog(lightbox, lightboxStage);
    }

    function closeLightbox() {
        closeDialog(lightbox);
        if (lightboxImg) lightboxImg.src = "";
        lightboxImages = [];
        lightboxIndex = 0;
        lightboxCaptionText = "";
    }

    function nextLightbox() {
        if (!lightboxImages.length) return;
        lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
        renderLightbox();
    }

    function prevLightbox() {
        if (!lightboxImages.length) return;
        lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
        renderLightbox();
    }

    if (lightboxPrev) lightboxPrev.addEventListener("click", prevLightbox);
    if (lightboxNext) lightboxNext.addEventListener("click", nextLightbox);
    if (lightboxTapLeft) lightboxTapLeft.addEventListener("click", prevLightbox);
    if (lightboxTapRight) lightboxTapRight.addEventListener("click", nextLightbox);

    qsa("[data-close-lightbox]").forEach(el => {
        el.addEventListener("click", closeLightbox);
    });

    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (
                e.target === lightbox ||
                e.target.classList.contains("lightbox-backdrop") ||
                e.target.classList.contains("lightbox-stage") ||
                e.target.classList.contains("lightbox-figure")
            ) {
                closeLightbox();
            }
        });
    }

    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    function handleLightboxSwipe() {
        const dx = touchEndX - touchStartX;
        const dy = touchEndY - touchStartY;

        if (Math.abs(dx) < 40) return;
        if (Math.abs(dy) > Math.abs(dx) * 0.8) return;

        if (dx < 0) {
            nextLightbox();
        } else {
            prevLightbox();
        }
    }

    if (lightboxStage) {
        lightboxStage.addEventListener("touchstart", (e) => {
            const touch = e.changedTouches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
        }, { passive: true });

        lightboxStage.addEventListener("touchend", (e) => {
            const touch = e.changedTouches[0];
            touchEndX = touch.clientX;
            touchEndY = touch.clientY;
            handleLightboxSwipe();
        }, { passive: true });
    }

    // ============================================================
    // PROJECT MODAL
    // ============================================================
    const projectOverlay = qs("#projectOverlay");
    const projectPanel = qs(".overlay-project");
    const projectHero = qs("#projectModalHero");
    const projectByline = qs("#projectModalByline");
    const projectTitle = qs("#projectModalTitle");
    const projectDesc = qs("#projectModalDescription");
    const projectGallery = qs("#projectModalGallery");

    function renderProjectGallery(project) {
        if (!projectGallery) return;
        projectGallery.innerHTML = "";

        const fallbackPattern = ["", "h2", "", "w2", "", "h2", "w2", "", "", "h2"];
        const pattern = project.layout && project.layout.length ? project.layout : fallbackPattern;
        const fullImages = project.gallery.map(item => item.full);

        project.gallery.forEach((item, index) => {
            const shape = pattern[index % pattern.length];
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = `masonry-item${shape ? ` ${shape}` : ""}`;

            btn.innerHTML = `
                <img
                    src="${item.thumb}"
                    data-full="${item.full}"
                    alt="${project.title} image ${index + 1}"
                    loading="${index < 4 ? "eager" : "lazy"}"
                    decoding="async"
                >
            `;

            btn.addEventListener("click", () => openLightbox(fullImages, index, project.title));
            projectGallery.appendChild(btn);
        });
    }

    function openProject(projectId) {
        const project = projects[projectId];
        if (!project || !projectOverlay || !projectPanel) return;

        if (projectHero) {
            projectHero.src = project.hero || project.gallery[0]?.full || "";
            projectHero.alt = project.title;
        }

        if (projectByline) projectByline.textContent = project.byline || "";
        if (projectTitle) projectTitle.textContent = project.title || "Project";
        if (projectDesc) projectDesc.textContent = project.description || "";

        renderProjectGallery(project);

        if (projectOverlay) projectOverlay.scrollTop = 0;
        if (projectPanel) projectPanel.scrollTop = 0;

        openDialog(projectOverlay, projectPanel);
    }

    function closeProject() {
        closeDialog(projectOverlay);
        if (projectHero) projectHero.src = "";
        if (projectGallery) projectGallery.innerHTML = "";
    }

    qsa(".project-card[data-project-id]").forEach(card => {
        card.addEventListener("click", () => openProject(card.dataset.projectId));
    });

    qsa("[data-close-project]").forEach(el => el.addEventListener("click", closeProject));

    // ============================================================
    // PORTFOLIO
    // ============================================================
    const THUMB_SIZES = [800, 1600];
    const FULL_SIZE = 2400;
    const portfolioGrid = qs("#portfolioGrid");

    function sizesForTile(btn) {
        const isWide = btn.classList.contains("w2");
        if (!isWide) {
            return "(max-width: 520px) 50vw, (max-width: 700px) 50vw, (max-width: 1000px) 33vw, 25vw";
        }
        return "(max-width: 520px) 100vw, (max-width: 700px) 100vw, (max-width: 1000px) 66vw, 50vw";
    }

    function getPortfolioRoot(imgEl) {
        const masonry = imgEl.closest(".masonry");
        const gallery = masonry?.getAttribute("data-gallery") || "home1";
        return `assets/portfolio/${gallery}`;
    }

    function thumbSrc(root, base, w) {
        return `${root}/thumb/${base}-${w}.webp`;
    }

    function fullSrc(root, base) {
        return `${root}/full/${base}-${FULL_SIZE}.webp`;
    }

    function validateImage(src) {
        return new Promise(resolve => {
            const testImg = new Image();
            testImg.onload = () => resolve(true);
            testImg.onerror = () => resolve(false);
            testImg.src = src;
        });
    }

    function getVisiblePortfolioItems() {
        if (!portfolioGrid) return [];
        return qsa(".masonry-item:not(.is-hidden)", portfolioGrid);
    }

    function bindPortfolioLightbox() {
        const visibleItems = getVisiblePortfolioItems();

        visibleItems.forEach(btn => {
            if (btn.dataset.lightboxBound === "true") return;

            btn.dataset.lightboxBound = "true";

            btn.addEventListener("click", () => {
                const currentVisibleItems = getVisiblePortfolioItems();
                const fullList = currentVisibleItems
                    .map(item => qs("img", item))
                    .map(img => img?.dataset.full || img?.src)
                    .filter(Boolean);

                const clickedIndex = currentVisibleItems.indexOf(btn);
                if (clickedIndex > -1) {
                    openLightbox(fullList, clickedIndex, "Portfolio");
                }
            });
        });
    }

    async function setupPortfolioImages() {
        const portfolioImages = qsa("#portfolio img[data-img]");
        const validTiles = [];

        for (const img of portfolioImages) {
            const base = img.getAttribute("data-img");
            const btn = img.closest(".masonry-item");
            if (!base || !btn) continue;

            const root = getPortfolioRoot(img);
            const smallThumb = thumbSrc(root, base, THUMB_SIZES[0]);
            const fullImage = fullSrc(root, base);

            const exists = await validateImage(smallThumb);

            if (!exists) {
                btn.remove();
                continue;
            }

            img.src = smallThumb;
            img.srcset = THUMB_SIZES.map(w => `${thumbSrc(root, base, w)} ${w}w`).join(", ");
            img.sizes = sizesForTile(btn);
            img.loading = "lazy";
            img.decoding = "async";
            img.dataset.full = fullImage;

            validTiles.push(btn);
        }

        return validTiles;
    }

    function setupPortfolioLoadMore(validItems) {
        const loadMoreBtn = qs("#portfolioLoadMore");
        if (!loadMoreBtn || !validItems.length) return;

        const isMobile = window.innerWidth <= 720;
        const initialCount = isMobile ? 8 : 12;
        const stepCount = isMobile ? 8 : 12;

        let visibleCount = initialCount;

        function updateVisibility() {
            validItems.forEach((item, index) => {
                item.classList.toggle("is-hidden", index >= visibleCount);
            });

            loadMoreBtn.hidden = visibleCount >= validItems.length;
        }

        updateVisibility();

        loadMoreBtn.addEventListener("click", () => {
            visibleCount += stepCount;
            updateVisibility();
            bindPortfolioLightbox();
        });
    }

    async function initPortfolio() {
        const loadMoreBtn = qs("#portfolioLoadMore");
        const validItems = await setupPortfolioImages();

        if (!validItems.length) {
            if (loadMoreBtn) loadMoreBtn.hidden = true;
            return;
        }

        setupPortfolioLoadMore(validItems);
        bindPortfolioLightbox();
    }

    initPortfolio();

    // ============================================================
    // REVIEWS CAROUSEL
    // ============================================================
    const reviewsCarousel = qs("#reviewsCarousel");
    const reviewsPrev = qs("#reviewsPrev");
    const reviewsNext = qs("#reviewsNext");

    if (reviewsCarousel && reviewsPrev && reviewsNext) {
        const getScrollAmount = () => {
            const firstCard = qs(".review-slide", reviewsCarousel);
            if (!firstCard) return 320;

            const styles = window.getComputedStyle(reviewsCarousel);
            const gap = parseFloat(styles.columnGap || styles.gap || 12);
            return firstCard.offsetWidth + gap;
        };

        reviewsPrev.addEventListener("click", () => {
            reviewsCarousel.scrollBy({
                left: -getScrollAmount(),
                behavior: prefersReducedMotion ? "auto" : "smooth"
            });
        });

        reviewsNext.addEventListener("click", () => {
            reviewsCarousel.scrollBy({
                left: getScrollAmount(),
                behavior: prefersReducedMotion ? "auto" : "smooth"
            });
        });
    }

    // ============================================================
    // REVIEW READ MORE / HIDE
    // ============================================================
    function setupReviewToggles() {
        qsa(".review-slide").forEach(card => {
            const text = qs(".review-slide-text", card);
            const button = qs(".review-toggle", card);
            if (!text || !button) return;

            text.classList.add("is-collapsed");
            button.textContent = "Read more";
            button.hidden = true;

            requestAnimationFrame(() => {
                const lineHeight = parseFloat(getComputedStyle(text).lineHeight);
                const collapsedMaxHeight = lineHeight * 4;
                const needsToggle = text.scrollHeight > collapsedMaxHeight + 4;

                if (needsToggle) {
                    button.hidden = false;
                }
            });

            button.addEventListener("click", () => {
                const isCollapsed = text.classList.contains("is-collapsed");

                if (isCollapsed) {
                    text.classList.remove("is-collapsed");
                    button.textContent = "Hide";
                } else {
                    text.classList.add("is-collapsed");
                    button.textContent = "Read more";
                }
            });
        });
    }

    setupReviewToggles();

    // ============================================================
    // BACKDROP / CLICK-OUTSIDE CLOSE SAFETY
    // ============================================================
    projectOverlay?.addEventListener("click", (e) => {
        if (e.target === projectOverlay || e.target.classList.contains("overlay-backdrop")) {
            closeProject();
        }
    });

    aboutOverlay?.addEventListener("click", (e) => {
        if (e.target === aboutOverlay || e.target.classList.contains("overlay-backdrop")) {
            closeAbout();
        }
    });

    pricingOverlay?.addEventListener("click", (e) => {
        if (e.target === pricingOverlay || e.target.classList.contains("overlay-backdrop")) {
            closePricing();
        }
    });

    // ============================================================
    // KEYBOARD HANDLING
    // ============================================================
    document.addEventListener("keydown", (e) => {
        if (lightbox && !lightbox.hidden) {
            trapFocus(lightboxStage, e);

            if (e.key === "Escape") {
                e.preventDefault();
                closeLightbox();
                return;
            }

            if (e.key === "ArrowRight") {
                e.preventDefault();
                nextLightbox();
                return;
            }

            if (e.key === "ArrowLeft") {
                e.preventDefault();
                prevLightbox();
                return;
            }

            return;
        }

        if (pricingOverlay && !pricingOverlay.hidden) {
            trapFocus(pricingPanel, e);

            if (e.key === "Escape") {
                e.preventDefault();
                closePricing();
            }

            return;
        }

        if (projectOverlay && !projectOverlay.hidden) {
            trapFocus(projectPanel, e);

            if (e.key === "Escape") {
                e.preventDefault();
                closeProject();
            }

            return;
        }

        if (aboutOverlay && !aboutOverlay.hidden) {
            trapFocus(aboutPanel, e);

            if (e.key === "Escape") {
                e.preventDefault();
                closeAbout();
            }
        }
    });
});