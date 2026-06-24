import { test, expect } from "@playwright/test";

test("API: create post", async ({ request }) => {
  const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
    data: {
      title: "Playwright",
      body: "Portfolio project",
      userId: 1,
    },
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe("Playwright");
});
