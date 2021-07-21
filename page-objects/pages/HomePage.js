import { Selector,t } from "testcafe"
import Navbar from "../component/Navbar"
import FooterNav from "../component/FooterNav"
import BasePage from "./BasePage"
import ElementHelpers from "../../Helpers/ElementHelpers"


class HomePage extends BasePage{
    constructor() {
        super()
       
        this.iconsTitle= Selector('#online_banking_features').child('div.span3') 
        this.icons= Selector('#online_banking_features').child('div.span3')
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
    async getCountOfIcons()
    {
        return await ElementHelpers.getCount(this.icons)
    }

}
export default HomePage