const {test, expect} = require('@playwright/test');

test('Seletors Demo', async ({page})=>
{
    await page.goto("https://www.saucedemo.com");
    await page.pause();
    //using any object properties
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('Edison');
    await page.locator('[id="user-name"]').fill('Einstein');
    //using css selectors
    await page.locator('#login-button').click();
    //using xpath
    await page.locator('//*[@id="user-name"]').fill('Faraday');
    await page.locator('xpath=//*[@id="user-name"]').fill('Ramanujan');
    //using text
    //await page.locator('text=LOGIN').click();
    //await page.locator(':has-text("LOGIN")').click();
    //xpath
    await page.locator('//*[@id="login-button"]');
});