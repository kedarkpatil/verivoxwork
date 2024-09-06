import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test"; 
import { page } from '../test.setup'; // check path properly // this exported from test.setup.ts 
import { HomePage } from '../Pages/HomePage'
import { Privathaftpflicht } from "../Pages/Privathaftpflicht";
import { TariffResultPage } from "../Pages/TariffResultPage";


let homePage: HomePage;
let privtPage:Privathaftpflicht;
let tariffPage:TariffResultPage;

Given('I am on the home page', async function () {
  homePage = new HomePage(page);

  await homePage.navigateToUrl();
});

When('I navigate to Versicherungen and select Privathaftpflicht', async function () {
  await homePage.clickVersichePrivat();
});

When('I enter my age and Single ohne Kinder', async function () {
  await homePage.enterAge();
});

Then('I go to the Privathaftpflicht personal information page', async function () {
  privtPage = new Privathaftpflicht(page);
  expect(await privtPage.isNavigatePage()).toBe(true);
});

When('I enter my birth date', async function () {
  await privtPage.fillBdatePage();
});


When('I enter my zip code', async function () {
  await privtPage.fillzipPage();
});

When('I click the Jetzt vergleichen button', async function () {
  await privtPage.clickBtnPage();
});

Then('I should see a page that lists the available tariffs for my selection', async function () {
  tariffPage=new TariffResultPage(page);
  expect(await tariffPage.isverifyPage()).toBe(true);
});

When('I display the tariff Result List page', async function () {
  tariffPage=new TariffResultPage(page);
  expect(await tariffPage.isverifyPage()).toBe(true);
});

Then('I should see the total number of available tariffs listed above all the result list', async function () {
  await tariffPage.isverifyTotalNo();
});


When('I scroll to the end of the result list page', async function () {
   tariffPage.isEndOfPage();
});


Then('I should see only the first 20 tariffs displayed', async function () {
  expect(await tariffPage.verifyCount()).toBe(20);
});



When('I click on the button labeled 20 weitere Tarife laden', async function () {
  await tariffPage.isClickLoadBtn();
  // await page.locator('//a[@class="button load-more-button"]').scrollIntoViewIfNeeded();
  // await page.locator('//a[@class="button load-more-button"]').click();
});


Then('I should see the next 20 tariffs displayed', async function () {
  expect(await tariffPage.verifyNextRec()).toBe(40);

});

Then('I can continue to load any additional tariffs until all tariffs have been displayed', async function () {
  await tariffPage.isClickLoadBtnMore(7);
  // for (let i = 0; i < 7; i++) {
  //   await page.locator('//a[@class="button load-more-button"]').scrollIntoViewIfNeeded();
  //   await page.locator('//a[@class="button load-more-button"]').click();
  // }
  expect(await tariffPage.isLoadMoreButtonNotVisible()).toBeTruthy();
  await tariffPage.isverifyTotalNo();
});

Then('I should see the tariff price of the first tariff', async function () {
  await tariffPage.firstTariffPrice();
});

When('I open tariff details', async function () {
  await tariffPage.clickTariffDet();
});

Then('I see tariff details sections: Weitere Leistungen, Allgemein, Tätigkeiten und Hobbys', async function () {
  await tariffPage.seeTariffDetailsFirst();
});

Then('I see tariff details sections: Miete & Immobilien and Dokumente', async function () {
  await tariffPage.seeTariffDetailSecond();
});

Then('I see the Zum Online-Antrag button', async function () {
  await tariffPage.seeZumAntragBtn();
});



