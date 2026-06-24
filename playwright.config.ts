import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  retries: process.env.CI ? 2 : 0,

  reporter: [["html"], ["list"]],

  use: {
    baseURL: "https://www.saucedemo.com",

    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",

    headless: true,
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
  ],
});
