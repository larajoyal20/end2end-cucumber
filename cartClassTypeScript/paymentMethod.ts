import { Page, expect } from "@playwright/test";
export class PaymentMethod{
    page:Page;
    constructor(page:Page){
        this.page=page;

    }
    async paymentDetails(cardUserName:string,ccvCode:string,creditCardNo:string,expiryMonth:string,expiryYear:string,country:string){
        await this.page.locator('.form__cc').first().waitFor();
        await this.page.locator('.form__cc:has-text("Credit Card Number") input').first().clear()
        await this.page.locator('.form__cc:has-text("Credit Card Number") input').first().fill(creditCardNo);
        const expiry=await this.page.locator(".form__cc:has-text('Expiry Date') select")
        await expiry.nth(0).selectOption(expiryMonth)
        await expiry.nth(1).selectOption(expiryYear)
        await this.page.locator('.form__cc:has-text("CVV Code") input').nth(2).fill(ccvCode);
        await this.page.locator(".form__cc:has-text('Name on Card') input").nth(3).fill(cardUserName)
        await this.page.getByPlaceholder("Select Country").pressSequentially(country);
        await this.page.locator(".ta-item", { hasText: new RegExp(`^\\s*${country}\\s*$`) }).click();
        await this.page.locator(".action__submit").waitFor()
        await this.page.locator(".action__submit").click()
        await this.page.screenshot({path:"./screenshots/orderPlaced.png"})

    }
    async orderConfrimation():Promise<string>{{
        await this.page.getByText('Thankyou for the order.').waitFor();
        await expect(this.page.getByText('Order Placed Successfully')).toBeVisible();
        let orderobj=await this.page.locator("tbody label").last().textContent();
        console.log(orderobj)
        let newOrder = orderobj?.replace(/\|/g, "")?? "";
        console.log(newOrder)
        return newOrder;
    }

    }
}
