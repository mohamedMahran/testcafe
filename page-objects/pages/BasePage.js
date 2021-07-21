import { t } from "testcafe"
import { ClientFunction } from 'testcafe';
class BasePage{

    async maximizeWindow(){
        // run before each test
        await t.maximizeWindow()
       // await t.setTestSpeed(1)
        
    }
    async closeWindow()
    {
        await t.closeWindow()
    }
    async goTo(url)
    {
        await t.navigateTo(url)
    }
    async waitFor(milliSeconds)
    {
        await t.wait(milliSeconds)
    }
    async setToSpeed(speedLevel)
    {
        await t.setToSpeed(speedLevel)
    }

    async getCurrentURL()
    {
        return  await ClientFunction(() => window.location.href)();
    }
}
export default BasePage