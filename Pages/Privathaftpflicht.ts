import {Page,page } from '../test.setup'; 

export class Privathaftpflicht {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isNavigatePage(){
    const inputElement = await this.page.waitForSelector('//input[@type="text"]',{ timeout: 8000 });
    return await inputElement.isVisible();
  }
  async fillBdatePage() {
    await this.page.locator('//input[@type="text"]').fill('02.09.2006');
  }
  async fillzipPage() {
    await this.page.locator('//input[@type="tel"]').fill('13088');
  }
  async clickBtnPage() {
    await this.page.getByRole('button', { name: 'Jetzt vergleichen' }).click();
  }
  


  
}
