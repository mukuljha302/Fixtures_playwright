import {expect,test } from "./myFixtures";

test("My Test 1",async ({hey},info)=>{
    console.log(hey.toUpperCase());
    let text = hey.toUpperCase();
    expect(text).toBe("I AM MUKUL");
    console.log("IS it passed? "+info.status);

});



