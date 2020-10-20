require('chromedriver');
const assert=require('assert');
const { start } = require('repl');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Checkout Google.com', () => {
    let driver;
    

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Search on google', async () => {
        await driver.get('https://app.clickup.com/login');

        // Enter keywords and click enter
        await driver.findElement(By.id('email-input')).sendKeys('kapiljhalani009@gmail.com');
        await driver.findElement(By.id('password-input')).sendKeys('Khandelwal@08');

        await driver.findElement(By.id('login-submit')).click();


        //driver.manage().timeout().implicitlyWait(100000, TimeUnit.SECONDS);

       // while(true);
      // driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
 
       


        // WebDriverWait wait = new WebDriverWait(driver, 40);
        // wait.until(ExpectedConditions.elementToBeClickable(By.id("urelementid")));



        // Wait for the results box by id;
        
         await driver.wait(until.elementLocated(By.className('cu-dropdown_left cu-dropdown ng-star-inserted')), 100000)
         await driver.findElement(By.className('cu-dropdown_left cu-dropdown ng-star-inserted')).click();

         await driver.get('https://app.clickup.com/3302573/settings/team/3302573/import');
         await driver.wait(until.elementLocated(By.className('cu-sts__title cu-sts__title_top ng-star-inserted')), 100000)

         await driver.get('https://app.clickup.com/3302573/settings/team/3302573/import?import=false');
         await driver.wait(until.elementLocated(By.className('billing__title-prorate')), 100000)

         let startButton = await driver.findElement(By.className('cu-btn')).click()
        //  let startButtonText = await startButton.getText();
         
        //  //Export all of your data for your workspace

        // //  console.log(startButtonText);
        //  startButton.click();

         await driver.manage().setTimeouts( { implicit: 10000 } );

         //await driver.wait(until.elementLocated(By.className('billing__title-prorate')), 100000)

        let text=driver.findElement(By.className('s-prorate')).getText();

        //  let startButto = await driver.findElement(By.className('cu-btn'));
        //  let startButtonTex = await startButto.getText();
         console.log(text);
        // if(startButtonTex=='Download Export'){
        //     console.log('hey')
        // await driver.findElement(By.className('cu-btn')).click();
        // }startButtonTex

        //  (startButtonText='Download Export'){
        //     startButton.click();
        //  }


       //  startButton.click();

        //  while(startButton.getText()!='Download Export');
        //  await driver.findElement(By.className('cu-btn')).click();

         


         
        while(true);







         

       //  await driver.get('https://www.google.com');
        // let title = await driver.getTitle();
        // assert.equal(title, 'Coding Blocks - Google Search');

    });

    after(() => driver && driver.quit());
})