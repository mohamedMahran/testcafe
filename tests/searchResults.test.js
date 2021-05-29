
import { Selector } from 'testcafe'
import SearchResultsPage from '..//page-objects/pages/SearchResultsPage'
import NavBar from '..//page-objects/component/NavBar'

const sarchResultsPage = new SearchResultsPage()
const navBar = new NavBar()

fixture `search `
.page   `http://zero.webappsecurity.com/index.html`

test(`test search results`,async t=> {

    await navBar.search('online bank')
    await t.expect(sarchResultsPage.linkText.innerText).contains('Zero - Free Access to Online Banking')
})