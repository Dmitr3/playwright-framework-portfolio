import { test, expect } from "../../fixtures/test-fixtures";
import { users } from "../../test-data/users";

test.describe("UI: Login", () => {
  test("login success", async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login(users.standard.username, users.standard.password);

    await expect(loginPage.isInventoryPage()).resolves.toBeTruthy();
  });

  test("invalid login shows error", async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login("wrong_user", "wrong_pass");

    await expect(loginPage.isErrorVisible()).resolves.toBeTruthy();
  });
});
