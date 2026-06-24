# 🧪 Playwright Automation Framework (UI + API + E2E)

## 📌 Overview

This is a **test automation portfolio project** built with Playwright and TypeScript.

The framework demonstrates a real-world QA automation structure including:

- UI testing
- API testing
- End-to-end (E2E) testing
- Page Object Model (POM)
- Custom fixtures
- Scalable test architecture

👉 Full technical documentation: `docs/framework-overview.md`

---

## 🔥 CI Badge

![Playwright Tests](https://github.com/Dmitr3/playwright-framework-portfolio/actions/workflows/playwright.yml/badge.svg)

## 🧱 Tech Stack

- Playwright
- TypeScript
- Node.js

---

## 🧪 Test Layers

### 🔵 UI Tests

UI tests are executed against:
https://www.saucedemo.com

They validate:

- Authentication flow
- Product interactions
- Cart behavior
- Logout functionality

---

### 🟡 API Tests

API tests are executed against:
https://jsonplaceholder.typicode.com

They validate:

- GET requests
- POST requests
- Response structure and data integrity

---

### 🟣 E2E Tests

E2E tests simulate full user journeys:

- Login → Add product → Open cart
- Login → Logout
- Multi-product cart workflow

---

## 📁 Project Structure

```text
tests/
├── api/
├── ui/
└── e2e/

pages/           # Page Object Model (POM)
fixtures/        # Playwright fixtures (DI layer)
test-data/       # Static test data
utils/           # Helpers and utilities
docs/            # Documentation

🚀 Execution

Run all tests: npm test
Run UI tests: npm run test:ui
Run API tests: npm run test:api
Run E2E tests: npm run test:e2e

📊 Reporting

Playwright provides built-in reporting:
- HTML Report
- Trace Viewer
- Screenshots on failure
- Video recording on failure

To open report: npm run report

🧠 Key Principles

- No direct UI interactions in tests
- Page Object Model is used for all UI logic
- Tests are independent and isolated
- Business logic is separated from tests
- Reusability is prioritized over duplication

🎯 Goal of this Project

This project demonstrates a real-world QA automation framework that shows:
- scalable architecture
- clean separation of layers
- API + UI + E2E strategy
- maintainable design patterns
- production-ready structure

📚 Documentation

👉 Architecture details: docs/framework-overview.md
```
