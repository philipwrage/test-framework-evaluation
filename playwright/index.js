const {webkit} = require("playwright");

(async () => {
    let browser = await webkit.launch({headless: false, slowMo: 50});
    const page = await browser.newPage();
    await page.goto("http://whatsmyuseragent.org");
    await page.screenshot({path: "screenshot.png"});
    await browser.close();
})();