import { t } from "testcafe"

class BasePage{

    async beforeEach(){
        // run before each test
        await t.maximizeWindow()
        await t.setTestSpeed(0.7)
        
    }
    async waitFor(milliSeconds)
    {
        await t.wait(milliSeconds)
    }
    async setToSpeed(speedLevel)
    {
        await t.setToSpeed(speedLevel)
    }

}
export default BasePage