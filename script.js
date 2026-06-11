document.addEventListener("DOMContentLoaded", () => {
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    function scrollToHashTarget() {
        if (!window.location.hash) return;

        const target = document.querySelector(window.location.hash);
        if (!target) return;

        const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
        const extraOffset = -120;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset;

        const previousScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "auto";

        window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: prefersReducedMotion ? "auto" : "smooth"
        });

        document.documentElement.style.scrollBehavior = previousScrollBehavior;
    }

    if (window.location.hash) {
        window.addEventListener("load", () => {
            scrollToHashTarget();
        });
    } else {
        window.scrollTo(0, 0);
    }

    const heroImages = [
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
            hero: "/assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-kitchen-2400.webp",
            layout: ["w2", "h2", "", "h2", "", "w2", "h2", "h2", "h2", "h2", "w2",],
            gallery: [
                {
                    thumb: "/assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-living-800.webp",
                    full: "/assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-living-2400.webp"
                },
                {
                    thumb: "/assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-kitchen2-800.webp",
                    full: "/assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-kitchen2-2400.webp"
                },
                {
                    thumb: "/assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-drone-800.webp",
                    full: "/assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-drone-2400.webp"
                },
                {
                    thumb: "/assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-living2-800.webp",
                    full: "/assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-living2-2400.webp"
                },
                {
                    thumb: "/assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-clock-800.webp",
                    full: "/assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-clock-2400.webp"
                },

                {
                    thumb: "/assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-bedroom-1600.webp",
                    full: "/assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-bedroom-2400.webp"
                },
                {
                    thumb: "/assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-bed2-800.webp",
                    full: "/assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-bed2-2400.webp"
                },
                {
                    thumb: "/assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-bathroom-800.webp",
                    full: "/assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-bathroom-2400.webp"
                },
                {
                    thumb: "/assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-football-800.webp",
                    full: "/assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-football-2400.webp"
                },
                {
                    thumb: "/assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-shower-800.webp",
                    full: "/assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-shower-2400.webp"
                },
                {
                    thumb: "/assets/projects/commissioned/boscombe-5-bed/thumb/boscombe-5-bed-tennis-1600.webp",
                    full: "/assets/projects/commissioned/boscombe-5-bed/full/boscombe-5-bed-tennis-2400.webp"
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
            intro: "Interior and exterior photography for listings, websites, lettings, HMOs, holiday lets and marketing materials.",
            packages: [
                {
                    tier: "Essential",
                    price: "£95",
                    detail: "7–10 final edited images • best for rooms, small flats, quick rental listings and refresh shoots"
                },
                {
                    tier: "Listing",
                    price: "£195",
                    detail: "17–23 final edited images • best for most homes, HMOs, serviced accommodation and stronger listing coverage"
                },
                {
                    tier: "Premium",
                    price: "From £225",
                    detail: "25+ final edited images • best for larger homes, premium listings, holiday lets, commercial spaces and full marketing sets"
                }
            ],
            delivery: [
                "Standard delivery: usually within 24–48 hours",
                "Same-day priority: from £15, depending on service type, shoot size and workload",
                "Weekend and urgent bookings: available by request and quoted depending on availability"
            ],
            notes: [
                "Listed prices apply to standard-scope bookings.",
                "Larger properties, complex shoots, additional deliverables, difficult access, urgent turnaround, travel, parking or congestion charges may affect the final quote.",
                "Final pricing depends on property size, access, location, required deliverables and turnaround.",
                "Image ranges are based on final edited images delivered, not every image taken on the day.",
                "Same-day delivery may increase depending on shoot size, service type, edit complexity and workload.",
                "Travel, parking, congestion charges, access delays or restricted entry may affect the final quote.",
                "Regular client and multi-property rates are available for estate agents, landlords, developers and portfolio owners.",
                "Bookings are secured with a 25% deposit unless otherwise agreed. The remaining balance is due before final delivery."
            ]
        },

        "photography-drone": {
            title: "Photography + Drone",
            intro: "Property photography with aerial coverage to show the plot, setting, exterior context and surrounding area.",
            packages: [
                {
                    tier: "Essential",
                    price: "£195",
                    detail: "7–10 final edited property images + 3–5 drone images • strong entry point for smaller listings, rentals and exterior context"
                },
                {
                    tier: "Listing",
                    price: "£245",
                    detail: "17–23 final edited property images + 5–8 drone images • suitable for most homes, HMOs, holiday lets and stronger listing coverage"
                },
                {
                    tier: "Premium",
                    price: "From £325",
                    detail: "25+ final edited property images + 8–12 drone images • best for larger homes, premium listings, land, commercial spaces and standout settings"
                }
            ],
            delivery: [
                "Standard delivery: usually within 24–48 hours",
                "Same-day priority: from £15, depending on service type, shoot size and workload",
                "Weekend and urgent bookings: available by request and quoted depending on availability"
            ],
            notes: [
                "Listed prices apply to standard-scope bookings.",
                "Larger properties, complex shoots, additional deliverables, difficult access, urgent turnaround, travel, parking or congestion charges may affect the final quote.",
                "Drone coverage is subject to weather, permissions, airspace restrictions and safe operating conditions.",
                "Image ranges are based on final edited images delivered, not every image taken on the day.",
                "Same-day delivery may increase depending on shoot size, service type, edit complexity and workload.",
                "Travel, parking, congestion charges, access delays or restricted entry may affect the final quote.",
                "Bundled pricing is designed to offer better value than booking photography and drone separately.",
                "Regular client and multi-property rates are available for estate agents, landlords, developers and portfolio owners.",
                "Bookings are secured with a 25% deposit unless otherwise agreed. The remaining balance is due before final delivery."
            ]
        },

        "photography-floorplan": {
            title: "Photography + Floor Plan",
            intro: "Property photography combined with a clear floor plan for sales, lettings, HMOs, serviced accommodation and holiday-let marketing.",
            packages: [
                {
                    tier: "Essential",
                    price: "£125",
                    detail: "7–10 final edited images + floor plan • efficient bundle option for smaller properties, rentals and straightforward marketing needs"
                },
                {
                    tier: "Listing",
                    price: "£225",
                    detail: "17–23 final edited images + floor plan • better-value bundle for most homes, HMOs and serviced accommodation"
                },
                {
                    tier: "Premium",
                    price: "From £275",
                    detail: "25+ final edited images + floor plan • discounted package for larger homes, premium listings, holiday lets and stronger property presentation"
                }
            ],
            delivery: [
                "Standard delivery: usually within 24–48 hours",
                "Same-day priority: from £15, depending on service type, shoot size and workload",
                "Weekend and urgent bookings: available by request and quoted depending on availability"
            ],
            notes: [
                "Listed prices apply to standard-scope bookings.",
                "Larger properties, complex shoots, additional deliverables, difficult access, urgent turnaround, travel, parking or congestion charges may affect the final quote.",
                "Final pricing depends on property size, access, location, floor plan complexity and turnaround.",
                "Image ranges are based on final edited images delivered, not every image taken on the day.",
                "Same-day delivery may increase depending on shoot size, service type, edit complexity and workload.",
                "Travel, parking, congestion charges, access delays or restricted entry may affect the final quote.",
                "Larger, multi-level or more complex properties may require a tailored quote.",
                "Floor plans are supplied for marketing purposes and should not be relied on as legal or survey documents.",
                "Bundled pricing is designed to offer better value than booking photography and floor plans separately.",
                "Regular client and multi-property rates are available for estate agents, landlords, developers and portfolio owners.",
                "Bookings are secured with a 25% deposit unless otherwise agreed. The remaining balance is due before final delivery."
            ]
        },

        "drone-only": {
            title: "Drone Only",
            intro: "Aerial stills and optional short clip coverage for exterior presentation, development sites, land, commercial property and wider location context.",
            packages: [
                {
                    tier: "Essential",
                    price: "£135",
                    detail: "4–6 edited drone shots • suitable for simple exterior coverage"
                },
                {
                    tier: "Listing",
                    price: "£185",
                    detail: "7–10 edited drone shots • best for most residential properties and stronger exterior context"
                },
                {
                    tier: "Premium",
                    price: "From £255",
                    detail: "10+ edited drone shots, with optional short clip coverage • broader coverage for larger sites or stronger marketing use"
                }
            ],
            delivery: [
                "Standard delivery: usually within 24–48 hours",
                "Same-day priority: from £15, depending on service type, shoot size and workload",
                "Weekend and urgent bookings: available by request and quoted depending on availability"
            ],
            notes: [
                "Listed prices apply to standard-scope bookings.",
                "Larger sites, complex shoots, additional deliverables, difficult access, urgent turnaround, travel, parking or congestion charges may affect the final quote.",
                "Drone-only work is subject to weather, permissions, airspace restrictions and safe flying conditions.",
                "Exterior scope, site restrictions, location and turnaround may affect final pricing.",
                "Same-day delivery may increase depending on site size, shoot complexity and workload.",
                "Travel, parking, congestion charges, access delays or restricted entry may affect the final quote.",
                "Bookings are secured with a 25% deposit unless otherwise agreed. The remaining balance is due before final delivery."
            ]
        },

        "video": {
            title: "Video",
            intro: "Filmed property video for listings, websites and social media. Best for properties that need a proper on-site walkthrough, drone footage and a stronger sense of flow, scale and setting.",
            packages: [
                {
                    tier: "Single Format Video",
                    price: "£200",
                    detail: "One filmed property video up to 2 minutes • choose either vertical or horizontal format • ideal for a focused listing video or social media post"
                },
                {
                    tier: "Dual Format Social Media Video",
                    price: "£300",
                    detail: "Vertical and horizontal filmed edits included • up to 2 minutes each • ideal for reels, social media and property listing promotion"
                },
                {
                    tier: "Premium Video Package",
                    price: "From £400",
                    detail: "Premium filmed property video package for stronger listing presentation, expanded shot coverage, more involved edits and tailored deliverables"
                }
            ],
            delivery: [
                "Standard delivery: usually within 2–4 working days",
                "Weekend and urgent bookings: available by request and quoted depending on availability"
            ],
            notes: [
                "Listed prices apply to standard-scope bookings.",
                "Larger properties, complex shoots, additional deliverables, difficult access, urgent turnaround, travel, parking or congestion charges may affect the final quote.",
                "Drone footage is included with walkthrough video packages, subject to weather, permissions, airspace restrictions and safe operating conditions.",
                "Optional realtor / agent overlays can be added, including room names, bedroom counts, key features and property highlights.",
                "Videos can be produced longer than 2 minutes where needed; please contact us so the scope, edit time and final deliverables can be quoted properly.",
                "Final edits can be tailored to the client’s preferred use, with shorter cut-down versions available for platforms, listings or social media placements where required.",
                "The premium video package starts from £400 and should be discussed before booking so the scope, shot list and deliverables are clear.",
                "Final pricing depends on edit complexity, shot list, required output and turnaround.",
                "Travel, parking, congestion charges, access delays or restricted entry may affect the final quote.",
                "Regular client and multi-property rates are available for estate agents, landlords, developers and portfolio owners.",
                "Bookings are secured with a 25% deposit unless otherwise agreed. The remaining balance is due before final delivery."
            ]
        },

        "still-image-video": {
            title: "Still Image Video",
            intro: "Affordable moving video created from still property photos. MW Photography completes the edit, while AI-assisted tools add controlled movement, depth and transitions to the supplied images.",
            packages: [
                {
                    tier: "Using existing photos",
                    price: "£65",
                    detail: "Short edited moving video from client-supplied property photos • usually around 20–45 seconds • music, pacing and simple title treatment included"
                },
                {
                    tier: "Added to a new MW Photography shoot",
                    price: "£50",
                    detail: "Lower add-on rate when booked alongside a new photography package • photography itself is charged at the standard package rate"
                }
            ],
            delivery: [
                "Standard delivery: usually within 2–4 working days after final images are available",
                "Client-supplied photos can usually be handled remotely without a site visit"
            ],
            notes: [
                "Listed prices apply to standard short edits.",
                "This is not filmed walkthrough video.",
                "MW Photography handles the creative edit, pacing, music and delivery format; AI-assisted tools are used to add controlled movement, depth and transitions to still images.",
                "The £65 price applies when suitable existing photos are supplied by the client.",
                "The £50 add-on price applies only when added to a new MW Photography shoot; the photography package is charged separately at the standard rate.",
                "Cancellation and rescheduling terms only apply where a new shoot is booked. If the video is created from supplied photos with no site visit, there is usually no shoot cancellation issue, but the editing fee may not be refundable once editing has started.",
                "Image quality matters: low-resolution, heavily compressed or poorly lit photos may limit the final result.",
                "Prices apply to standard short edits. Longer edits, heavy branding, additional versions or complex revisions may require a tailored quote.",
                "Bookings are secured with a 25% deposit unless otherwise agreed. The remaining balance is due before final delivery."
            ]
        },

        "tour-360": {
            title: "360 Tour",
            intro: "Interactive 360 tour options for stronger online presentation and walkthrough-style viewing.",
            packages: [
                {
                    tier: "Essential 360",
                    price: "From £119",
                    detail: "Entry-level 360 capture for smaller or simpler properties"
                },
                {
                    tier: "Hosted Tour",
                    price: "From £169",
                    detail: "Hosted tour setup included • best value for most standard properties"
                },
                {
                    tier: "Enhanced Tour",
                    price: "From £229",
                    detail: "Broader coverage for larger, multi-level or more complex properties"
                }
            ],
            delivery: [
                "Standard delivery: usually within 24–48 hours",
                "Same-day priority: from £15, depending on service type, shoot size and workload",
                "Weekend and urgent bookings: available by request and quoted depending on availability"
            ],
            notes: [
                "360 tour prices are starting points and depend on property size, number of viewpoints, hosting requirements and setup complexity.",
                "Hosted tour requirements and property size can affect final pricing.",
                "Larger or multi-level properties may require a tailored quote.",
                "Same-day delivery may increase depending on property size, tour complexity and workload.",
                "Any ongoing hosting or platform costs should be confirmed where relevant.",
                "Travel, parking, congestion charges, access delays or restricted entry may affect the final quote.",
                "Bookings are secured with a 25% deposit unless otherwise agreed. The remaining balance is due before final delivery."
            ]
        },

        "floor-plans": {
            title: "Floor Plans",
            intro: "Clear floor plan delivery for listings, lettings, HMOs, holiday lets and supporting marketing packs.",
            packages: [
                {
                    tier: "Essential",
                    price: "£45",
                    detail: "Smaller or simpler property layout"
                },
                {
                    tier: "Standard",
                    price: "£55",
                    detail: "Typical residential property layout"
                },
                {
                    tier: "Large / Complex",
                    price: "From £75",
                    detail: "Larger, multi-level or more complex floor plan"
                }
            ],
            delivery: [
                "Standard delivery: usually within 24–48 hours",
                "Same-day priority: from £15, depending on service type, shoot size and workload",
                "Weekend and urgent bookings: available by request and quoted depending on availability"
            ],
            notes: [
                "Listed prices apply to standard-scope bookings.",
                "Larger or more complex properties, difficult access, urgent turnaround, travel, parking or congestion charges may affect the final quote.",
                "Final pricing depends on size and layout complexity.",
                "Larger multi-level properties may be quoted individually.",
                "Same-day delivery may increase depending on property size, floor plan complexity and workload.",
                "Travel, parking, congestion charges, access delays or restricted entry may affect the final quote.",
                "Floor plans are supplied for marketing purposes and should not be relied on as legal or survey documents.",
                "Bookings are secured with a 25% deposit unless otherwise agreed. The remaining balance is due before final delivery."
            ]
        }
    };

    const qs = (sel, root = document) => root?.querySelector(sel);
    const qsa = (sel, root = document) => Array.from(root?.querySelectorAll(sel) || []);

    let scrollLockCount = 0;
    let lastFocusedElement = null;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
                img.decode().then(() => resolve(src)).catch(() => resolve(src));
            } else {
                img.onload = () => resolve(src);
                img.onerror = reject;
            }
        });
    }

    if (slideA && slideB && heroImages.length && !prefersReducedMotion) {
        let index = 0;
        let showingA = true;
        let isTransitioning = false;

        slideA.style.opacity = "0";
        slideB.style.opacity = "0";
        slideA.style.transition = "opacity 1.2s ease";
        slideB.style.transition = "opacity 1.2s ease";

        preloadImage(heroImages[0]);

        const changeSlide = async () => {
            if (isTransitioning) return;
            isTransitioning = true;

            const nextSrc = heroImages[index];

            const incoming = showingA ? slideA : slideB;
            const outgoing = showingA ? slideB : slideA;

            try {
                await loadImage(nextSrc);
                incoming.style.backgroundImage = `url("${nextSrc}")`;

                requestAnimationFrame(() => {
                    incoming.style.opacity = "1";
                    outgoing.style.opacity = "0";

                    showingA = !showingA;
                    index = (index + 1) % heroImages.length;

                    setTimeout(() => {
                        isTransitioning = false;
                    }, 1200);
                });
            } catch {
                isTransitioning = false;
            }
        };

        setTimeout(changeSlide, 5200);
        setInterval(changeSlide, 5200);
    }

    const yearEl = qs("#year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

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

    function normaliseLightboxItem(item, index) {
        if (typeof item === "string") {
            return {
                src: item,
                alt: `Image ${index + 1}`
            };
        }

        return {
            src: item?.src || "",
            alt: item?.alt || `Image ${index + 1}`
        };
    }

    function renderLightbox() {
        if (!lightboxImg || !lightboxImages.length) return;

        const currentItem = normaliseLightboxItem(lightboxImages[lightboxIndex], lightboxIndex);
        const nextItem = normaliseLightboxItem(
            lightboxImages[(lightboxIndex + 1) % lightboxImages.length],
            (lightboxIndex + 1) % lightboxImages.length
        );
        const prevItem = normaliseLightboxItem(
            lightboxImages[(lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length],
            (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length
        );

        lightboxImg.src = currentItem.src;
        lightboxImg.alt = currentItem.alt;

        if (lightboxCaption) {
            lightboxCaption.textContent = `${currentItem.alt} (${lightboxIndex + 1}/${lightboxImages.length})`;
        }

        preloadImage(nextItem.src);
        preloadImage(prevItem.src);
    }

    function openLightbox(images, startIndex = 0, captionText = "") {
        if (!lightbox || !lightboxStage || !images.length) return;

        lightboxImages = images.map((item, index) => {
            if (typeof item === "string") {
                return {
                    src: item,
                    alt: captionText || `Image ${index + 1}`
                };
            }

            return {
                src: item?.src || "",
                alt: item?.alt || captionText || `Image ${index + 1}`
            };
        }).filter(item => item.src);

        if (!lightboxImages.length) return;

        lightboxIndex = Math.max(0, Math.min(startIndex, lightboxImages.length - 1));
        renderLightbox();
        openDialog(lightbox, lightboxStage);
    }

    function closeLightbox() {
        closeDialog(lightbox);
        if (lightboxImg) lightboxImg.src = "";
        lightboxImages = [];
        lightboxIndex = 0;
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
        const allItems = qsa(".masonry-item", portfolioGrid);

        allItems.forEach(btn => {
            if (btn.dataset.lightboxBound === "true") return;

            btn.dataset.lightboxBound = "true";

            btn.addEventListener("click", () => {
                if (btn.classList.contains("is-hidden")) return;

                const currentVisibleItems = getVisiblePortfolioItems();

                const fullList = currentVisibleItems
                    .map(item => qs("img", item))
                    .map(img => ({
                        src: img?.dataset.full || img?.src,
                        alt: img?.getAttribute("alt") || "Portfolio image"
                    }))
                    .filter(item => item.src);

                const clickedIndex = currentVisibleItems.indexOf(btn);

                if (clickedIndex > -1) {
                    openLightbox(fullList, clickedIndex);
                }
            });
        });
    }

    async function setupPortfolioImages() {
        const portfolioImages = qsa("#portfolio img[data-img]");

        const results = await Promise.all(
            portfolioImages.map(async (img) => {
                const base = img.getAttribute("data-img");
                const btn = img.closest(".masonry-item");
                if (!base || !btn) return null;

                const root = getPortfolioRoot(img);
                const smallThumb = thumbSrc(root, base, THUMB_SIZES[0]);
                const fullImage = fullSrc(root, base);

                const exists = await validateImage(smallThumb);

                if (!exists) {
                    btn.remove();
                    return null;
                }

                img.src = smallThumb;
                img.srcset = THUMB_SIZES.map(w => `${thumbSrc(root, base, w)} ${w}w`).join(", ");
                img.sizes = sizesForTile(btn);
                img.loading = "lazy";
                img.decoding = "async";
                img.dataset.full = fullImage;

                return btn;
            })
        );

        return results.filter(Boolean);
    }

    function setupPortfolioLoadMore(validItems) {
        const loadMoreBtn = qs("#portfolioLoadMore");
        const hideAllBtn = qs("#portfolioHideAll");
        if (!loadMoreBtn || !hideAllBtn || !validItems.length) return;

        const initialCount = mobileViewport.matches ? 8 : 12;
        const stepCount = mobileViewport.matches ? 8 : 12;

        let visibleCount = initialCount;
        let hasExpanded = false;

        function updateVisibility() {
            validItems.forEach((item, index) => {
                item.classList.toggle("is-hidden", index >= visibleCount);
            });

            const allVisible = visibleCount >= validItems.length;
            const canExpand = validItems.length > initialCount;

            loadMoreBtn.textContent = "Show more";
            loadMoreBtn.hidden = !canExpand || allVisible;

            hideAllBtn.textContent = "Hide all";
            hideAllBtn.hidden = !hasExpanded;
        }

        loadMoreBtn.addEventListener("click", () => {
            visibleCount = Math.min(visibleCount + stepCount, validItems.length);
            hasExpanded = visibleCount > initialCount;
            updateVisibility();
            bindPortfolioLightbox();
        });

        hideAllBtn.addEventListener("click", () => {
            visibleCount = initialCount;
            hasExpanded = false;
            updateVisibility();

            portfolioGrid?.scrollIntoView({
                behavior: prefersReducedMotion ? "auto" : "smooth",
                block: "start"
            });

            bindPortfolioLightbox();
        });

        updateVisibility();
    }

    async function initPortfolio() {
        const loadMoreBtn = qs("#portfolioLoadMore");
        const hideAllBtn = qs("#portfolioHideAll");
        const validItems = await setupPortfolioImages();

        if (!validItems.length) {
            if (loadMoreBtn) loadMoreBtn.hidden = true;
            if (hideAllBtn) hideAllBtn.hidden = true;
            return;
        }

        setupPortfolioLoadMore(validItems);
        bindPortfolioLightbox();
    }

    initPortfolio();

    const reviewsCarousel = qs("#reviewsCarousel");
    const reviewsPrev = qs("#reviewsPrev");
    const reviewsNext = qs("#reviewsNext");

    function setupReviewToggles(root = document) {
        qsa(".review-slide", root).forEach(card => {
            const text = qs(".review-slide-text", card);
            const button = qs(".review-toggle", card);
            if (!text || !button) return;

            if (card.dataset.toggleBound === "true") return;
            card.dataset.toggleBound = "true";

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

            button.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

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

    function setupReviewsConveyor() {
        if (!reviewsCarousel || reviewsCarousel.dataset.infiniteReady === "true") return;

        let isMoving = false;
        const animationDuration = prefersReducedMotion ? 0 : 420;

        reviewsCarousel.style.overflowX = "hidden";
        reviewsCarousel.style.scrollBehavior = "auto";
        reviewsCarousel.style.scrollSnapType = "none";
        reviewsCarousel.scrollLeft = 0;

        function getSlides() {
            return qsa(".review-slide", reviewsCarousel);
        }

        function getGap() {
            const styles = window.getComputedStyle(reviewsCarousel);
            return parseFloat(styles.columnGap || styles.gap || 12);
        }

        function getStepWidth() {
            const first = getSlides()[0];
            if (!first) return 320;
            return first.getBoundingClientRect().width + getGap();
        }

        function setImmediateScroll(left) {
            const previousBehavior = reviewsCarousel.style.scrollBehavior;
            reviewsCarousel.style.scrollBehavior = "auto";
            reviewsCarousel.scrollLeft = left;
            requestAnimationFrame(() => {
                reviewsCarousel.style.scrollBehavior = previousBehavior || "auto";
            });
        }

        function moveNext() {
            if (isMoving) return;

            const slides = getSlides();
            const first = slides[0];
            if (!first) return;

            const step = getStepWidth();
            isMoving = true;

            reviewsCarousel.scrollTo({
                left: step,
                behavior: prefersReducedMotion ? "auto" : "smooth"
            });

            window.setTimeout(() => {
                reviewsCarousel.appendChild(first);
                setImmediateScroll(0);
                isMoving = false;
            }, animationDuration);
        }

        function movePrev() {
            if (isMoving) return;

            const slides = getSlides();
            const last = slides[slides.length - 1];
            if (!last) return;

            const step = getStepWidth();
            isMoving = true;

            reviewsCarousel.insertBefore(last, slides[0]);
            setImmediateScroll(step);

            requestAnimationFrame(() => {
                reviewsCarousel.scrollTo({
                    left: 0,
                    behavior: prefersReducedMotion ? "auto" : "smooth"
                });
            });

            window.setTimeout(() => {
                setImmediateScroll(0);
                isMoving = false;
            }, animationDuration);
        }

        if (reviewsPrev) {
            reviewsPrev.addEventListener("click", movePrev);
        }

        if (reviewsNext) {
            reviewsNext.addEventListener("click", moveNext);
        }

        let touchStartX = 0;
        let touchStartY = 0;

        reviewsCarousel.addEventListener("touchstart", (e) => {
            const touch = e.changedTouches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
        }, { passive: true });

        reviewsCarousel.addEventListener("touchend", (e) => {
            if (isMoving) return;

            const touch = e.changedTouches[0];
            const dx = touch.clientX - touchStartX;
            const dy = touch.clientY - touchStartY;

            if (Math.abs(dx) < 40) return;
            if (Math.abs(dy) > Math.abs(dx) * 0.8) return;

            if (dx < 0) {
                moveNext();
            } else {
                movePrev();
            }
        }, { passive: true });

        reviewsCarousel.addEventListener("wheel", (e) => {
            if (Math.abs(e.deltaX) < 12 && Math.abs(e.deltaY) < 12) return;
            e.preventDefault();

            if (isMoving) return;

            const horizontalIntent = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

            if (horizontalIntent > 0) {
                moveNext();
            } else {
                movePrev();
            }
        }, { passive: false });

        window.addEventListener("resize", () => {
            setImmediateScroll(0);
        });

        reviewsCarousel.dataset.infiniteReady = "true";
    }

    setupReviewToggles();
    setupReviewsConveyor();

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