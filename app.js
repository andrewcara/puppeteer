const puppet = require('puppeteer')

async function start(){
    const browser = await puppet.launch({headless: false})
    const page = await browser.newPage()
    await page.goto("https://fantasy.premierleague.com/")
    
    await browser.close()
}

start()