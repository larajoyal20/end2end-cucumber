"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const test_1 = require("@playwright/test");
class CartItem {
    page;
    cardbody;
    constructor(page) {
        this.page = page;
        this.cardbody = page.locator(".card-body");
    }
    async addToCart(filterText) {
        const product = await this.cardbody.filter({ hasText: filterText });
        await product.getByRole("button", { name: "Add To Cart" }).click();
        await this.page.getByText("Product Added To Cart").waitFor();
        await this.page.locator('button[routerlink="/dashboard/cart"]').click();
        await this.page.waitForURL(/cart/);
        await (0, test_1.expect)(this.page.getByText("My Cart")).toBeVisible();
    }
    async buyProduct() {
        await this.page.getByRole("button", { name: "Buy Now" }).click();
        await this.page.screenshot({ path: "./screenshots/buynowSS.png" });
    }
}
exports.CartItem = CartItem;
//# sourceMappingURL=cartitem.js.map