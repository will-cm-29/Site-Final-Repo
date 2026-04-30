document.addEventListener("DOMContentLoaded", () => {
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

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
        },

        "poole-2-bed-j": {
            title: "Quayside House — Poole",
            byline: "Holiday let / property marketing",
            description:
                "Interior, exterior and aerial photography for this holiday let in Poole, captured to highlight its bright presentation, practical layout, inviting bedrooms, garden space and close connection to the marina surroundings for effective listing imagery.",
            hero: "assets/projects/commissioned/poole-2-bed-j/full/poole-2-bed-drone-2400.webp",
            layout: ["h2 w2", "h2", "", "", "", "h2", "h2", "", "", "", "h2 w2"],
            gallery: [
                {
                    thumb: "assets/projects/commissioned/poole-2-bed-j/thumb/poole-2-bed-front-1600.webp",
                    full: "assets/projects/commissioned/poole-2-bed-j/full/poole-2-bed-front-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/poole-2-bed-j/thumb/poole-2-bed-dining-800.webp",
                    full: "assets/projects/commissioned/poole-2-bed-j/full/poole-2-bed-dining-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/poole-2-bed-j/thumb/poole-2-bed-drone4-800.webp",
                    full: "assets/projects/commissioned/poole-2-bed-j/full/poole-2-bed-drone4-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/poole-2-bed-j/thumb/poole-2-bed-kitchen-800.webp",
                    full: "assets/projects/commissioned/poole-2-bed-j/full/poole-2-bed-kitchen-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/poole-2-bed-j/thumb/poole-2-bed-kitchen2-800.webp",
                    full: "assets/projects/commissioned/poole-2-bed-j/full/poole-2-bed-kitchen2-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/poole-2-bed-j/thumb/poole-2-bed-bedroom2-800.webp",
                    full: "assets/projects/commissioned/poole-2-bed-j/full/poole-2-bed-bedroom2-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/poole-2-bed-j/thumb/poole-2-bed-bedroom-800.webp",
                    full: "assets/projects/commissioned/poole-2-bed-j/full/poole-2-bed-bedroom-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/poole-2-bed-j/thumb/poole-2-bed-bedroom3-800.webp",
                    full: "assets/projects/commissioned/poole-2-bed-j/full/poole-2-bed-bedroom3-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/poole-2-bed-j/thumb/poole-2-bed-drone2-800.webp",
                    full: "assets/projects/commissioned/poole-2-bed-j/full/poole-2-bed-drone2-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/poole-2-bed-j/thumb/poole-2-bed-orange-1600.webp",
                    full: "assets/projects/commissioned/poole-2-bed-j/full/poole-2-bed-orange-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/poole-2-bed-j/thumb/poole-2-bed-drone3-1600.webp",
                    full: "assets/projects/commissioned/poole-2-bed-j/full/poole-2-bed-drone3-2400.webp"
                }
            ]
        },

        "bouremouth-5-bed-s": {
            title: "Ashcroft House — Bournemouth",
            byline: "Holiday let / property marketing",
            description:
                "Photography and aerial imagery for Ashcroft House By The Sea in Bournemouth, created to highlight the home’s spacious coastal feel, well-presented bedrooms, modern communal areas, outdoor space and desirable position near the beach for polished, high-impact listing visuals.",
            hero: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-bed-open-2400.webp",
            layout: ["h2", "h2", "", "", "", "h2", "h2", "", "", "", "h2 w2", "", "h2", "h2", ""],
            gallery: [
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-bed-door-800.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-bed-door-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-bed-dining-1600.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-bed-dining-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-bed-island-1600.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-bed-island-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-bed-hall-800.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-bed-hall-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-close-800.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-close-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-drone-800.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-drone-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-bed-kitchen-1600.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-bed-kitchen-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-island2-800.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-island2-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-open2-800.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-open2-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-drone2-800.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-drone2-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-bed-out-1600.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-bed-out-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-bed-800.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-bed-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-chair-800.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-chair-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-bed-out2-800.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-bed-out2-2400.webp"
                },
                {
                    thumb: "assets/projects/commissioned/bouremouth-5-bed-s/thumb/bouremouth-5-drone3-800.webp",
                    full: "assets/projects/commissioned/bouremouth-5-bed-s/full/bouremouth-5-drone3-2400.webp"
                }
            ]
        }

    };

    const qs = (sel, root = document) => root?.querySelector(sel);
    const qsa = (sel, root = document) => Array.from(root?.querySelectorAll(sel) || []);

    let scrollLockCount = 0;
    let lastFocusedElement = null;
    const mobileViewport = window.matchMedia("(max-width: 720px)");

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

    const yearEl = qs("#year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

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

    const aboutOverlay = qs("#aboutOverlay");
    const aboutPanel = qs(".overlay-about");
    const aboutOpenBtn = qs("#aboutOpen");

    const openAbout = () => openDialog(aboutOverlay, aboutPanel);
    const closeAbout = () => closeDialog(aboutOverlay);

    if (aboutOpenBtn) aboutOpenBtn.addEventListener("click", openAbout);
    qsa("[data-close-about]").forEach(el => el.addEventListener("click", closeAbout));

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

    if (lightboxTapLeft) {
        lightboxTapLeft.addEventListener("click", () => {
            if (!mobileViewport.matches) return;
            prevLightbox();
        });
    }

    if (lightboxTapRight) {
        lightboxTapRight.addEventListener("click", () => {
            if (!mobileViewport.matches) return;
            nextLightbox();
        });
    }

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