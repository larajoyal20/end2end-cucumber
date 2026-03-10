import { Page, Locator } from "@playwright/test";
export declare class CartItem {
    page: Page;
    cardbody: Locator;
    constructor(page: Page);
    addToCart(filterText: string): Promise<void>;
    buyProduct(): Promise<void>;
}
//# sourceMappingURL=cartitem.d.ts.map