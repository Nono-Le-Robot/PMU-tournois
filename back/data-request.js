const arrayResult = []
const fs = require('fs')
const puppeteer = require("puppeteer");
async function scrapeProduct (url){
    const browser = await puppeteer.launch(); //{headless: false}
    const page = await browser.newPage();
    await page.goto(url);
    const idUrlValue = page.url().slice(84)
    const [pnlRequest] = await page.$x('//*[@id="__APP"]/div/div[2]/div[2]/div[7]/div/div[2]/div/div/div/div/div/table/tbody/tr[2]/td[2]/div');
    const pnlRequestValue = await pnlRequest.getProperty('textContent');
    var pnlReceived = await pnlRequestValue.jsonValue();
    const [userNameRequest] = await page.$x('//*[@id="__APP"]/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div');
    const userNameRequestValue = await userNameRequest.getProperty('textContent');
    var usernameReveived = await userNameRequestValue.jsonValue();
    if(pnlReceived === "-0.00 USD"){
        pnlReceived = 0}
    await arrayResult.push({
        user : usernameReveived,
        userid : idUrlValue,
        pnl : parseInt(pnlReceived)})
    arrayResult.sort((a,b) => b.dailyPnl - a.dailyPnl)
    // console.clear()
    console.table(arrayResult);
fs.writeFile("data.txt", JSON.stringify(arrayResult),
  (err) => {
    if (err)
      console.log(err);
});
var newdata = JSON.stringify(arrayResult);
browser.close()
}
fs.readFile('./data.txt','utf-8', (err, datatxt) => {
    if (err) {
      console.error(err);
      return;
    }
    var newdata = JSON.parse(datatxt)
    for(let i = 0; i < newdata.length; i++){
    let userIdUrl = newdata[i].userid
    scrapeProduct(`https://www.binance.com/en/futures-activity/leaderboard?type=myProfile&encryptedUid=${userIdUrl}`);
}
})