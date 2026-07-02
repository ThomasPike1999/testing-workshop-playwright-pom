import { test } from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import EntitlementBasedOnPage from "./pages/entitlementBasedOnPage";
import WorkOutHolidayPage from "./pages/workOutHolidayPage";
import DaysWorkedPerWeekPage from "./pages/daysWorkedPerWeekPage";
import SummaryPage from "./pages/summaryPage";

test(`Example test - flow diagram 1`, async ({ page }): Promise<void> => {
    // Navigate to the landing page
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
    
    // 1. Landing Page
    const landingPage: LandingPage = new LandingPage(page);
    await landingPage.checkPageLoads();
    await landingPage.continueOn();

    // 2. Irregular Hours Page
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage(page);
    await irregularHoursPage.checkPageLoads();
    await irregularHoursPage.clickNoButton();
    await irregularHoursPage.continueOn();

    // 3. Entitlement Based On Page
    const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage(page);
    await entitlementBasedOnPage.checkPageLoads();
    await entitlementBasedOnPage.selectDaysWorkedPerWeek();
    await entitlementBasedOnPage.continueOn();

    // 4. Work Out Holiday Page
    const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage(page);
    await workOutHolidayPage.checkPageLoads();
    await workOutHolidayPage.selectFullLeaveYear();
    await workOutHolidayPage.continueOn();

    // 5. Days Worked Per Week Page
    const daysWorkedPerWeekPage: DaysWorkedPerWeekPage = new DaysWorkedPerWeekPage(page);
    await daysWorkedPerWeekPage.checkPageLoads();
    await daysWorkedPerWeekPage.enterDays('3');
    await daysWorkedPerWeekPage.continueOn();

    // 6. Summary Page
    const summaryPage: SummaryPage = new SummaryPage(page);
    await summaryPage.checkPageLoads();
    await summaryPage.expectSummary('The statutory holiday entitlement is 16.8 days holiday.');
});

test(`Example test - flow diagram 2`, async ({ page }): Promise<void> => {
    // Navigate to the landing page
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
    
    // 1. Landing Page
    const landingPage: LandingPage = new LandingPage(page);
    await landingPage.checkPageLoads();
    await landingPage.continueOn();

    // 2. Irregular Hours Page
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage(page);
    await irregularHoursPage.checkPageLoads();
    await irregularHoursPage.clickNoButton();
    await irregularHoursPage.continueOn();

    // 3. Entitlement Based On Page
    const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage(page);
    await entitlementBasedOnPage.checkPageLoads();
    await entitlementBasedOnPage.selectDaysWorkedPerWeek();
    await entitlementBasedOnPage.continueOn();

    // 4. Work Out Holiday Page
    const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage(page);
    await workOutHolidayPage.checkPageLoads();
    await workOutHolidayPage.selectFullLeaveYear();
    await workOutHolidayPage.continueOn();

    // 5. Days Worked Per Week Page
    const daysWorkedPerWeekPage: DaysWorkedPerWeekPage = new DaysWorkedPerWeekPage(page);
    await daysWorkedPerWeekPage.checkPageLoads();
    await daysWorkedPerWeekPage.enterDays('3');
    await daysWorkedPerWeekPage.continueOn();

    // 6. Summary Page
    const summaryPage: SummaryPage = new SummaryPage(page);
    await summaryPage.checkPageLoads();
    await summaryPage.expectSummary('The statutory holiday entitlement is 16.8 days holiday.');
});
