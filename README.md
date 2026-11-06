# Taj International Kinnow Factory — Website

React + Vite single-page website (English / Arabic). No backend: the enquiry form opens the visitor's email app or WhatsApp with the details filled in.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for hosting
```bash
npm run build      # output in dist/
```
Upload the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, cPanel `public_html`, etc.).
Arabic version can be linked directly with `?lang=ar`.

## Deploy on Vercel
`vercel.json` is included (Vite preset, output `dist/`, long-term caching for hashed assets, basic security headers).

- **Dashboard:** push this folder to GitHub → *Add New Project* on vercel.com → import the repo.
  If the repo root is the parent folder, set **Root Directory** to `website`. All other settings are read from `vercel.json`.
- **CLI:** from this folder run `npx vercel` (preview) or `npx vercel --prod` (live).

The photos in `public/images/` are already optimised and committed, so the build does not need the original photos.

## Editing content
| What | Where |
|---|---|
| Phone numbers, emails, WhatsApp number, map location | `src/data.js` → `company` |
| All text (English + Arabic) | `src/i18n.js` |
| Gallery photos / captions | `src/data.js` → `gallery`, captions in `src/i18n.js` |
| Colours & layout | `src/styles.css` (`:root` variables) |

## Photos
Original photos live in the parent folder. `npm run images` resizes them into `public/images/`
(mapping in `scripts/optimize-images.mjs`). Add a new photo by adding a line there and re-running.
