import { test, expect } from "../../fixtures/test-fixtures";

test("logout works", async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.loginAsStandardUser();

  await loginPage.logout();

  await expect(loginPage.isLoginPage()).resolves.toBeTruthy();
});
