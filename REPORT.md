# Report

## Summary
- Extracted CSS and JavaScript into `assets/css/site.css` and `assets/js/app.js`.
- Replaced inline image styling with reusable `.img-fluid` class.
- Reworked cart rendering to build DOM nodes instead of `innerHTML`.
- Added error handling around `localStorage` writes.
- Moved favicon and images to dedicated folders and wired relative paths.
- Added `credits.html` with placeholder attribution and link from footer.
- Added `.nojekyll` for GitHub Pages compatibility.
- Replaced binary WebP files with base64 data URIs so the repository contains only text assets.

## Automated checks
- `npx eslint assets/js/app.js` – passed
- `java -jar node_modules/vnu-jar/build/dist/vnu.jar index.html credits.html` – no issues
- `node tests/playwright.js` – exercised Chromium, Firefox, and WebKit
- `npx axe index.html` – failed (missing Chrome in environment)
- `npx lighthouse http://localhost:8080/index.html` – failed (unable to connect to Chrome)

## Remaining items
- Replace placeholder images with licensed photography and update `credits.html` accordingly.
