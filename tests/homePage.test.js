import { Selector } from 'testcafe'
import LoginPage from '..//page-objects/pages/LoginPage'
import NavBar from '..//page-objects/component/Navbar'
import HomePage from '..//page-objects/pages/HomePage'
import { ClientFunction } from 'testcafe'

const loginPage = new LoginPage()
const navBar = new NavBar()
const homePage = new HomePage()
const getPageUrl = ClientFunction(() => window.location.href)

fixture `Home Page Test Scenarios `.page   `http://zero.webappsecurity.com/index.html`

.beforeEach(async t=>{
    homePage.maximizeWindow()
})

test(`verify the icons text at the home page`,async t=> {
    await t.expect(homePage.iconsTitle.withText('Online Banking').exists).ok()
    await t.expect(homePage.iconsTitle.withText('Checking Account Activity').exists).ok()      
    await t.expect(homePage.iconsTitle.withText('Transfer Funds').exists).ok()
})

test(`verify the count of the icon-bookmark`,async t=> {
    let expectedCountOfIconBookMark = await  homePage.getCountOfIcons()
    await t.expect( expectedCountOfIconBookMark).eql(4)
})

test(`verify the count and image source of the slider  `,async t=> {

    

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
test.clientScripts({
    content: `
        window.addEventListener('error', function (e) {
            console.error(e.message); 
        });`
})(`Skip error but log it`, async t => {
    console.log(await t.getBrowserConsoleMessages());
});
test(`verify each footer link`,async t=> {
    
    let url ='http://zero.webappsecurity.com/index.html'
    homePage.maximizeWindow()
    
    
    await (await homePage.getFooterNav()).clickOnTheFooterLink('Download WebInspect')
    await t.expect(await getPageUrl()).contains('cyberres/application-security/webinspect')
    await homePage.goTo(url)

    
    await (await homePage.getFooterNav()).clickOnTheFooterLink('Terms of Use')
    await t.expect(await getPageUrl()).contains('https://www.microfocus.com/about/legal/')
    await homePage.goTo(url)

   
    await (await homePage.getFooterNav()).clickOnTheFooterLink('Contact Micro Focus')
    await t.expect(await getPageUrl()).contains('/secure/index.jsp')
    
})

test(`verify the footer links count`,async t=> {
    
    let expectedCountOfFooterLinks = await (await homePage.getFooterNav()).getCountOfFooterLinks()
    await t.expect(expectedCountOfFooterLinks).gte(expectedCountOfFooterLinks)
})