import { Selector,t } from "testcafe"

class ForgettenPasswordPage{
    constructor(){
        this.emailInput= Selector('#user_email')
        this.message =Selector('div')
    }

}
export default ForgettenPasswordPage