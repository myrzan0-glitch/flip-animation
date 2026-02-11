# Demo Guide

## Purpose

Use demo mode to quickly preview animation and layout without app setup.

## File

- `demo.html`

## Run

Option 1 (direct):
- Open `demo.html` in browser.

Option 2 (local server):
```bash
cd flip-animantion
python3 -m http.server 4173
```
Then open: `http://localhost:4173/demo.html`

## What To Validate

- Card flips on **hover** and **focus**
- Flip duration is smooth (`700ms`, cubic-bezier)
- Front and back render correctly
- Backface is hidden during flip
- Mobile width behavior looks correct

## Notes

- Demo is intentionally standalone and offline-friendly.
- Do not use `demo.html` as production code.
