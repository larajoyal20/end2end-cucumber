"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const test_1 = require("@playwright/test");
class Order {
    /**
    * @param {import('@playwright/test').Page} page
    */ page;
    constructor(page) {
        this.page = page;
    }
    /**
     * @param {string} orderId
   */
    async confrimation(orderId) {
        await this.page.locator('button[routerlink="/dashboard/myorders"]').click();
        await this.page.waitForURL(/myorders/);
        //  await expect(this.page.getByText("Your Orders")).toBeVisible()
        await this.page.waitForTimeout(10000);
        if (await this.page.getByText("Your Orders").isVisible()) {
            let tableSize = await this.page.locator("tbody tr").count();
            console.log(tableSize);
            for (let i = 0; i < tableSize; i++) {
                let orderQueueValue = (await this.page.locator("tbody tr").nth(i).locator("th").textContent())?.trim();
                console.debug(orderQueueValue);
                if (orderQueueValue == orderId.trim()) {
                    return ("Order Placed");
                }
            }
        }
        else {
            await (0, test_1.expect)(this.page.getByText("You have No Orders to show at this time.")).toBeVisible();
            console.log("Queue is Empty");
        }
    }
}
exports.Order = Order;
//# sourceMappingURL=confrimationOrder.js.map