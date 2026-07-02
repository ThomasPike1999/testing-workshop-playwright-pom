import { Page, type Locator } from 'playwright';
import {expect} from "@playwright/test";
import summaryPage_content from "../content/summaryPage_content";

export class SummaryPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly heading: string;
    private readonly summary_result: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = summaryPage_content.pageTitle;
        this.heading = summaryPage_content.heading;
        this.summary_result = page.locator('.summary');
    }

    async checkPageLoads(): Promise<void> {
        await Promise.all([
            await expect(this.page).toHaveTitle(this.title),
            await expect(this.page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(this.page.getByText(summaryPage_content.information_text)).toBeVisible(),
        ]);
    }

    async expectSummary(expectedText: string): Promise<void> {
        console.log(this.summary_result);
        await expect(this.summary_result).toContainText(expectedText);
    }
}

export default SummaryPage;
