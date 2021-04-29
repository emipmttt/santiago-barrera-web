const projectEntity = require("../../../domain/project");
const contentEntity = require("../../../domain/Content");
const projectRepository = require("../../../infrastructure/repositories/ProjectMongoRepository");
const contentRepository = require("../../../infrastructure/repositories/ContentMongoRepository");
const puppeteer = require("puppeteer");

module.exports = async projectId => {
  browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--no-sandbox", "--disable-setuid-sandbox"]

    // headless: false, // este va descomentado para ver el navegador
  });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);

  const project = await projectRepository.getProjectById(projectId);
  await page.goto(project.url);

  await page.waitForSelector("#project-modules>div");

  const content = await page.evaluate(() => {
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

  await browser.close();

  const contentObjectIds = [];

  for (let item of content) {
    const contentDB = await contentRepository.store(
      new contentEntity(null, item.type, item.content, projectId)
    );
    contentObjectIds.push(contentDB._id);
  }

  return projectRepository.updateById(projectId, {
    content: contentObjectIds
  });
};
