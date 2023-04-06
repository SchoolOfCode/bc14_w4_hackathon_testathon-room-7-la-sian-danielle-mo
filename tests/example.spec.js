// A user visits the site,
// adds a new todo to the list,
// deletes a todo from the list,
// refreshes the page and the todos are still persisted/saved.

// @ts-check
const { test, expect } = require('@playwright/test');

const URL = 'http://localhost:3000';
// webpage loads
test('webpage loads and add a task', async ({ page }) => {
	const url = 'http://localhost:3000';
	await page.goto(url);
	// selects the input/textbox where we add todos
	const textbox = page.locator('input[type=text]');
	// enter string
	await textbox.type('hello');
	// check input/textbox has the text 'hello'
	await expect(textbox).toHaveValue('hello');
	// select date input
	const addDate = page.locator('input[type=date]');
	// type in a date
	await addDate.type('06042023');
	// select button to add task
	const button = page.getByRole('button', { name: 'Create!' });
	await button.click();
	// select unordered list with id 'todos'
	const todoList = page.locator('ul');
	const todo = page.locator('ul li');
	// assert that list item now has text and date
	await expect(todo).toHaveText('hello2023-04-06🗑️');
	// select delete button
	const deleteButton = page.getByRole('button', { name: '🗑️' });
	// Action: Click on delete button
	await deleteButton.click();
	// Assert: 'hello' todo is removed from the list by confirming default todo summary text remains
	// Select paragraph
	//const todoSummary = page.locator('paragraph[id=summary]');
	// Assert
	//await expect(todoSummary).toHaveValue("😌 No todos found. Looks like you're up-to-date on everything...")
	await expect(todoList).toBeEmpty();
});





// test('add a task', async ({ page }) => {
// 	const url = 'http://localhost:3000';
// 	await page.goto(url);
// 	// select the add button
// 	const button = page.getByRole('button', { name: 'Create!' });
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
