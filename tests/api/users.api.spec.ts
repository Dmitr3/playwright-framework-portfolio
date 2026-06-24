import { test, expect } from "@playwright/test";

test("API: get users", async ({ request }) => {
  const response = await request.get("https://jsonplaceholder.typicode.com/users");

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBe(10);
});

test("API: get user by id", async ({ request }) => {
  const response = await request.get("https://jsonplaceholder.typicode.com/users/1");

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
});
