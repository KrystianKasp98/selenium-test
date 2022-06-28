const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

module.exports = class SeleniumDriver {
  
  constructor() {
    this.driver = new Builder().forBrowser("chrome").build();
  }

  async handleFunc(callback) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      await callback();
      return this;
    } catch (err) {
      console.log(err);
    }
  }

  goTo(url) {
    return this.handleFunc(() => {
      this.driver.get(url);
    })
  }

  exit(time=10000) {
    setInterval(() => {
      this.driver.quit();
    },time)
  }

  searchByInput(type, value, text) {
    return this.handleFunc(() => {
      this.driver.findElement(By[type](value)).sendKeys(text, Key.RETURN);
    })
  }

  clickElement(type, value) {
    return this.handleFunc(() => {
      this.driver.findElement(By[type](value)).click();
    })
  }

}
