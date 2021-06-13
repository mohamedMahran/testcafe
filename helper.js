import { t} from "testcafe";

export async function login (username,password){   
  
    await t.click('#signin_button')      
    await t.typeText('#user_login',username,{paste:true})
    await t.typeText('#user_password',password,{paste:true})
    await t.click('.btn-primary')   
}

export async function enterName(name) {
    await t.typeText('#developer-name', name);
};

export async function type(comment,selector) {
    await t
        .click(selector)
        .typeText(comment);
};

export async function submitForm() {
    await t.click('#submit-button');
};