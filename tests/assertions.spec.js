const {test, expect} = require('@playwright/test');

test('Assertions Demo', async({page})=>
{
    await page.goto("https://kitchen.applitools.com/");
    await page.pause();
    //ASSERTION'S

    //1) Verify- Element Present or not.
    await expect(page.locator(".chakra-heading.css-dpmy2a")).toHaveCount(1);
    //if above assertion is true the go in if.
    if(await page.$(".chakra-heading.css-dpmy2a")){
        await page.locator(".chakra-heading.css-dpmy2a").click();
    };
    /*await page.$(" ") -> will reutrn true or false so it can be use in ifelse but not individually as it will 
    not run sometime.
    await expect(" ").toHaveCount(1) -> will run if present or stop if not.*/

    //2) Verify- Element Hidden or Visible.
    await expect(page.locator(".chakra-heading.css-dpmy2a")).toBeVisible();
    await expect.soft(page.locator(".chakra-heading.css-dpmy2a")).toBeHidden();//will fail->to execute->.soft(after expect)

    //3) Verify- Element is Enable or Disable.
    await expect(page.locator(".chakra-heading.css-dpmy2a")).toBeEnabled();
    await expect.soft(page.locator(".chakra-heading.css-dpmy2a")).toBeDisabled();//will fail->to execute->.soft(after expect)

    //4) SoftAssertion - just wright .soft after expect to make it SoftAssertion. which will but we want to still runit.
    await expect.soft(page.locator(".chakra-heading.css-dpmy2a")).toBeHidden();
    await expect.soft(page.locator(".chakra-heading.css-dpmy2a")).toBeDisabled();
    
    //5) Verify- Text matches or not matches value.
    await expect(page.locator(".chakra-heading.css-dpmy2a")).toHaveText("The Kitchen");
    await expect(page.locator(".chakra-heading.css-dpmy2a")).not.toHaveText("ABCD");//or
    await expect.soft(page.locator(".chakra-heading.css-dpmy2a")).not.toHaveText("The Kitchen");//will fail->to execute->.soft(after expect)

    //6) Verify- Element Attribute. and their are some attribute which directly be used(class,id,etc.).
    await expect(page.locator(".chakra-heading.css-dpmy2a")).toHaveAttribute('class','chakra-heading css-dpmy2a');
    //IMP- or we we have half value as-> asdfqwerrt and you can type as-> /.*qwerrt/
    await expect(page.locator(".chakra-heading.css-dpmy2a")).toHaveAttribute('class',/.*css-dpmy2a/);
    await expect(page.locator(".chakra-heading.css-dpmy2a")).toHaveClass(/.*css-dpmy2a/);

    //7) Verify- page URL &  8)TITLE.
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle(/.*Kitchen/);

    //9) Verify- Screenshot match "VISUAL Testing"
    await expect(page).toHaveScreenshot();//will save if no screenshot present and then verify it next time.
    /* can also do as:
    await page.screenshot({path:'screenshot.png'});
    expect(await page.screenshot()).toMatchSnapshot("name.png");*/

});