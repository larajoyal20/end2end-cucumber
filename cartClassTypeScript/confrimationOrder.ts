import {expect, Page} from "@playwright/test"
export class Order{
   /**
   * @param {import('@playwright/test').Page} page
   */page:Page;
    constructor(page:Page){
        this.page=page;
    }
    /**
     * @param {string} orderId
   */
    async confrimation(orderId:string){
         await this.page.locator('button[routerlink="/dashboard/myorders"]').click();
         await this.page.waitForURL(/myorders/)
        //  await expect(this.page.getByText("Your Orders")).toBeVisible()
        await this.page.waitForTimeout(10000);
         if(await this.page.getByText("Your Orders").isVisible()){
            let tableSize=await this.page.locator("tbody tr").count();
            console.log(tableSize)
            for(let i=0;i<tableSize;i++){
                let orderQueueValue=(await this.page.locator("tbody tr").nth(i).locator("th").textContent())?.trim();
                console.debug(orderQueueValue)
                if(orderQueueValue==orderId.trim()){
                    return("Order Placed")
                }
            }
         }
         else{
            await expect(this.page.getByText("You have No Orders to show at this time.")).toBeVisible();
            console.log("Queue is Empty")
         }
    }
}
