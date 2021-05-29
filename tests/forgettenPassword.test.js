
import LoginPage from '..//page-objects/pages/LoginPage'
import NavBar from '..//page-objects/component/Navbar'
import ForgettenPasswordPage from '..//page-objects/pages/ForgettenPasswordPage'


const loginPage = new LoginPage()
const navBar = new NavBar()
const forgettenPasswordPage = new ForgettenPasswordPage()
fixture `forgetten scenarios`
.page   `http://zero.webappsecurity.com/index.html`
test(`forgetten password scenario`,async t=> {
    
    await navBar.signIn()
    await t.click(loginPage.forgettenPasswordLink)
    await t.typeText(forgettenPasswordPage.emailInput,'email@test.com',{
        paste:true,
        replace:true
    })
    await t.pressKey('enter')
    await t.expect(forgettenPasswordPage.message.innerText).contains('Your password will be sent to the following email: email@test.com')
})
