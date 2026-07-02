import { Page, type Locator } from 'playwright';
import {expect} from "@playwright/test";
import leaveYearStartPage_content from "../content/leaveYearStartPage_content";

export class leaveYearStartPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly heading: string;
    private readonly text_line1: string;
    private readonly dayInput: Locator;
    private readonly monthInput: Locator;
    private readonly yearInput: Locator;
    private readonly continue_button: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.title = leaveYearStartPage_content.pageTitle;
        this.heading = leaveYearStartPage_content.heading;
        this.text_line1 = leaveYearStartPage_content.text_line1;
        this.dayInput = page.getByLabel('Day');
        this.monthInput = page.getByLabel('Month');
        this.yearInput = page.getByLabel('Year');
        this.continue_button = page.getByRole('button', { name: 'Continue' });
    }

    async checkPageLoads(): Promise<void> {
        await Promise.all([
            await expect(this.page).toHaveTitle(this.title),
            await expect(this.page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(this.page.getByText(this.text_line1)).toBeVisible(),
            await expect(this.dayInput).toBeVisible(),
            await expect(this.monthInput).toBeVisible(),
            await expect(this.yearInput).toBeVisible(),
            await expect(this.continue_button).toBeVisible(),
        ]);
    }

    async enterDate(date: string): Promise<void> {
        const [day, month, year] = date.split("/")
        await this.dayInput.fill(day);
        await this.monthInput.fill(month);
        await this.yearInput.fill(year);
    }

    async continueOn(): Promise<void> {
        await this.continue_button.click();
    }
}
    

export default leaveYearStartPage;