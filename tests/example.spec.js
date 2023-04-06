// A user visits the site, 
// adds a new todo to the list, 
// deletes a todo from the list, 
// refreshes the page and the todos are still persisted/saved.


// @ts-check
const { test, expect } = require('@playwright/test');

const URL = 'http://localhost:3000';
// webpage loads
test('webpage loads', async ({ page }) => {
  const url = 'http://localhost:3000';
  await page.goto(url);
  // selects the input/textbox where we add todos
  const textbox = page.locator('input[type=text]');
  // wait for user to type 'hello'
  await textbox.type('hello');
  // check input/textbox has the text 'hello'
  await expect(textbox).toHaveValue('hello');
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
