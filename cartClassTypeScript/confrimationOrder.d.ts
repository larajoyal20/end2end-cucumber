import { Page } from "@playwright/test";
export declare class Order {
    /**
    * @param {import('@playwright/test').Page} page
    */ page: Page;
    constructor(page: Page);
    /**
     * @param {string} orderId
   */
    confrimation(orderId: string): Promise<"Order Placed" | undefined>;
}
//# sourceMappingURL=confrimationOrder.d.ts.map