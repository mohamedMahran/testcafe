import { t } from "testcafe"


class ElementHelpers{

    static async setText(element,text){
        debugger
        await t.pressKey('ctrl+a delete')
        await t.typeText(element,text)  
    }
    static async pressEnter(){
       
        await  t.pressKey('enter')
    }
    static async click(element){
       
        await  t.click(element)
    }
    static async clickOnElementWithText(element,text)
    {
        
        await  t.click(await element.withText(text))    
    }
    static async getCount(element)
    {
        return  await element.count  
    }
}

export  default ElementHelpers