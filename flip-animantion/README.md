# Apartment Flip Card Handoff

This folder is split into two clear tracks:

1. **Demo (preview only)**: open and visually test animation
2. **Integration (production)**: React/Tailwind components for frontend team

## File Map

- `demo.html`  
  Offline standalone demo to verify the 3D hover flip animation quickly.

- `components/ApartmentCard.tsx`  
  Static UI component (hardcoded text/images) matching current design.

- `components/ApartmentCardFrom1C.tsx`  
  Integration-ready component for backend/DB data (1C mapping included).

- `docs/DEMO.md`  
  How to run and validate demo behavior.

- `docs/INTEGRATION.md`  
  What frontend team should integrate and how.

## Recommended For Team

- For production: use `components/ApartmentCardFrom1C.tsx`
- For design/animation review: use `demo.html`
