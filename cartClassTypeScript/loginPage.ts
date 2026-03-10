
import  {Page,Locator,expect} from"@playwright/test"

export class LoginPage{
    page:Page;
    emailId: Locator;
    password: Locator;
    signInButton: Locator;
    homebtn: Locator;

    constructor(page:Page){
        this.page=page;
        this.emailId=page.getByPlaceholder("email@example.com");
        this.password=page.getByPlaceholder("enter your passsword");
        this.signInButton=page.getByRole("button",{name:"login"});
        this.homebtn=page.getByRole("button",{name:"Home"})
    }
    async goto(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    }
    async validLogin(email:string,password:string){
        await this.emailId.fill(email)
        await this.password.fill(password)
        await this.signInButton.click()
        await expect(this.homebtn).toBeVisible();
        await this.page.screenshot({path:"./screenshots/ScreenPom.png"})
    }

}




/**
 * let a= "kjfnfkj"
 * let b:string=
 * 
 * 
 * 
 */