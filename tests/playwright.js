const path = require('path');
const { chromium, firefox, webkit } = require('playwright');

async function run(browserType){
  const browser = await browserType.launch();
  const page = await browser.newPage();
  const file = 'file://' + path.resolve(__dirname, '..', 'index.html');
  await page.goto(file);

  // Add two different items
  await page.click('#shopGrid .col-4:nth-child(1) .btn');
  await page.click('#shopGrid .col-4:nth-child(2) .btn');

  // Open cart and adjust quantity
  await page.click('#openCartBtn');
  const qtyInput = await page.$('#cartDrawer .line .qty');
  await qtyInput.fill('2');
  await qtyInput.press('Enter');

  // Close via overlay and reopen then close via Escape
  await page.click('#overlay');
  await page.click('#openCartBtn');
  await page.keyboard.press('Escape');

  // Mobile menu toggle
  await page.setViewportSize({ width: 500, height: 800 });
  await page.click('#menuBtn');
  await page.click('#menuBtn');

  // Postcode helper
  await page.fill('#pc','CF10');
  await page.fill('#pc','NP20');

  // Forms
  await page.fill('#name','Test');
  await page.fill('#email','test@example.com');
  await page.fill('#msg','Hi');
  await page.click('#contactForm button[type="submit"]');
  await page.fill('#newsEmail','test@example.com');
  await page.click('#newsForm button[type="submit"]');

  await browser.close();
  console.log('tested ' + browserType.name());
}

(async()=>{
  for(const type of [chromium, firefox, webkit]){
    await run(type);
  }
})();
