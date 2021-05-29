import { Selector } from "testcafe"

class Feedback{
  
        form_name: Selector= Selector('#name')
        form_email:Selector= Selector('#email')
        form_subject:Selector =Selector('#subject')
        form_comment:Selector = Selector('#comment')
        form_submitButton:Selector= Selector('.btn-primary')
        message:Selector = Selector('div')
   
    async submitToFeedBack(t:TestController ,_name: string,_email: string,_subject: string,_comment: string)
    {
        await t
                .typeText(this.form_name, _name, {paste:true})
                .typeText(this.form_email, _email,  {paste:true})
                .typeText(this.form_subject, _subject,   {paste:true})
                .typeText(this.form_comment, _comment, {paste:true})
                
        await t.click(this.form_submitButton)
    }

}
export default Feedback