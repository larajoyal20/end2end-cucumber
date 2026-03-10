
import { Page, Locator,expect} from "@playwright/test";

export class CartItem{
    page:Page;
    cardbody:Locator;
    constructor(page:Page){
        this.page=page;
        this.cardbody=page.locator(".card-body")
    }
    async addToCart(filterText:string){
        const product =await this.cardbody.filter({hasText:filterText});
        await product.getByRole("button",{name:"Add To Cart"}).click();
        await this.page.getByText("Product Added To Cart").waitFor();
        await this.page.locator('button[routerlink="/dashboard/cart"]').click();
        await this.page.waitForURL(/cart/);
        await expect(this.page.getByText("My Cart")).toBeVisible();
    }
    async buyProduct(){
        await this.page.getByRole("button",{name:"Buy Now"}).click();
        await this.page.screenshot({path:"./screenshots/buynowSS.png"})
    }
}

