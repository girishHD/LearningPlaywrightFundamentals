# Learning Playwright Fundamentals

This repository contains my learning journey through Playwright, a modern end-to-end testing framework for web applications. It covers fundamental concepts from basic tests to advanced frameworks including Page Object Model, fixtures, and data-driven testing.

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
├── 01_Basics/
├── 02_first_tests/
├── 03_Locators_Commands/
├── 04_Session_Storage/
├── 05_Allure_Reporting/
├── 06_Multiple_Element_/
├── 07_WebTables/
├── 08_Web_Select_Frames_Iframe/
├── 09_Frame_Iframe/
├── 10_Keyboard_Hover_Drag_Drop/
├── 11_JS_Alerts/
├── 12_Handle_SVG/
├── 13_Shadow_DOM/
├── 14_FileUpload/
├── 15_File_Download/
├── 16_Scroll_toElement/
├── 17_Expect_Assertions/
├── 18_Test_hooks/
├── 19_Data_Driven_Testing/
├── 20_Page_Object_Model/
├── 21_Fixture/
├── 22_Misc_Concepts/
├── 23_Advance_Framework/
├── Projects/
├── Template.spec.ts
└── example.spec.ts
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
- `tests/03_Locators_Commands/239_Project_VWO_Login.spec.ts` - VWO login page error verification
- `tests/03_Locators_Commands/240_Aria_Role.spec.ts` - ARIA role locators
- `tests/03_Locators_Commands/241_Project_3_Signup_VWO.spec.ts` - VWO signup project
- `tests/03_Locators_Commands/242_Project_3_SignUp_VWO_PW.spec.ts` - VWO signup with Playwright
- `tests/03_Locators_Commands/243_PW_Command.spec.ts` - Playwright commands
- `tests/03_Locators_Commands/244_Referer_PW.spec.ts` - Referer header testing with Playwright
- `tests/03_Locators_Commands/245_GetByRole_PW.spec.ts` - GetByRole locator
- `tests/03_Locators_Commands/246_PressSeq.spec.ts` - Keyboard press sequence
- `tests/03_Locators_Commands/Exercise.spec.ts` - CURA Healthcare appointment booking exercise (locator strategies, form interactions, date picker handling, assertions)
- `tests/03_Locators_Commands/Referer.spec.ts` - Referer header testing
- `tests/04_Session_Storage/247_SessionStorage.spec.ts` - Session storage handling and persistence
- `tests/05_Allure_Reporting/248_TestVWODashboard.spec.ts` - VWO dashboard with Allure reporting
- `tests/05_Allure_Reporting/249_TestVWODashboard_NoCustomeReport.spec.ts` - VWO dashboard without custom report
- `tests/06_Multiple_Element_/250_Multi_Element.spec.ts` - Handling multiple elements
- `tests/06_Multiple_Element_/251_Multi_Element_Direct.spec.ts` - Direct multiple element handling
- `tests/06_Multiple_Element_/Student_Login.spec.ts` - Student login test with multiple elements
- `tests/07_WebTables/252_WebTables_Dynamic_Xpath.spec.ts` - Dynamic web tables with XPath
- `tests/07_WebTables/253_WebTables_Dynamic.spec.ts` - Dynamic web tables handling
- `tests/07_WebTables/254_Filter_PageLoc.spec.ts` - Filter page locator for web tables
- `tests/07_WebTables/255_WebTable_Xpath.spec.ts` - Web table XPath locators
- `tests/07_WebTables/256_WebTable_Xpath_Pagination.spec.ts` - XPath pagination for web tables
- `tests/07_WebTables/257_WebTable_Xpath_Pagination2.spec.ts` - XPath pagination variant
- `tests/07_WebTables/258_WebTable_Pagination_Fn.spec.ts` - Web table pagination functions
- `tests/07_WebTables/Dynamic_Table.spec.ts` - Dynamic table handling
- `tests/07_WebTables/Static_Table.spec.ts` - Static table interactions
- `tests/07_WebTables/WebTable_Exercise.spec.ts` - Web table practice exercise
- `tests/07_WebTables/Orange_HRM_Table.spec.ts` - Orange HRM table interactions
- `tests/07_WebTables/Orange_HRM_Table_nth_Approach.spec.ts` - Orange HRM table nth approach
- `tests/08_Web_Select_Frames_Iframe/259_Select.spec.ts` - Select operations in frames
- `tests/08_Web_Select_Frames_Iframe/260_Custome_DD_Select.spec.ts` - Custom dropdown select
- `tests/08_Web_Select_Frames_Iframe/261_Advance_Select_Pro.spec.ts` - Advanced select pro operations
- `tests/08_Web_Select_Frames_Iframe/MakeMyTrip_Project.spec.ts` - MakeMyTrip project flight search automation
- `tests/08_Web_Select_Frames_Iframe/SpciceJet_Project.spec.ts` - SpiceJet project flight search automation

### Other Files

- `playwright.config.ts` - Playwright configuration
- `playwright-report/` - Test report output
- `test-results/` - Test result artifacts
- `tests/03_Locators_Commands/form.html` - HTML form for testing
- `tests/example.spec.ts` - Example test file
- `tests/Template.spec.ts` - Test template
- `explain-playwright-skill.md` - Playwright skill documentation
- `opencode.json` - OpenCode configuration

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright GitHub](https://github.com/microsoft/playwright)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Learning Topics

This project covers the following Playwright topics:

- **Basic Test Structure** - Test syntax, annotations, and organization
- **Browser Context & Pages** - Multiple contexts, pages, and incognito mode
- **Locators & Commands** - Various locator strategies and element interactions
- **Forms & Input** - Dropdowns, checkboxes, text fields, date pickers, and form validation
- **Assertions** - Expect assertions and custom matchers
- **Session Storage** - Handling browser session storage and persistence
- **Allure Reporting** - Test reporting with Allure integration
- **Multiple Elements** - Handling collections of elements and iteration
- **Web Tables** - Interacting with table data
- **Select & Frames** - Dropdown selections and iframe handling
- **Keyboard & Mouse Actions** - Keyboard events, hover, drag and drop
- **JavaScript Alerts** - Dialog handling
- **SVG Elements** - Interacting with SVG graphics
- **Shadow DOM** - Working with shadow DOM components
- **File Operations** - Upload and download handling
- **Scroll Actions** - Element scrolling techniques
- **ARIA Roles** - Using ARIA role locators for accessible element selection
- **GetByRole** - Role-based locators for better test readability
- **Keyboard Actions** - Press sequences and keyboard interactions
- **Playwright Commands** - Core Playwright API commands and utilities
- **Test Fixtures** - Custom fixtures and test setup/teardown
- **Data-Driven Testing** - Parameterized tests with multiple data sets
- **Page Object Model** - Design pattern for test maintainability
