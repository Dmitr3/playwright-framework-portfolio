import { test, expect } from "@playwright/test";

test("API: get posts", async ({ request }) => {
  const response = await request.get("https://jsonplaceholder.typicode.com/posts");

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);
});

test("API: get single post", async ({ request }) => {
  const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
});
