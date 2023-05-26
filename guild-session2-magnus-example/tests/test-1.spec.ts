import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.knowit.se/');
  await page.getByRole('button', { name: 'Godkänn alla' }).click();
  await page.getByRole('button', { name: 'menu icon Meny' }).click();
  await page.getByRole('link', { name: 'Jobba hos oss 165' }).click();
  await page.getByPlaceholder('tjänster, ort, ämne').click();
  await page.getByPlaceholder('tjänster, ort, ämne').fill('Tester');
  await page.getByRole('button', { name: 'Sök', exact: true }).click();
  await page.waitForSelector('.joblist_group');
  let table_rows  = page.locator(".joblist_group  tr");
  const elementsCount = await table_rows.count();
  let openPositions = 0;
  for (var index= 0; index < elementsCount ; index++) {
    const element = table_rows.nth(index);
    const isHeader = await element.getAttribute('class');
    if( isHeader == null) {
      openPositions++;
    }
  }
  console.log('Available positions:', openPositions);
});


