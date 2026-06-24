import { test as base } from "@playwright/test";

import { LoginPage } from "../pages/auth/LoginPage";
import { ProductPage } from "../pages/product/ProductPage";
import { CartPage } from "../pages/product/CartPage";

type Pages = {
  loginPage: LoginPage;
  productPage: ProductPage;
  cartPage: CartPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect } from "@playwright/test";
