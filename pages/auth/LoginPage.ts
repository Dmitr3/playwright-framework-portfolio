import { BasePage } from "../base/BasePage";

export class LoginPage extends BasePage {
  private username = "#user-name";
  private password = "#password";
  private loginBtn = "#login-button";

  async open() {
    await this.page.goto("https://www.saucedemo.com");
  }

  async login(user: string, pass: string) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }

  async loginAsStandardUser() {
    await this.login("standard_user", "secret_sauce");
  }

  async logout() {
    await this.page.click("#react-burger-menu-btn");
    await this.page.click("#logout_sidebar_link");
  }

  async isLoginPage() {
    return this.page.locator("#login-button").isVisible();
  }

  async isInventoryPage() {
    return this.page.url().includes("inventory");
  }

  async isErrorVisible() {
    return this.page.locator('[data-test="error"]').isVisible();
  }
}
