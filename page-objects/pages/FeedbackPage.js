import { Selector,t } from "testcafe"
import BasePage from "./BasePage"

class FeedbackPage extends BasePage{
    
    constructor() {
        super();
        this. form_name= Selector('#name')
        this.form_email= Selector('#email')
        this.form_subject =Selector('#subject')
        this.form_comment = Selector('#comment')
        this.form_submitButton= Selector('.btn-primary')
        this.message = Selector('div')
    }
    async submitToFeedBack(name,email,subject,comment)
    {
        await t
                .typeText(this.form_name,name,{paste:true})
                .typeText(this.form_email, email,  {paste:true})
                .typeText(this.form_subject, subject,   {paste:true})
                .typeText(this.form_comment, comment, {paste:true})
               
    }

}
export default FeedbackPage