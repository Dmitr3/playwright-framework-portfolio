# 🧠 Playwright Framework Architecture Overview

## 📌 Purpose

This document describes the **architecture, design patterns, and testing strategy** of the Playwright automation framework.

It is intended for QA engineers and reviewers to understand how the framework is structured internally.

---

## 🧱 Architecture Overview

The framework follows a layered architecture:

### 🔵 Test Layer

- API tests
- UI tests
- E2E tests

Focus: validation of behavior and business scenarios

---

### 🟡 Page Object Layer (POM)

Each UI page is modeled as a class:

- Encapsulates selectors
- Encapsulates UI actions
- Hides implementation details from tests

Example pages:

- LoginPage
- ProductPage
- CartPage

---

### 🟣 Fixtures Layer

Custom Playwright fixtures are used for:

- Dependency injection
- Page Object initialization
- Test isolation

---

### 🟢 Test Data Layer

All static data is separated:

- users
- credentials
- reusable datasets

Location: `test-data/`

---

### 🟠 Utils Layer

Utility functions for:

- helpers
- reusable logic
- environment handling

---

## 🧠 Testing Strategy

### API Testing

Focus:

- backend validation
- status codes
- response schema validation

---

### UI Testing

Focus:

- UI behavior
- element visibility
- user interactions

---

### E2E Testing

Focus:

- full business flows
- real user scenarios
- integration between UI components

---

## 🧩 Design Patterns

### Page Object Model (POM)

Benefits:

- reduces duplication
- improves maintainability
- isolates selectors from tests

---

### Test Isolation

Each test is independent:

- no shared state
- clean execution context
- predictable results

---

## 📛 Naming Conventions

### Files

- `*.spec.ts` → test files
- `*.api.spec.ts` → API tests
- `*.flow.spec.ts` → E2E business flows

---

### Test naming

Format:

Examples:

- UI: login success
- API: create user
- E2E: user completes purchase flow

---

## 🔁 Execution Strategy

Tests can be executed in layers:

- API: backend validation
- UI: component validation
- E2E: full user flows

This allows:

- parallel execution
- selective test runs
- fast feedback loopss

## 🔄 CI Pipeline

This project uses GitHub Actions for Continuous Integration.

On every push / pull request to `main` branch:

- Install dependencies
- Install Playwright browsers
- Run all tests (UI + API + E2E)
- Upload test report as artifact

Workflow location:
`.github/workflows/playwright.yml`
