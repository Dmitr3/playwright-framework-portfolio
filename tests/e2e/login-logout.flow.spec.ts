import { test, expect } from "../../fixtures/test-fixtures";

test("E2E: login and logout flow", async ({ loginPage }) => {
  await loginPage.open();

  await loginPage.loginAsStandardUser();

  await loginPage.logout();

  await expect(loginPage.isLoginPage()).resolves.toBeTruthy();
});
