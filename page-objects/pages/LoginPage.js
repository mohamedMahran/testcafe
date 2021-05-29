import { Selector,t } from "testcafe"

class LoginPage{
    constructor(){
        this.loginForm =Selector('#login_form')
        this.username=Selector('#user_login')
        this.password=Selector('#user_password')
        this.submitButton=Selector('.btn-primary')   
        this.errorMessage = Selector('.alert-error')
        this.forgettenPasswordLink= Selector('a').withText('Forgot your password ?')
    }
    
    async loginToApp(username,password)
    {
        await t
            .typeText(this.username,username,{paste:true,replace:true})
            .typeText(this.password,password,{paste:true,replace:true})
            .click(this.submitButton)
    }
   
}
export default LoginPage