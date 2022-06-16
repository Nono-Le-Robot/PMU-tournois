const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(pluginStealth());

async function scrapeAddress(url){
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(url,{waitUntil: 'networkidle0'});

    //wait for xpath
    await page.waitForXPath('//*[@id="left"]/div/div[4]/div[3]/div[2]/a/h3/span[1]');
    const [el]= await page.$x('//*[@id="left"]/div/div[4]/div[3]/div[2]/a/h3/span[1]');
    // console.log(el)
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue(); 

    console.log({rawTxt}); 

    browser.close();

}

scrapeAddress('https://www.whitepages.com/business/CA/San-Diego/Cvs-Health/b-1ahg5bs')