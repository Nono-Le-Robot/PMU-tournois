const user = [
    {
        pseudo : "",
        userId : "78A3DE9C1E5D63BAD5DBFD6D0DE922DD",
        pnl : 44
    },
    {
    pseudo : "",
    userId : "1B59E90653624F87DE2BC944F9FA6C2D",
    },
    {
    pseudo : "",
    userId : "9B981954DF13A9C379743EF71A6653B7",
    },
    {   
    pseudo : "",
    userId : "3E548AE14964AA1FC289EDCFE8F2A018",      
    }
]
const arrayResult = []
const puppeteer = require("puppeteer");
async function scrapeProduct (url){
const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();
await page.goto(url);
const [pnlRequest] = await page.$x('//*[@id="__APP"]/div/div[2]/div[2]/div[7]/div/div[2]/div/div/div/div/div/table/tbody/tr[2]/td[2]/div');
const pnlRequestValue = await pnlRequest.getProperty('textContent');
var pnlReceived = await pnlRequestValue.jsonValue();
const [userNameRequest] = await page.$x('//*[@id="__APP"]/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div');
const userNameRequestValue = await userNameRequest.getProperty('textContent');
var usernameReveived = await userNameRequestValue.jsonValue();
if(pnlReceived === "-0.00 USD"){
    pnlReceived = 0
}
await arrayResult.push({
    pseudo : usernameReveived,
    dailyPnl : parseInt(pnlReceived)
})
arrayResult.sort((a,b) => b.dailyPnl - a.dailyPnl)
console.clear();
console.table(arrayResult);
browser.close()
}

for(let i = 0; i < user.length; i++){
    let userIdUrl = user[i].userId
    scrapeProduct(`https://www.binance.com/en/futures-activity/leaderboard?type=myProfile&encryptedUid=${userIdUrl}`);
}
