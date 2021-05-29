import { t } from "testcafe"

class BasePage{
   
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