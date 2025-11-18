import { test, expect } from '@playwright/test';

test('Navigate to products page and take screenshot', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Our Products');
  await page.click('text=View Full Catalog');
  await page.waitForSelector('h1:has-text("Featured Bikes")');
  await page.screenshot({ path: '/home/jules/verification/screenshot.png' });
});
