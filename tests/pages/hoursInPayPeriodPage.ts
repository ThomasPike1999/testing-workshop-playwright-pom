import { Page, type Locator } from 'playwright';
import {expect} from "@playwright/test";
import hoursinPayPeriodPage_content from "../content/hoursinPayPeriodPage_content";

export class hoursinPayPeriodPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly heading: string;
    private readonly textBox: Locator;
    private readonly continue_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = hoursinPayPeriodPage_content.pageTitle;
        this.heading = hoursinPayPeriodPage_content.heading;
        this.textBox = page.locator('#response');
        this.continue_button = page.getByRole('button', { name: 'Continue' });
    }

    async checkPageLoads(): Promise<void> {
        await Promise.all([
            await expect(this.page).toHaveTitle(this.title),
            await expect(this.page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(this.textBox).toBeVisible(),
            await expect(this.continue_button).toBeVisible(),
        ]);
    }

    async fillTextBox(content: string): Promise<void> {
        await this.textBox.fill(content)
    }

    async continueOn(): Promise<void> {
        await this.continue_button.click();
    }
}

export default hoursinPayPeriodPage;
