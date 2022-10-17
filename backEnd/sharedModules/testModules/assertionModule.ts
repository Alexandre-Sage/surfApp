import chai, { request, assert, should, expect, } from "chai";

export const objectPropertyAssertion = (data: any, propertyArray: string[]) => (
  propertyArray.forEach((property) => expect(data).to.have.property(property))
);