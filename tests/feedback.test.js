import { Selector } from 'testcafe'
import FeedbackPage from '..//page-objects/pages/FeedbackPage'


const feedbackPage = new FeedbackPage()
fixture `Feedback scenarios`
.page   `http://zero.webappsecurity.com/index.html`
test(`testing feedback section`,async t=> {
    const linkToFeedBack = Selector('li#feedback')
    await t.click(linkToFeedBack)
    await feedbackPage.submitToFeedBack('NAME','email@test.com','SUBJECT','TEST')
    feedbackPage.waitFor(2000)
    await t.click(feedbackPage.form_submitButton)
    await t.expect(feedbackPage.message.innerText).contains("Thank you")
    
})