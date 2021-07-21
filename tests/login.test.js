
import LoginPage from '..//page-objects/pages/LoginPage'
import dataset from '../data.json'
import HomePage from '../page-objects/pages/HomePage'
const loginPage = new LoginPage()
const homePage = new HomePage()


fixture `Login Test Scenarios`
.page   `http://zero.webappsecurity.com/index.html`


dataset.forEach(data=> {
test(`Verify ${data.name}`, async t => 
    {
    await (await homePage.getNavigationBar()).signIn()
    await loginPage.loginToApp(data.username,data.password) 
      
    if(! await loginPage.errorMessage.exists)
    { 
       
        await t.expect(loginPage.loginForm.exists).notOk()
        await t.expect((await homePage.getNavigationBar()).signInButton.exists).notOk()
        await t.expect((await homePage.getNavigationBar()).userIcon.exists).ok()  
    }
    
    else 
    {
        debugger;
        await t.expect(loginPage.loginForm.exists).ok()
        await t.expect(loginPage.submitButton.exists).ok()
        await t.expect(loginPage.errorMessage.innerText).contains('Login and/or password are wrong')
      
    }
        
     
    });
});
