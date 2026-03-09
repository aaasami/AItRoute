# AltRoute Project Website (CS185)

This is a static HCI project website designed for GitHub Pages deployment. It presents the full project narrative: overview, design process, prototype, videos, deliverables, and team contributions.

## Folder Structure

```text
project-website/
  index.html
  styles.css
  script.js
  assets/
    logo.png
    hero.png
    placeholder-image.png
  videos/
    concept-video.mp4
    demo-video.mp4
  deliverables/
    gr1-needfinding-slides-link.txt
    gr2-needfinding-pov-hmw-slides-link.txt
    gr4-concept-slides-link.txt
    gr5-sketching-lowfi-testing-slides-link.txt
    gr6a-mediumfi-slides-link.txt
    gr6a-readme-link.txt
    gr6b-highfi-slides-link.txt
    gr6b-prototype-link.txt
    gr6b-readme-link.txt
    gr7-heuristic-eval.pdf
    gr7-heuristic-eval.xlsx
    gr8-slides-link.txt
    gr8-script.pdf
    gr8-poster.pdf
    gr9-final-report-link.txt
```

## How to Run Locally

### Option 1: Open directly
- Double-click `index.html`.

### Option 2: Local server (recommended)
From `project-website/`:

```bash
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000`

## How to Deploy to GitHub Pages

1. Push `project-website` contents to your GitHub repository root (or use it as the `docs/` folder).
2. In GitHub repo settings, go to **Pages**.
3. Set source branch (usually `main`) and folder (`/root` or `/docs`).
4. Save and wait for deployment.
5. GitHub will provide your public URL.

## How to Add Deliverables and Videos

### Deliverables
- Put files in `deliverables/`.
- For external links (Google Slides/Docs/Figma), update corresponding `.txt` files with the URL.
- Update section links in `index.html` if you rename any file.

### Videos
- Put exported MP4 files in `videos/`:
  - `concept-video.mp4`
  - `demo-video.mp4`
- Update streaming links in `index.html` if your YouTube/Vimeo URLs change.

## Image Optimization (TinyPNG)

Before publishing, compress images to improve load speed:

1. Go to https://tinypng.com/
2. Upload files from `assets/`
3. Download compressed versions
4. Replace originals while keeping file names unchanged

Recommended: keep image files under ~300KB when possible.

## Notes

- Site is framework-free and GitHub Pages compatible.
- Styling is in `styles.css`; behavior is in `script.js`.
- Keep all paths relative for portability.
