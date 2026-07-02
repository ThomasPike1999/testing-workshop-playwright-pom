import { test } from "@playwright/test";
// import all the page objects you need here...
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import EntitlementBasedOnPage from "./pages/entitlementBasedOnPage";
import WorkOutHolidayPage from "./pages/workOutHolidayPage";
import DaysWorkedPerWeekPage from "./pages/daysWorkedPerWeekPage";
import SummaryPage from "./pages/summaryPage";
import LeaveYearStartPage from "./pages/leaveYearStartPage"
import HoursInPayPeriodPage from "./pages/hoursInPayPeriodPage"

test.only(`Your test - Task 1 - flow diagram 2`, async ({ page }): Promise<void> => {
    // Complete your first test here!
    // You will need to edit IrregularHoursPage.ts to add a method for clicking the "Yes" button, and you will need to create a new page object for the "Leave Year Start" page.

    // Navigate to the landing page
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
    
    // 1. Landing Page
    const landingPage: LandingPage = new LandingPage(page);
    await landingPage.checkPageLoads();
    await landingPage.continueOn();

    // 2. Irregular Hours Page - Change this to click the "Yes" button instead of the "No" button.
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage(page);
    await irregularHoursPage.checkPageLoads();
    await irregularHoursPage.clickYesButton();
    await irregularHoursPage.continueOn();

    // 3. Leave Year Start Page 
    // You will need to 1 - create a new page object for this page in the 'pages' directory with methods for checking the page loads, entering a date, and continuing on.
    // and 2 - create a content file in the 'content' directory
    // finally, add the steps below.

    const leaveYearStartPage: LeaveYearStartPage = new LeaveYearStartPage(page);
    await leaveYearStartPage.checkPageLoads();
    await leaveYearStartPage.enterDate('01/04/2024');
    await leaveYearStartPage.continueOn();

    const hoursInPayPeriodPage: HoursInPayPeriodPage = new HoursInPayPeriodPage(page);
    await hoursInPayPeriodPage.checkPageLoads();
    await hoursInPayPeriodPage.fillTextBox('100');
    await hoursInPayPeriodPage.continueOn();

    // 3. Entitlement Based On Page
    //const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage(page);
    //await entitlementBasedOnPage.checkPageLoads();
    //await entitlementBasedOnPage.selectDaysWorkedPerWeek();
    //await entitlementBasedOnPage.continueOn();

    // 4. Work Out Holiday Page
    //const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage(page);
    //await workOutHolidayPage.checkPageLoads();
    //await workOutHolidayPage.selectFullLeaveYear();
    //await workOutHolidayPage.continueOn();

    // 5. Days Worked Per Week Page
    //const daysWorkedPerWeekPage: DaysWorkedPerWeekPage = new DaysWorkedPerWeekPage(page);
    //await daysWorkedPerWeekPage.checkPageLoads();
    //await daysWorkedPerWeekPage.enterDays('3');
    //await daysWorkedPerWeekPage.continueOn();

    // 6. Summary Page
    const summaryPage: SummaryPage = new SummaryPage(page);
    await summaryPage.checkPageLoads();
    await summaryPage.expectSummary("The statutory entitlement for this pay period is 12 hours.");
})

test(`Your test - Task 2 - flow diagram 3`, async ({ page }): Promise<void> => {
    // Complete your second test here!
     // Navigate to the landing page
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
    
    // 1. Landing Page...

});
