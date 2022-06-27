var finalData = []
const { PostsModel } = require ('./models/postsModel')
const fs = require('fs')
const puppeteer = require("puppeteer");
async function scrapeProduct (url){
    const browser = await puppeteer.launch() //{headless :  false}
    const page = await browser.newPage();
    await page.goto(url,{timeout: 0, waitUntil: 'networkidle0'});
    const idUrlValue = page.url().slice(84)
    // const [pnlRequest] = await page.$x('//*[@id="__APP"]/div/div[2]/div[2]/div[7]/div/div[2]/div/div/div/div/div/table/tbody/tr[2]/td[2]/div');
    const [pnlRequest] = await page.$x('//*[@id="__APP"]/div/div[2]/div[2]/div[7]/div/div[1]/div/div/div/div/div/table/tbody/tr[2]/td[2]/div');
    const pnlRequestValue = await pnlRequest.getProperty('textContent');
    var pnlReceived = await pnlRequestValue.jsonValue();
    const [userNameRequest] = await page.$x('//*[@id="__APP"]/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div');
    const userNameRequestValue = await userNameRequest.getProperty('textContent');
    var usernameReceived = await userNameRequestValue.jsonValue();
    let user = {
      user : usernameReceived,
      userid : idUrlValue,
      pnl : pnlReceived
    }
    finalData.push(user)
    console.clear()
    console.log(finalData);
    fs.writeFile("../back/final_data.txt", JSON.stringify(finalData), (err) => {});
browser.close()
}
fs.readFile('./data_users.txt','utf-8', (err, datatxt) => {
    var newdata = JSON.parse(datatxt)
    for(let i = 0; i < newdata.length; i++){
      scrapeProduct(`https://www.binance.com/en/futures-activity/leaderboard?type=myProfile&encryptedUid=${newdata[i].userid}`);
}
})