import { Page, Locator } from "@playwright/test";
export declare class LoginPage {
    page: Page;
    emailId: Locator;
    password: Locator;
    signInButton: Locator;
    homebtn: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    validLogin(email: string, password: string): Promise<void>;
}
//# sourceMappingURL=loginPage.d.ts.map