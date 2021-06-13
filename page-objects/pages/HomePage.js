import { Selector,t } from "testcafe"
import Navbar from "../component/Navbar"
import FooterNav from "../component/FooterNav"
import BasePage from "./BasePage"


class HomePage extends BasePage{
    constructor() {
        super()
       
        this.icon= Selector('#online_banking_features').child('div')
        this.images =  Selector('div.carousel-inner').child('div.item').child('img')
        this.links =  Selector('i.icon').parent('span.headers')
    }
    async  getNavigationBar()
    {
        return new Navbar()
    }
    async getFooterNav()
    {
        return new FooterNav()
    }

}
export default HomePage