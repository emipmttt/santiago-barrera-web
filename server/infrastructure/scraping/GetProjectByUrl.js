const puppeteer = require("puppeteer");

module.exports = async (url) => {
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    ignoreDefaultArgs: ["--disable-extensions"]
    // headless: false, // este va descomentado para ver el navegador
  });

  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);
  await page.goto(url);

  await page.waitForSelector("#project-modules>div");

  return page.evaluate(() => {
    let projectElements = Array.from(
      document.querySelectorAll("#project-modules>div")
    );

    const searchImage = element => {
      const HTMLElement = element.querySelector("img");
      const isImage = HTMLElement && HTMLElement.src ? true : false;
      if (isImage) {
        return HTMLElement.src;
      } else {
        return false;
      }
    };

    const searchText = element => {
      const HTMLElement = element.querySelector(".main-text");
      const isText = HTMLElement ? true : false;
      if (isText) {
        return HTMLElement.innerText;
      } else {
        return false;
      }
    };

    let objects = [];

    for (const element of projectElements) {
      const isImage = searchImage(element);
      if (isImage)
        objects.push({
          type: "IMAGE",
          content: isImage
        });
      const isText = searchText(element);
      if (isText)
        objects.push({
          type: "TEXT",
          content: isText
        });
    }
    return objects;
  });
}
