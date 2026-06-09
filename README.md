# Playwright Test Project

This project demonstrates the use of Playwright with the Page Object Model (POM) design pattern. It includes basic tests for logging into the Sauce Demo website and adding an item to the cart.

## Project Structure

- `pages/`: Contains Page Object classes (e.g., `LoginPage.ts`).
- `tests/`: Contains test files (e.g., `login.spec.ts`).
- `playwright.config.ts`: Playwright configuration file.

## Prerequisites

- Node.js (>= 18.x)
- npm or yarn

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   npx playwright install chromium
   ```
   > The project only runs tests on Chromium (see `playwright.config.ts`), so installing just that browser is enough and avoids downloading Firefox and WebKit.

## Running Tests

Execute the tests using either of the following commands:

```bash
npm test
# or
npx playwright test
```

## Tasks for Candidates

1. **Correct the Test Suite**:
   - The test to validate that an item can be successfully added to the cart is broken. Please fix it.
2. **Extend the Test Suite**:
   - Add a test to validate that you can navigate to the cart and remove an item.
3. **Edge Case Handling**:
   - Add tests for login edge cases.

## Additional Notes

Feel free to refactor or improve the existing codebase as needed!
