import { Given,When,Then} from "@cucumber/cucumber";
import { ClassManager } from "../pomTypeScript/PoManager";


Given('user navigates to login page', async function () {
           // Write code here that turns the phrase above into concrete actions
  this.pomManager=new ClassManager(this.page)
   await this.pomManager.signIN().goto();
});
When('user logs in with email {string} and password {string}', async function (email:string, password:string) {
  await this.pomManager.signIN().validLogin(email,password)
});
When('user adds product {string} to the cart', async function (productname:string) {
  await this.pomManager.addItem().addToCart(productname);
});
 When('user buys the product from the cart', async function () {
  await this.pomManager.addItem().buyProduct();
 });
When(
'user fills payment details with card {string}, month {string}, year {string}, ccv {string}, country {string}, name {string}',
async function (
  creditCardNo:string,
  expiryMonth:string,
  expiryYear:string,
  ccvCode:string,
  country:string,
  cardUserName:string
) {

  await this.pomManager.payDetails().paymentDetails(
    cardUserName,
    ccvCode,
    creditCardNo,
    expiryMonth,
    expiryYear,
    country
  )

  this.orderId = await this.pomManager.payDetails().orderConfrimation()

});
 Then('user should see order confirmation',  {timeout:60000},async function () {
  let orderConfrim=await this.pomManager.orders().confrimation(this.orderId);
    console.log(orderConfrim)

 });

