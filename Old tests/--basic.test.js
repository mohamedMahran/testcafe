import {Selector} from 'testcafe'

fixture `Getting started with test cafe`
    .page   `https://devexpress.github.io/testcafe/example/`
    .before(async t=>{
        // Test setup goes here
        // await run database reset
        
    }).
    beforeEach(async t=>{
        // run before each test
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(0)
    }).after(async t=>{
        // Cleaning test data
        //logging and sending data to monitoring systems
    }).afterEach(async t=>{
        // Runs after each test
    })
    test.only(`My first testcafe test`,async t=> {
    const developer_name_input= Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const articleText= Selector('#article-header')
    
    await t.typeText(developer_name_input,'John')
    //await t.wait(3000) // pause the execution and using only for debugging purposes 
    await t.click(submit_button)

    await t.expect(Selector(articleText).innerText).contains('John')

    })
    test.skip(`My first testcafe test`,async t=> {
        const developer_name_input= Selector('#developer-name')
        const submit_button = Selector('#submit-button')
        const articleText= Selector('#article-header')
        
        await t.typeText(developer_name_input,'John')
        //await t.wait(3000) // pause the execution and using only for debugging purposes 
        await t.click(submit_button)
    
        await t.expect(Selector(articleText).innerText).contains('John')
        
        //******************* Action APIs
        //click
        await t.click('selector',{options})
        // double click
        await t.doubleClick('selector',{options})
        // Right click
        await t.rightClick('selector',{options})
        // Drag element
        await t.drag('selector',200,0,{options})
        // hover element
        await t.hover('selector',{options})
        // select text
        await t.selectText('selector',{options})
        //******************** Assertion API */
        // Deep equal 
        await t.expect('foo').eql('foo','message',options)
        // Deep not equal 
        await t.expect('foo').notEql('foo','message',options)
        // OK 
        await t.expect(true).ok()

        // Not OK 
        await t.expect(true).notOk()

        // contains

        await t.expect('foo').contains('o')

        // not contains
        await t.expect('foo').notContains('hey')

        // Greater Less
        await t.expect(10).gt(10)  // greater than 
        await t.expect(10).gte(10)  // greater than or equal 
        
        await t.expect(10).lt(10)  // less than 
        await t.expect(10).lte(10)  // less than or equal 

        // with in 
        await t.expect(10).within(1,100)
        // Not within
        await t.expect(10).notWithin(1,100)
    
    
    })