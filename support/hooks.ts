import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";

let browser: Browser;

Before(async function () {

  browser = await chromium.launch({ headless: false });

  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();

  this.page = page;

});

After(async function () {

  await this.page.close();
  await browser.close();

});