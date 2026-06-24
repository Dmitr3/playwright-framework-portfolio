import { test, expect } from "../../fixtures/test-fixtures";

test("E2E: user adds multiple products", async ({ loginPage, productPage, cartPage }) => {
  await loginPage.open();
  await loginPage.loginAsStandardUser();

  await productPage.addBackpackToCart();
  await productPage.addBikeLightToCart();

  await productPage.openCart();

  await expect(cartPage.getItemsCount()).resolves.toBe(2);
});
