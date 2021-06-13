
import LoginPage from '..//page-objects/pages/LoginPage'
import NavBar from '..//page-objects/component/Navbar'


const loginPage = new LoginPage()
const navBar = new NavBar()
fixture `Login Test Scenarios`
.page   `http://zero.webappsecurity.com/index.html`

test(`Invalid Login scenario`,async t=> {
    await navBar.signIn()
    await loginPage.loginToApp('invalidUser','invalidPassword')  
    await t.expect(loginPage.errorMessage.innerText).contains('Login and/or password are wrong')
    await t.expect(loginPage.loginForm.exists).ok()    
})
test(`Valid Login scenario`,async t=> {
    await navBar.signIn()
    await loginPage.loginToApp('username','password')
    await t.expect(loginPage.loginForm.exists).notOk()
    await t.expect(navBar.signInButton.exists).notOk()
    await t.expect(navBar.userIcon.exists).ok()
})

// dataSet.forEach(data => {
//     test(`Enter '${data.name}'`, async t => {
//         await t
//             .typeText('#developer-name', data.name)
//             .click('#tried-test-cafe')
//             .typeText('#comments', data.comment)
//             .click('#submit-button')
//             .expect(Selector('#article-header').textContent).eql(data.resultText);
//     });
// });