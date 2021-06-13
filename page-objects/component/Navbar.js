import { Selector } from "testcafe"
import ElementHelpers from "../../Helpers/ElementHelpers"

class Navbar extends ElementHelpers{
    constructor(){
        super()
        this.searchBox = Selector('#searchTerm')
        this.signInButton = Selector('#signin_button')
        this.userIcon=Selector('.icon-user')
        this.logOutButton = Selector('#logout_link')
    }
    async search(text){
        debugger
        await ElementHelpers.setText(this.searchBox,text)
        await ElementHelpers.pressEnter()
     
    }
    async signIn()
    {
        await ElementHelpers.click(this.signInButton)
    }
   
}
export default Navbar