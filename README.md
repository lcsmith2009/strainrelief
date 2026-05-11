# StrainRelief V55 — First-Screen Fit Lock

Updated files for the compact mobile home screen.

## Changed
- Forces the Home hero shorter.
- Keeps the 150 / Daily / Smart tiles.
- Makes the Daily Wellness Direction card visible above the bottom nav on open/refresh.
- Updates cache-busting query strings.
- Updates service worker cache name so Vercel/mobile browsers pull the new build.

Upload/replace: `index.html`, `style.css`, `app.js`, `service-worker.js`, and keep existing image/manifest files.


## V60 App Feel & Motion Update
- Added non-layout-breaking motion polish: page transitions, reveal-on-scroll, button ripple/tap feedback, nav active pop, image shimmer, ambient background drift, daily-card pulse, and smoother modal/toast motion.
- Preserved the V59 first-screen layout lock so the compact hero, Daily Wellness card, and bottom nav remain visible on Samsung/Android mobile.
- Updated cache/version tags to force browser refresh.
