"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const test_1 = require("@playwright/test");
class LoginPage {
    page;
    emailId;
    password;
    signInButton;
    homebtn;
    constructor(page) {
        this.page = page;
        this.emailId = page.getByPlaceholder("email@example.com");
        this.password = page.getByPlaceholder("enter your passsword");
        this.signInButton = page.getByRole("button", { name: "login" });
        this.homebtn = page.getByRole("button", { name: "Home" });
    }
    async goto() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }
    async validLogin(email, password) {
        await this.emailId.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
        await (0, test_1.expect)(this.homebtn).toBeVisible();
        await this.page.screenshot({ path: "./screenshots/ScreenPom.png" });
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=loginPage.js.map