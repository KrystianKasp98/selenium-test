const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
const driver = new Builder().forBrowser("chrome").build();


const main = async () => {
  const urlPage = "https://pl.bab.la/slownik/angielski-polski/";
  const word = process.argv[2];

  await driver.get(urlPage);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await driver.findElement(By.id("onetrust-accept-btn-handler")).click();
  await driver.findElement(By.id("bablasearch")).sendKeys(word, Key.RETURN);
  // await driver.findElement(By.className("h1")).getText().then(function (text) { console.log(text) });
  // const text = await driver.findElement({ css: `h2.h1` }).getText().then(textI=>console.log(textI))
  console.log(text)

  setInterval(() => {
    driver.quit();
  },2000)


};

main();
