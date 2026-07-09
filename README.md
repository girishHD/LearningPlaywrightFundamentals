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

### Test Files

- `tests/01_Basics/229_Basic_Test.spec.ts` - Basic test structure
- `tests/01_Basics/230_Test_Annotations.spec.ts` - Test annotations
- `tests/02_first_tests/231_First_Running_Verify.spec.ts` - First running verify test
- `tests/02_first_tests/232_BCP.spec.ts` - Browser context page
- `tests/02_first_tests/233_BCP_MultipleContext.spec.ts` - Multiple browser contexts
- `tests/02_first_tests/234_BCP_Multiple_Pages.spec.ts` - Multiple pages in browser context
- `tests/02_first_tests/235_TEST_I_PW.spec.ts` - Test instance playwright
- `tests/02_first_tests/236_BCP_TEST_PW.spec.ts` - Browser context test playwright
- `tests/02_first_tests/237_BCP_Test_Options.spec.ts` - Browser context test options
- `tests/02_first_tests/Exercise.spec.ts` - Two users interact exercise
- `tests/02_first_tests/HTTP_Credential.spec.ts` - HTTP credentials testing
- `tests/02_first_tests/Incognito_Mode.spec.ts` - Incognito mode testing
- `tests/03_Locators_Commands/238_LS.spec.ts` - Locator commands
- `tests/03_Locators_Commands/Referer.spec.ts` - Referer header testing

### Other Files

- `playwright.config.ts` - Playwright configuration
- `playwright-report/` - Test report output
- `test-results/` - Test result artifacts
- `tests/03_Locators_Commands/form.html` - HTML form for testing
- `explain-playwright-skill.md` - Playwright skill documentation
- `opencode.json` - OpenCode configuration

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright GitHub](https://github.com/microsoft/playwright)
