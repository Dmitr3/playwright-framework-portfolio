import { test, expect } from "../../fixtures/test-fixtures";

test("open cart from product page", async ({ loginPage, productPage }) => {
  await loginPage.open();
  await loginPage.loginAsStandardUser();

  await productPage.openCart();

  await expect(productPage.isCartOpened()).resolves.toBeTruthy();
});
