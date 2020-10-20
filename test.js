require('chromedriver');
const assert=require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Checkout Google.com', () => {
    let driver;
    

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Search on google', async () => {
        //load the url
         await driver.get('https://app.clickup.com/login');

        // send email_id// after(() => driver && driver.quit());
         await driver.findElement(By.id('email-input')).sendKeys('kapiljhalani009@gmail.com');

        //send password
         await driver.findElement(By.id('password-input')).sendKeys('Khandelwal@08');

        //click button to login
         await driver.findElement(By.id('login-submit')).click();

        //wait for loading the page
         await driver.wait(until.elementLocated(By.className('cu-dropdown_left cu-dropdown ng-star-inserted')), 100000)

         //load the url
         await driver.get('https://app.clickup.com/3302573/settings/team/3302573/import');

         //wait for page to laod
         await driver.wait(until.elementLocated(By.className('cu-sts__title cu-sts__title_top ng-star-inserted')), 100000)

         //load the url
         await driver.get('https://app.clickup.com/3302573/settings/team/3302573/import?import=false');

         //wait for the page load
         await driver.wait(until.elementLocated(By.className('billing__title-prorate')), 100000)

         //click on start button 
         await driver.findElement(By.className('cu-btn')).click()

         //implicit wait for 15 second
         await driver.manage().setTimeouts( { implicit: 15000 } );

         //click on download button
         await driver.findElement(By.className('cu-btn')).click()

         //set timeout for 30 sec 
         setTimeout(() => {
            driver && driver.quit()
         }, 30000)

    });
})