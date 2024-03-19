import {test as baseTest} from "@playwright/test";

type mukul={

    hey:string
}


const fixture=baseTest.extend<mukul>(
{
    hey:"I am Mukul"
}

);

export const test=fixture;
export const expect=fixture.expect;
