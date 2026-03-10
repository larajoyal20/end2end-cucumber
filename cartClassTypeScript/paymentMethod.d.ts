import { Page } from "@playwright/test";
export declare class PaymentMethod {
    page: Page;
    constructor(page: Page);
    paymentDetails(cardUserName: string, ccvCode: string, creditCardNo: string, expiryMonth: string, expiryYear: string, country: string): Promise<void>;
    orderConfrimation(): Promise<string | undefined>;
}
//# sourceMappingURL=paymentMethod.d.ts.map