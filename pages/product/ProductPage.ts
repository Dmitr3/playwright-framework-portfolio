import { Page, Locator } from "@playwright/test";

export class ProductPage {
  readonly page: Page;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartButton = page.locator(".shopping_cart_link");
  }

  async addBackpackToCart() {
    await this.page.click("#add-to-cart-sauce-labs-backpack");
  }

  async addBikeLightToCart() {
    await this.page.click("#add-to-cart-sauce-labs-bike-light");
  }

  async openCart() {
    await this.page.click(".shopping_cart_link");
  }

  async isCartOpened() {
    return this.page.url().includes("cart");
  }
}
