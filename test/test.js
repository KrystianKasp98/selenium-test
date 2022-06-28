// const { By, Key, Builder } = require("selenium-webdriver");
// require("chromedriver");

const pageURL = "https://google.com";
// const textToInput = "Martyna Radomska";

// async function test_case() {
//   let driver = await new Builder().forBrowser("chrome").build();//create driver
//   await driver.get(pageURL);//connect to selected URL

//   await driver.findElement(By.className("sy4vM")).click();//find element in this case by name, next put value from textToInput and press Enter
//   await driver.findElement(By.name("q")).sendKeys(textToInput, Key.RETURN);//find element in this case by name, next put value from textToInput and press Enter

//   setInterval(() => {
//     driver.quit();
//   }, 10000);
// }

// test_case();

//plan zrobic apke slownik
const SeleniumDriver = require("../selenium/selenium");

const client = new SeleniumDriver();

// client.goTo(pageURL).
//   then(client => client.clickElement("className", "sy4vM")).
//   then(client => client.searchByInput("name", "q", "Martyna Radomska")).
//   then(client=>client.exit())


const main = async () => {
  await client.goTo(pageURL);
  await client.clickElement("className", "sy4vM");
  await client.searchByInput("name", "q", "Martyna Radomska");
  client.exit();
}
main();