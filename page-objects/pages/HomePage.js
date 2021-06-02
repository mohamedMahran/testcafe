import { Selector,t } from "testcafe"
import BasePage from "./BasePage"

class HomePage extends BasePage{
    constructor(){
        super()
        this.icon= Selector('#online_banking_features').child('div')
        this.images =  Selector('div.carousel-inner').child('div.item').child('img')
        this.links =  Selector('i.icon').parent('span.headers')
    }

}
export default HomePage