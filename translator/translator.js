const { By, Key, Builder } = require("selenium-webdriver");
const SeleniumDriver = require("../selenium/selenium");
const client = new SeleniumDriver(2000);

const urlPage = "https://pl.bab.la/slownik/angielski-polski/";

const word = process.argv[2];

const main = async () => {
  await client.goTo(urlPage);
  await client.clickElement("id", "onetrust-accept-btn-handler");
  await client.searchByInput("id", "bablasearch", word);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // await client.getTextFromElement("className", "h1");
  const doc = window;
  console.log(doc)
  client.exit();
}

main();