import { Selector,t } from "testcafe"
class AccountSummaryPage  {
   
    constructor(){ 
        
        this.accountSummaryTab =  Selector('#account_summary_tab') 
        this.payBillTab = Selector('li#pay_bills_tab') 
        this.addNewPayeeTab = Selector('a').withExactText('Add New Payee') 
        this.payeeName =Selector("#np_new_payee_name")
        this.payeeAddress=Selector('#np_new_payee_address')
        this.payeeAccount=Selector('#np_new_payee_account')
        this.payeeDetails=Selector('#np_new_payee_details')
        this.addToPayee = Selector('#add_new_payee')
        this.message = Selector('div#alert_content')
    }
    async addNewPayee(name,address,account,details)
    {
        await t.typeText(this.payeeName,name,{
                paste:true,
                replace:true
            })
                .typeText(this.payeeAddress,address,{
                paste:true,
                replace:true
            })
                .typeText(this.payeeAccount,account,{
                paste:true,
                replace:true
            })
                .typeText(this.payeeDetails,details,{
                paste:true,
                replace:true
            })
    }
    async add()
    {
        
        await t.click(this.addToPayee)
    }
}
export default AccountSummaryPage