import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.knowit.se/');
  await page.getByRole('button', { name: 'Godkänn alla' }).click();
  await page.getByRole('button', { name: 'menu icon Meny' }).click();
  await page.getByRole('link', { name: /Jobba hos oss/ }).click();
  await page.getByPlaceholder('tjänster, ort, ämne').click();
  await page.getByPlaceholder('tjänster, ort, ämne').fill('test');
  await page.getByRole('button', { name: 'Sök', exact: true }).click();
  console.log('count:', 100);
  //const count_tr = await page.locator('tr').count().valueOf() as Number;
  const count_tr = await page.waitForSelector('tr').count().valueOf() as Number;
  console.log('count:', count_tr);
 
});
