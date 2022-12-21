import {test, expect} from '@playwright/test';

test.only('Demo Login Test 1', async ({page})=>
{
    await page.goto('https://demo.applitools.com/');
    //await page.pause();
    await page.locator('#username').fill("swapnil");
    await page.locator('#password').fill("1234");
    await page.locator('#log-in').click();
    console.log(`Credit Avaliable to withdraw is: ${await page.locator("[class = 'balance'] [class='balance-value']").textContent()}`);
    await expect(page.locator(".logo-label")).toHaveText("ACME");
    console.log(await page.locator('text=ACME').isVisible());//to check if the text is visible/present on screen to verfiy the page.
});
// await page.waitForSelector('text=Sign in', { timeout: 4000 })
// await expect(page.locator('text=Sign in')).toHaveCount(1)

test('Demo Login Test 2', async ({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.pause();
    await page.locator('[placeholder="Username"]').fill("Admin");
    await page.locator('[placeholder="Password"]').fill("admin123");
    await page.locator('button:has-text("Login")').click();
    //logout
    await page.locator(".oxd-userdropdown-name").click();
    await page.locator(".oxd-userdropdown-link").last().click();
    console.log(`page has title: ${page.title()}`);
    
});

//using record
test('Demo Login Test 3', async ({page})=>
{
    //await page.pause();
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.getByLabel('Email:').press('Control+a');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    //await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').press('Control+a');
    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
});