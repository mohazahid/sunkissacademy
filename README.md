# Sunkiss Academy Website

Licensed home-based preschool in Lynnwood, WA offering bilingual childcare for ages 0-5.

**Live Site:** [sunkissacademy.com](https://sunkissacademy.com)

## Project Structure

```
├── Sunkiss Academy.html    # Source HTML file
├── src/img/                # Images (16 files including meals-healthy.jpg)
├── build.js               # Build script for deployment
├── support.js             # Support utilities
├── package.json           # Dependencies & scripts
├── CNAME                  # GitHub Pages domain config
├── robots.txt             # SEO
├── sitemap.xml            # SEO
└── archive/               # Old code (git-ignored)
```

## Deployment

This site is deployed via **Vercel** (not GitHub Pages).

To deploy:
1. Edit `Sunkiss Academy.html`
2. Run `npm run build` to generate the `build/` folder
3. Run `npx vercel --prod` to deploy to production

Vercel serves the `build/` folder as static files. The custom domain `sunkissacademy.com` is configured in the Vercel dashboard under the `fakermega` team.

## Available Scripts

### `npm run build`

Builds the site into the `build/` folder:
- Reads `Sunkiss Academy.html`
- Fixes image paths (`../src/img/` → `src/img/`)
- Copies `index.html`, `support.js`, `CNAME`, and `src/img/` to `build/`

### `npm run local`

Build and preview locally:
```bash
npm run local
```
Open [http://localhost:3000](http://localhost:3000) to preview.

## Development

Edit `Sunkiss Academy.html` to make changes to the site. Images go in `src/img/`.

## Archive

Old React code and configuration files are stored in `/archive` (git-ignored) for reference.
