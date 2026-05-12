# StrainRelief V79 — Mobile Overflow Stabilization

## Single update in this version
Mobile Width + Overflow Stabilization Pass.

## What changed
- Prevents horizontal page scrolling.
- Keeps major cards, sections, carousels, and app pages inside the Samsung/mobile viewport.
- Centers and clamps the fixed bottom nav.
- Keeps carousels scrollable internally without widening the whole page.
- Prevents Smart Recommendations, Live Wellness Dashboard, Recently Viewed, Trending, Search cards, and Learn cards from leaking off-screen.
- Adds a safe overflow guard in JavaScript for dynamically rendered cards.

## What did not change
- No redesign.
- No Home layout rebuild.
- No bundled feature updates.
- V78 visual style is preserved.

## Upload notes
Upload all files to GitHub/Vercel. After deployment, hard refresh or close/reopen the app so the new cache-busted CSS and JS load.
