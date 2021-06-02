import { Selector } from 'testcafe'
import LoginPage from '..//page-objects/pages/LoginPage'
import NavBar from '..//page-objects/component/Navbar'
import HomePage from '..//page-objects/pages/HomePage'


const loginPage = new LoginPage()
const navBar = new NavBar()
const homePage = new HomePage()


fixture `Home Page Test Scenarios `
.page   `http://zero.webappsecurity.com/index.html`

test(`verify the icons text at the home page`,async t=> {

    homePage.beforeEach()
    
    await t.expect(homePage.icon.withText(' Online Banking').exists).ok()
    await t.expect(homePage.icon.withText('Checking Account Activity').exists).ok()      
    await t.expect(homePage.icon.withText('Transfer Funds').exists).ok()
})

test(`verify the count of the icon-bookmark`,async t=> {
    homePage.beforeEach()
    
    await t.expect(homePage.icon.count).eql(4)
})

test(`verify the count and image source of the slider  `,async t=> {

    homePage.beforeEach()

    await t.expect(await homePage.images.count).eql(3)
    const imgSrc= await homePage.images.getAttribute('src')
    await t.expect(imgSrc).contains('/resources/img/main_carousel')
})

test(`verify the links   `,async t=> {
    
 
    const linksCount = await homePage.links.count;

    for(let i =0 ; i < linksCount;i++)
    {
        await t.click(homePage.links.nth(i))
        
        await t.expect(loginPage.loginForm.exists).ok()
        
        await loginPage.loginToApp('username','password')
        
        const tabs= Selector('ul.nav-tabs')
        
        await t.expect(tabs.exists).ok()
        
        const tabsCount = await tabs.count;
        for(let j =0 ; j >  tabsCount;j++)
        {
            var _linkText = tabs.child(a)
            if(_linkText.withText('Account Activity'))
            {
                tabs.nth(j)
                var queryString =  tabs.child(a).getAttribute('href')
                 
                t.expect(queryString).contains('?url=account-activity.html')
            }
            else if (_linkText.withText('Transfer Funds'))
            {
                tabs.nth(j)
                var queryString =  tabs.child(a).getAttribute('href')
                 
                t.expect(queryString).contains('?url=transfer-funds.html')
            }
            else if (_linkText.withText('My Money Map'))
            {
                tabs.nth(j)
                var queryString =  element.child(a).getAttribute('href')
                t.wait(5000)
                
                t.expect(queryString).contains('?url=money-map.html')
                t.expect(Selector('div#report').exists).ok()
                t.expect(Selector('div#charts').exists).ok()

            }
                    
        }
        
        const logo = Selector('a').withExactText('Zero Bank')
        
        await t.click(logo)
        
        await t.click(navBar.userIcon)
        
        await t.click(navBar.logOutButton)
    }
    
})

