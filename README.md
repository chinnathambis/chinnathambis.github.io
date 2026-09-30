# Chinnathambi Sundaram — Portfolio

Personal portfolio of a senior product designer. Live at **https://chinnathambis.github.io**.

Dark editorial, restrained, systems-oriented. Plain HTML/CSS/JS — no framework, no build step.

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | Homepage — hero with magnetic field, Ask input, Selected Work, AI × Design Lab, Story, Contact |
| `variations-discovery.html` | Case study: Evidence / 01 — Amazon Variations Discovery |
| `404.html` | Not-found page |
| `assets/base.css` | Shared design tokens (night/day), header, type, reveals, reduced-motion rules |
| `assets/site.js` | Shared behaviour — theme toggle, header, scroll reveals, placeholder notices |

## Run locally

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173 (the theme preference needs a served URL, not `file://`).

## Deploy

Every push to `main` publishes to GitHub Pages automatically.

## Content rule

Never invent metrics, outcomes, client names, or research findings. Gaps are marked
explicitly — `[NEEDS CONFIRMATION]`, `[SCREENSHOT NEEDED]`, `[POST-LAUNCH METRIC — TO BE CONFIRMED]`.
