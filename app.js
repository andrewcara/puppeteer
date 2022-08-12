const puppet = require('puppeteer')
const fs = require("fs/promises")

async function start(){
    const browser = await puppet.launch({headless: false})
    const page = await browser.newPage()
    await page.goto("https://www.basketball-reference.com/leagues/NBA_2021_leaders.html")
    
   


const names = await page.evaluate(() =>{
    return title =  document.querySelectorAll('.data_grid_box > table > tbody > tr.first_place > td.who > a').map(x => x.textContent);
    //css selector ".data_grid_box > table > tbody > tr.first_place > td.who > a"
    //.map(x=> x.textContent) return the text content from each array that is returned
    //think of the seletorAll as returning a bunch of <a> tags. Need to access the text in these tags using Array()textContent

})

fs.writeFile("names.txt", names.join("\r\n"))


await browser.close()

}
start()

