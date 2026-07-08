# Roxane Guerreiro — GitHub Pages Portfolio

Static professional portfolio built for GitHub Pages with plain HTML, CSS and JavaScript.

## Structure

```text
.
├── index.html        # Main portfolio page
├── styles.css        # Responsive, accessible visual system
├── app.js            # Mobile navigation, active links, copy-email interaction
├── 404.html          # Simple GitHub Pages 404 page
├── robots.txt        # Search engine crawling instruction
├── sitemap.xml       # Basic sitemap
└── assets/
    ├── bg_x4.png     # Decorative healthcare line illustration
    ├── favicon.svg   # RG monogram favicon
    └── og-card.svg   # Social sharing preview image
```

## What changed

- Converted the site from a single calculator page into a professional portfolio landing page.
- Added semantic HTML sections: hero, about, experience, skills, projects and contact.
- Improved accessibility with a skip link, keyboard-focus states, semantic landmarks, aria labels and reduced-motion support.
- Improved responsive behaviour with a mobile navigation menu and grid layouts that collapse cleanly.
- Added SEO metadata, canonical URL, Open Graph/Twitter sharing tags, JSON-LD Person schema, sitemap and robots file.
- Removed external JavaScript dependencies from the landing page to keep GitHub Pages simple and fast.

## How to test locally

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Check:

- Desktop and mobile widths.
- Keyboard navigation with Tab and Escape.
- Navigation anchors.
- Contact buttons and copy-email button.
- Browser console for JavaScript errors.

## How to publish

1. Copy these files into the root of `roxaneguerreiro.github.io`.
2. Commit and push to the `main` branch.
3. GitHub Pages should publish from the repository root.
4. Visit `https://roxaneguerreiro.github.io/` after the deployment finishes.

## Optional next steps

- Add a PDF CV as `assets/roxane-guerreiro-cv.pdf` and add a button in the hero.
- Add a real LinkedIn URL in the contact section.
- Move the IGF-1 calculator into a separate page, for example `igf-calculator.html`, if you want the tool to remain live alongside the portfolio.
