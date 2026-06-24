import { test, expect } from "../../fixtures/test-fixtures";

test.describe("UI: Cart", () => {
  test("add product to cart", async ({ loginPage, productPage, cartPage }) => {
    await loginPage.open();
    await loginPage.loginAsStandardUser();

    await productPage.addBackpackToCart();

    await productPage.openCart();

    await expect(cartPage.getItemsCount()).resolves.toBe(1);
  });
});
