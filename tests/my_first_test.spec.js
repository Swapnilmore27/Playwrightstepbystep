const {test, expect} = require('@playwright/test');

test('My first test', async({page})=>
{
    await page.goto('https://google.com');//to open url
    await expect(page).toHaveTitle('Google');
})