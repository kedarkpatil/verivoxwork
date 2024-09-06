import { Page,page } from '../test.setup'; 

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async navigateToUrl() {
    await page.goto("https://www.verivox.de//");
  }
  
  async clickVersichePrivat() {
    await page.getByRole('button', { name: 'ALLES AKZEPTIEREN ' }).click();
    //await page.getByRole('link', { name: ' Versicherungen' }).click();
    await page.click('li.page-navigation-item.icn-shield-outlined > a');
    await page.click('//div[contains(@class,"icn-broken-glass-outlined")]');

  }

  async enterAge() {
  //await page.getByRole('textbox', { name: 'age' }).fill('22');
    await page.locator('//input[@type="tel"]').fill('18');
    await page.getByRole('button', { name: 'Jetzt vergleichen' }).click();
  }

  


}
