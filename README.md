# Chinnathambi Sundaram — Portfolio

Personal portfolio of a senior product designer. Live at **https://chinnathambis.github.io**.

Dark editorial, restrained, systems-oriented. Plain HTML/CSS/JS — no framework, no build step.

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | Homepage — hero with magnetic field, Ask input, Selected Work, AI × Design Lab, Story, Contact |
| `variations-discovery.html` | Case study: Evidence / 01 — Amazon Variations Discovery |
| `evidence-02.html`, `evidence-03.html` | Placeholder case studies — same 7-section structure, content to be confirmed |
| `404.html` | Not-found page |
| `assets/base.css` | Shared design tokens (night/day), header, type, reveals, reduced-motion rules |
| `assets/site.js` | Shared behaviour — theme toggle, header, scroll reveals, placeholder notices |
| `assets/case-study.css` / `.js` | Shared case study layout and behaviour — section index, reading progress, figures, lightbox |

## Run locally

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173 (the theme preference needs a served URL, not `file://`).

## Images

Full-size masters live in `assets/case/_src/<project>/` (kept out of git). After adding or
changing one, regenerate the responsive WebP sizes (needs `brew install webp`):

```bash
assets/case/build-images.sh
```

## Deploy

Every push to `main` publishes to GitHub Pages automatically.

Shared CSS/JS links carry a `?v=` version so returning visitors don't get stale cached files.
Bump it before each deploy:

```bash
V=$(date +%Y%m%d%H%M); sed -i '' -E "s#(\?v=)[0-9]+#\1$V#g" *.html
```

## Content rule

Never invent metrics, outcomes, client names, or research findings. Gaps are marked
explicitly — `[NEEDS CONFIRMATION]`, `[SCREENSHOT NEEDED]`, `[POST-LAUNCH METRIC — TO BE CONFIRMED]`.
