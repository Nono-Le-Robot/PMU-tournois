const user = [
    {
        pseudo : "",
        userId : "78A3DE9C1E5D63BAD5DBFD6D0DE922DD",
        pnl : 44
    },
    {
        pseudo : "",
        userId : "1B59E90653624F87DE2BC944F9FA6C2D",
        pnl : 56
    },
    {
    pseudo : "",
    userId : "9B981954DF13A9C379743EF71A6653B7",
    pnl : 28
    }
]
const arrayResult = []
const puppeteer = require("puppeteer");
async function scrapeProduct (url){
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(url);
const [pnlRequest] = await page.$x('//*[@id="__APP"]/div/div[2]/div[2]/div[7]/div/div[2]/div/div/div/div/div/table/tbody/tr[2]/td[2]/div');
const pnlRequestValue = await pnlRequest.getProperty('textContent');
const pnlReceived = await pnlRequestValue.jsonValue();
const [userNameRequest] = await page.$x('//*[@id="__APP"]/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div');
const userNameRequestValue = await userNameRequest.getProperty('textContent');
const usernameReveived = await userNameRequestValue.jsonValue();

console.log(`Username : ${usernameReveived} `);
console.log(`Daily pnl : ${pnlReceived} `);
arrayResult.push({
    pseudo : usernameReveived,
    dailyPnl : pnlReceived
})
console.table(arrayResult)
browser.close()
}

for(let i = 0; i < user.length; i++){
    let userIdUrl = user[i].userId
    scrapeProduct(`https://www.binance.com/en/futures-activity/leaderboard?type=myProfile&encryptedUid=${userIdUrl}`);
}



