(() => {
  const data = {
    "photography": {
      title: "Photography",
      intro: "Choose the image count and revision allowance that match the size of the property and how extensively it needs to be marketed.",
      footnote: "All photography tiers include interior and exterior coverage where relevant, professional post-production and standard 24–48 hour delivery.",
      tiers: [
        {name:"Essential",price:"£95",best:"Smaller properties, room refreshes and concise listings",coverage:"7–10 final edited images",delivery:"24–48 hours",revisions:"1 correction round included",extras:"Focused coverage of the key selling spaces"},
        {name:"Listing",price:"£195",best:"Most homes, HMOs and serviced accommodation",coverage:"17–23 final edited images",delivery:"24–48 hours",revisions:"2 correction rounds included",extras:"Broader room, exterior and detail coverage"},
        {name:"Premium",price:"From £225",best:"Larger homes, premium listings and full marketing sets",coverage:"25+ final edited images",delivery:"24–48 hours",revisions:"3 correction rounds included",extras:"Most comprehensive still-image coverage; final scope tailored to the property"}
      ]
    },
    "photography-drone": {
      title: "Photography + Drone",
      intro: "Combined ground and aerial coverage, with larger tiers adding both property images and more complete aerial context.",
      footnote: "Drone work is subject to weather, permissions, airspace restrictions and safe operating conditions.",
      tiers: [
        {name:"Essential",price:"£195",best:"Smaller listings that benefit from clear location or plot context",coverage:"7–10 property images + 3–5 aerial images",delivery:"24–48 hours",revisions:"1 correction round included",extras:"Core interiors/exteriors plus concise aerial context"},
        {name:"Listing",price:"£245",best:"Most homes, holiday lets and stronger listing campaigns",coverage:"17–23 property images + 5–8 aerial images",delivery:"24–48 hours",revisions:"2 correction rounds included",extras:"Broader ground coverage and more varied aerial angles"},
        {name:"Premium",price:"From £325",best:"Larger homes, land, premium listings and standout settings",coverage:"25+ property images + 8–12 aerial images",delivery:"24–48 hours",revisions:"3 correction rounds included",extras:"Fuller property story with expanded aerial coverage"}
      ]
    },
    "photography-floorplan": {
      title: "Photography + Floor Plan",
      intro: "A combined listing package pairing edited photography with a clear marketing floor plan.",
      footnote: "Floor plans are supplied for marketing use and should not be relied upon as legal or survey documents.",
      tiers: [
        {name:"Essential",price:"£125",best:"Smaller or straightforward properties",coverage:"7–10 final images + floor plan",delivery:"24–48 hours",revisions:"1 correction round included",extras:"Efficient listing bundle with key-space coverage"},
        {name:"Listing",price:"£225",best:"Most homes, HMOs and serviced accommodation",coverage:"17–23 final images + floor plan",delivery:"24–48 hours",revisions:"2 correction rounds included",extras:"Broader photographic coverage with the same coordinated floor-plan delivery"},
        {name:"Premium",price:"From £275",best:"Larger homes and premium marketing",coverage:"25+ final images + floor plan",delivery:"24–48 hours",revisions:"3 correction rounds included",extras:"Most complete still-image package; complex layouts may require a tailored quote"}
      ]
    },
    "drone-only": {
      title: "Drone Photography",
      intro: "Choose the amount of aerial coverage according to how much context, land or setting the property needs to show.",
      footnote: "All aerial work remains subject to weather, airspace, permissions and safe operating conditions.",
      tiers: [
        {name:"Essential",price:"£135",best:"Simple exterior or location context",coverage:"4–6 edited aerial images",delivery:"24–48 hours",revisions:"1 correction round included",extras:"A concise set of core aerial angles"},
        {name:"Listing",price:"£185",best:"Most residential listings and holiday lets",coverage:"7–10 edited aerial images",delivery:"24–48 hours",revisions:"2 correction rounds included",extras:"More varied elevations, orientations and setting context"},
        {name:"Premium",price:"From £255",best:"Larger sites, land and broader commercial marketing",coverage:"10+ edited aerial images",delivery:"24–48 hours",revisions:"3 correction rounds included",extras:"Expanded aerial coverage with optional short clip capture by agreement"}
      ]
    },
    "video": {
      title: "Property Video",
      intro: "Video tiers differ mainly by output format and production scope rather than by the quality of the edit.",
      footnote: "Drone footage is included where feasible and safe. More complex shot lists, longer runtimes or bespoke deliverables are quoted separately.",
      tiers: [
        {name:"Single format",price:"£200",best:"One focused listing or social-media use",coverage:"One filmed edit up to ~2 minutes; vertical or horizontal",delivery:"2–4 working days",revisions:"1 edit revision round included",extras:"Professional edit with drone footage where feasible"},
        {name:"Dual format",price:"£300",best:"Listings plus reels/social channels",coverage:"Horizontal + vertical edits, up to ~2 minutes each",delivery:"2–4 working days",revisions:"2 edit revision rounds included",extras:"Two platform-ready formats from the same coordinated shoot"},
        {name:"Premium production",price:"From £400",best:"Higher-end campaigns and more involved briefs",coverage:"Expanded shot coverage and tailored deliverables",delivery:"Quoted to scope",revisions:"3 edit revision rounds included",extras:"More involved production, pacing, overlays and deliverable planning as required"}
      ]
    },
    "floor-plans": {
      title: "Floor Plans",
      intro: "Floor-plan pricing is driven primarily by property size and layout complexity.",
      footnote: "Floor plans are supplied for marketing use and should not be relied upon as legal or survey documents.",
      tiers: [
        {name:"Essential",price:"£45",best:"Smaller and simpler layouts",coverage:"Single straightforward marketing floor plan",delivery:"24–48 hours",revisions:"1 reasonable correction round",extras:"Room labels and clean marketing presentation"},
        {name:"Standard",price:"£55",best:"Typical residential properties",coverage:"Standard residential layout",delivery:"24–48 hours",revisions:"2 reasonable correction rounds",extras:"Suitable for most normal listing requirements"},
        {name:"Large / complex",price:"From £75",best:"Larger, multi-level or unusual layouts",coverage:"Scope tailored to layout complexity",delivery:"Quoted where necessary",revisions:"2 reasonable correction rounds",extras:"Final price confirmed once the layout and required output are clear"}
      ]
    }
  };

  const overlay = document.querySelector('#pricingCompareOverlay');
  const panel = overlay?.querySelector('.pricing-compare-panel');
  const title = document.querySelector('#pricingCompareTitle');
  const intro = document.querySelector('#pricingCompareIntro');
  const grid = document.querySelector('#pricingComparisonGrid');
  const footnote = document.querySelector('#pricingCompareFootnote');
  const enquire = document.querySelector('#pricingCompareEnquire');
  let lastFocused = null;

  const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  function renderTier(tier) {
    return `<article class="pricing-tier-card">
      <div class="pricing-tier-head"><p class="pricing-tier-name">${esc(tier.name)}</p><p class="pricing-tier-price">${esc(tier.price)}</p></div>
      <dl class="pricing-tier-specs">
        <div><dt>Best for</dt><dd>${esc(tier.best)}</dd></div>
        <div><dt>Coverage</dt><dd>${esc(tier.coverage)}</dd></div>
        <div><dt>Delivery</dt><dd>${esc(tier.delivery)}</dd></div>
        <div><dt>Post-delivery edits</dt><dd>${esc(tier.revisions)}</dd></div>
        <div><dt>What changes</dt><dd>${esc(tier.extras)}</dd></div>
      </dl>
    </article>`;
  }

  function open(id) {
    const item = data[id];
    if (!item || !overlay || !panel || !grid) return;
    lastFocused = document.activeElement;
    title.textContent = item.title;
    intro.textContent = item.intro;
    footnote.textContent = item.footnote;
    enquire.href = `/contact/?service=${encodeURIComponent(id)}`;
    grid.innerHTML = item.tiers.map(renderTier).join('');
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => panel.focus({preventScroll:true}));
  }

  function close() {
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    document.body.style.overflow = '';
    grid.innerHTML = '';
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  document.querySelectorAll('.pricing-tier-trigger').forEach(btn => btn.addEventListener('click', () => open(btn.dataset.pricingId)));
  document.querySelectorAll('[data-close-pricing-compare]').forEach(el => el.addEventListener('click', close));
  overlay?.addEventListener('click', e => { if (e.target === overlay || e.target.classList.contains('overlay-backdrop')) close(); });
  document.addEventListener('keydown', e => {
    if (!overlay || overlay.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    const focusable = [...panel.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(el => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length-1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
})();
