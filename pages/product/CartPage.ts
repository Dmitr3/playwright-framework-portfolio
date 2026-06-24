import { BasePage } from "../base/BasePage";

export class CartPage extends BasePage {
  getItems() {
    return this.page.locator(".cart_item");
  }

  async getItemsCount() {
    return this.getItems().count();
  }
}
