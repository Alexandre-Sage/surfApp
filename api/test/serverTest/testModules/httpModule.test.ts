import { assertError, assertHeader, assertBody } from "./assertionModule.test";
import { ErrorObject, HeaderObject, AssertBodyObj } from "./modulesInterfaces";
import fs from "fs";
const { log } = console;
async function testGetRoute(agentObj: any, path: string, assertHeaderObj: HeaderObject, errorObject: ErrorObject, assertBodyObj: AssertBodyObj) {
    await agentObj.agent.get(path)
        .then((res: any) => {
            const { contentType, status, origin, cookie } = assertHeaderObj;
            const { serverError, clientError, badRequest } = errorObject;
            assertHeader(res, assertHeaderObj);
            assertError(res, errorObject);
            assertBody(res, assertBodyObj);
        }).catch((err: Error) => { throw err })
};

async function testPostRoute(agentObj: any, url: string, sendBody: Object, assertHeaderObj: HeaderObject, errorObject: ErrorObject, assertBodyObj: AssertBodyObj) {
    agentObj.agent.post(url)
    return await agentObj.agent.post(url)
        .send(sendBody)
        .then((res: any) => {
            //log(res)
            const { contentType, status, origin, cookie } = assertHeaderObj;
            const { serverError, clientError, badRequest } = errorObject;
            assertHeader(res, assertHeaderObj);
            assertError(res, errorObject);
            assertBody(res, assertBodyObj);
        }).catch((err: Error) => { throw err });
}

async function testPostFileRoute(agentObj: any, url: string, filePath: string, fileName: string, assertHeaderObj: HeaderObject, errorObject: ErrorObject, assertBodyObj: AssertBodyObj) {
    const boundary = Math.random();
    try {
        const res = await agentObj.agent.post(url)
            .set('Content-Type', 'multipart/form-data; boundary=' + boundary)
            .attach("image", fs.readFileSync(filePath), fileName)
        assertHeader(res, assertHeaderObj);
        assertError(res, errorObject);
        assertBody(res, assertBodyObj);
        console.log(res)
    } catch (error) {
        throw error
    }

};

export { testGetRoute, testPostRoute, testPostFileRoute }
