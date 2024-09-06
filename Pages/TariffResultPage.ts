import { Page,page } from '../test.setup'; 

export class TariffResultPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async isverifyPage(){
    const inp = await this.page.waitForSelector('//product[@class="top-three"]', { timeout: 40000 });
    return await inp.isVisible();
  }


  async isverifyTotalNo(){
    // Wait for the element containing "161 Tarif" text to be visible
    const inp = await this.page.waitForSelector('//div[@class="list-head"]//div[@class="filtered"]');
    await inp.isVisible()
    // // Retrieve the text content of the element
    // const textContent = await inp.textContent();
    // console.log(textContent);
    // return textContent ? textContent : '';
  }

  async isEndOfPage(){
     await this.page.locator('//a[@class="button load-more-button"]').scrollIntoViewIfNeeded();
  }

  async verifyCount():Promise<number>{
    const count = await this.page.locator('//product[@class="top-three"]').count();
    if (count !== 20) {
      throw new Error(`Expected 20 products, but found ${count}`);
    }
    return count;
  }

  async verifyNextRec():Promise<number>{
    const cnt = await this.page.locator('//product[@class="top-three"]').count();
    if (cnt !== 40) {
      throw new Error(`Expected 40 products, but found ${cnt}`);
    }
    return cnt;
  }

  async verifyTotal():Promise<number>{
    const cnt = await this.page.locator('//product[@class="top-three"]').count();
    if (cnt !== 161) {
      throw new Error(`Expected 161 products, but found ${cnt}`);
    }
    return cnt;
  }
  async isClickLoadBtn(){
    await this.page.locator('//a[@class="button load-more-button"]').scrollIntoViewIfNeeded();
    await this.page.locator('//a[@class="button load-more-button"]').click();
  }

  async isClickLoadBtnMore(times: number){
    for (let i = 0; i < times; i++) {
      await this.page.locator('//a[@class="button load-more-button"]').scrollIntoViewIfNeeded();
      await this.page.locator('//a[@class="button load-more-button"]').click();
    }
  }
  
  async isLoadMoreButtonNotVisible(): Promise<boolean> {
    const loadMoreButton = this.page.locator('//a[@class="button load-more-button"]');
    return !(await loadMoreButton.isVisible());
  }

  async firstTariffPrice(){
    await page.locator('//product[@class="top-three"][1]//div[@class="price"]').isVisible();
  }
  
  async clickTariffDet(){
    await page.locator('//product[@class="top-three"][1]//button[text()="Tarifdetails"]').isVisible()
    await page.locator('//product[@class="top-three"][1]//button[text()="Tarifdetails"]').click();
  }

  async seeTariffDetailsFirst(){
    await page.locator('//div[@class="detail-container"]//li[1]').isVisible();
    await page.locator('//div[@class="detail-container"]//li[2]').isVisible();
    await page.locator('//div[@class="detail-container"]//li[3]').isVisible();
  }

  async seeTariffDetailSecond(){
    await page.locator('//div[@class="detail-container"]//li[4]').isVisible();
    await page.locator('//div[@class="detail-container"]//li[5]').isVisible();
  }

  async seeZumAntragBtn(){
    await page.locator('//div[@class="product-container details-open"]//button[text()="Zum Online-Antrag"]').isVisible()
  }
  
  
}
