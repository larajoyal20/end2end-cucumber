import { Page } from "@playwright/test";
import {LoginPage} from "../cartClassTypeScript/loginPage";
import {CartItem} from "../cartClassTypeScript/cartitem";
import {PaymentMethod} from "../cartClassTypeScript/paymentMethod";
import {Order} from "../cartClassTypeScript/confrimationOrder";
export class ClassManager{

page:Page;
loginpage:LoginPage;
cartitem:CartItem
paymentmethod:PaymentMethod;
order:Order;
/**
 * @param {import('@playwright/test').Page} page
 * 
 */
constructor(page:Page){
    this.page=page;
    this.loginpage=new LoginPage(page);
    this.cartitem= new CartItem(page);
    this.paymentmethod=new PaymentMethod(page);
    this.order= new Order(page)
}
signIN(){
    return this.loginpage;
}

addItem(){
    return this.cartitem;
}
payDetails(){
    return this.paymentmethod;
}
orders(){
    return this.order;
}
}
