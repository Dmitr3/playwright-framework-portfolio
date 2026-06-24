import { test, expect } from "../../fixtures/test-fixtures";

test("E2E: user completes purchase flow", async ({ loginPage, productPage, cartPage }) => {
  await loginPage.open();
  await loginPage.loginAsStandardUser();

  await productPage.addBackpackToCart();
  await productPage.openCart();

  await expect(cartPage.getItemsCount()).resolves.toBe(1);
});
