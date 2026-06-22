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

## Available Scripts

### `npm run deploy`

Builds and deploys to GitHub Pages. The build script:
1. Reads `Sunkiss Academy.html`
2. Copies all files to `build/` folder
3. Deploys to `gh-pages` branch
4. Site goes live at [sunkissacademy.com](https://sunkissacademy.com)

### `npm run local`

Build and serve locally:
```bash
npm run local
```
Open [http://localhost:3000](http://localhost:3000) to preview.

## Development

Edit `Sunkiss Academy.html` to make changes to the site.

Images should be placed in `src/img/`.

## Archive

Old React code and configuration files are stored in `/archive` (git-ignored) for reference.
