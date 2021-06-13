
import FeedbackPage from '..//page-objects/pages/FeedbackPage'
import xpathToCss from 'xpath-to-css'

const feedbackPage = new FeedbackPage()
fixture `Feedback scenarios`
.page   `http://zero.webappsecurity.com/index.html`
test(`testing feedback section`,async t=> {
   
   
    //Xpath to CSS
    const xPathOfLinkToFeedBack = ` '//li[@id='feedback']' ` 
   // const linkToFeedBack = Selector('li#feedback')
    const linkToFeedBack = xpathToCss(xPathOfLinkToFeedBack)
    console.log(linkToFeedBack)
    
    await t.click(linkToFeedBack)
    await feedbackPage.submitToFeedBack('NAME','email@test.com','SUBJECT','TEST')
    feedbackPage.waitFor(2000)
    await t.click(feedbackPage.form_submitButton)
    await t.expect(feedbackPage.message.innerText).contains("Thank you")
    
})