const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

module.exports = class SeleniumDriver {
  
  constructor(delay=100) {
    this.driver = new Builder().forBrowser("chrome").build();
    this.delay = delay;
  }

  async handleFunc(callback) {
    try {
      await new Promise((resolve) => setTimeout(resolve, this.delay));
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

  exit(time=100000) {
    setInterval(() => {
      this.driver.quit();
    },time)
  }

  searchByInput(type, value, text) {
    return this.handleFunc(() => {
      this.driver.findElement(By[type](value)).sendKeys(text, Key.RETURN);
    })
  }

  async getTextFromElement(type, value) {
    const text = await this.driver.findElement(By[type](value)).getText();
    console.log(text);

  }

  clickElement(type, value) {
    return this.handleFunc(() => {
      this.driver.findElement(By[type](value)).click();
    })
  }

}
