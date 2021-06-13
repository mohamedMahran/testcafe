import { Selector,t } from "testcafe"
import ElementHelpers from "../../Helpers/ElementHelpers"
class FooterNav extends ElementHelpers{
    
    constructor(){
        super()
        this.footerLinks = Selector('.row').child('.span4').child('ul').child('li').child('span')
    }
    async clickOnTheFooterLink(name)
    {
        await ElementHelpers.clickOnElementWithText(this.footerLinks,name)
      
    }
    async getCountOfFooterLinks()
    {
        return await ElementHelpers.getCount(this.footerLinks)
    }
}
export default FooterNav