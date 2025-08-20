# Forever Floral Sisters

A simple florist demo site that runs fully offline. Open `index.html` in a browser or serve the folder with any static web server. All assets are relative so the project also works on GitHub Pages.

## Structure

- `index.html` - main site
- `credits.html` - photo credits
- `assets/css/site.css` - styles
- `assets/js/app.js` - behaviour and cart logic
- `assets/img/` - placeholder WebP images
- `assets/icons/favicon.svg` - favicon

## Development

Install dependencies and run checks:

```bash
npm install
npx eslint assets/js/app.js
npx html-validate index.html credits.html
npx axe index.html
npx http-server -p 8080 &
CHROME_PATH=$(which chromium || which google-chrome) npx lighthouse http://localhost:8080/index.html --quiet
kill $!
```

Playwright tests:

```bash
node tests/playwright.js
```

## Licence

Placeholder images generated for this demo. Replace with licensed photos before production use.
