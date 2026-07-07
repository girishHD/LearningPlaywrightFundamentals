# Learning Playwright Fundamentals

This repository contains my learning journey through Playwright, a modern end-to-end testing framework for web applications.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm

### Installation

```bash
npm install
```

### Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests with UI mode:

```bash
npx playwright test --ui
```

View the test report:

```bash
npx playwright show-report
```

## Project Structure

```
tests/
├── 01_Basics
├── 02_first_tests
├── 03_Locators_Commands
├── 04_Session_Storage
├── 05_Allure_Reporting
├── 06_Multiple_Element_
├── 07_WebTables
├── 08_Web_Select_Frames_Iframe
├── 09_Frame_Iframe
├── 10_Keyboard_Hover_Drag_Drop
├── 11_JS_Alerts
├── 12_Handle_SVG
├── 13_Shadow_DOM
├── 14_FileUpload
├── 15_File_Download
├── 16_Scroll_toElement
├── 17_Expect_Assertions
├── 18_Test_hooks
├── 19_Data_Driven_Testing
├── 20_Page_Object_Model
├── 21_Fixture
├── 22_Misc_Concepts
├── 23_Advance_Framework
└── Projects
```

### Other Files

- `playwright.config.ts` - Playwright configuration
- `playwright-report/` - Test report output
- `test-results/` - Test result artifacts

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright GitHub](https://github.com/microsoft/playwright)
