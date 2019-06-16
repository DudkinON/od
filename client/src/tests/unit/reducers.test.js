import React from "react";
import * as reducers from '../../reducers';


describe("reducers", () => {

    it("checks that reducers return object", () => {
        expect(typeof reducers.default() === 'object').toBeTruthy();
    });
});