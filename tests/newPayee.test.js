
import LoginPage from '..//page-objects/pages/LoginPage'
import NavBar from '..//page-objects/component/Navbar'
import AccountSummaryPage from '..//page-objects/pages/AccountSummaryPage'


const loginPage = new LoginPage()
const navBar = new NavBar()
const accountSummaryPage = new AccountSummaryPage()
fixture `new payee scenarios`
.page   `http://zero.webappsecurity.com/index.html`

test.before(async t =>{
    await navBar.signIn()
    await loginPage.loginToApp('username','password')
})(`Add to Payee scenario`,async t=> { 
    await t.click(accountSummaryPage.payBillTab)
    await t.click(accountSummaryPage.addNewPayeeTab)
    await accountSummaryPage.addNewPayee('NAME','ADDRESS','account','dsds')
    await accountSummaryPage.add()
    await t.expect(accountSummaryPage.message.innerText).contains('successfully created')
   
})