"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = void 0;
const test_1 = require("@playwright/test");
class PaymentMethod {
    page;
    constructor(page) {
        this.page = page;
    }
    async paymentDetails(cardUserName, ccvCode, creditCardNo, expiryMonth, expiryYear, country) {
        await this.page.locator('.form__cc').first().waitFor();
        await this.page.locator('.form__cc:has-text("Credit Card Number") input').first().clear();
        await this.page.locator('.form__cc:has-text("Credit Card Number") input').first().fill(creditCardNo);
        const expiry = await this.page.locator(".form__cc:has-text('Expiry Date') select");
        await expiry.nth(0).selectOption(expiryMonth);
        await expiry.nth(1).selectOption(expiryYear);
        await this.page.locator('.form__cc:has-text("CVV Code") input').nth(2).fill(ccvCode);
        await this.page.locator(".form__cc:has-text('Name on Card') input").nth(3).fill(cardUserName);
        await this.page.getByPlaceholder("Select Country").pressSequentially(country);
        await this.page.locator(".ta-item", { hasText: new RegExp(`^\\s*${country}\\s*$`) }).click();
        await this.page.locator(".action__submit").waitFor();
        await this.page.locator(".action__submit").click();
        await this.page.screenshot({ path: "./screenshots/orderPlaced.png" });
    }
    async orderConfrimation() {
        await this.page.getByText('Thankyou for the order.').waitFor();
        await (0, test_1.expect)(this.page.getByText('Order Placed Successfully')).toBeVisible();
        let orderobj = await this.page.locator("tbody label").last().textContent();
        console.log(orderobj);
        let newOrder = orderobj?.replace(/\|/g, "");
        console.log(newOrder);
        return newOrder;
    }
}
exports.PaymentMethod = PaymentMethod;
//# sourceMappingURL=paymentMethod.js.map