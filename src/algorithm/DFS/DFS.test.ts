import { describe, it } from "mocha";
import { expect } from "chai";
import {deepTravel } from "./DFS";


describe('kmp', () => {
    it('case 1', () => {
        const node = {
            id: 1,
            children: [
                {
                    id: 2,
                    children: [
                        {
                            id: 3,
                            children: undefined
                        }
                    ]
                },
                {
                    id: 4,
                    children: [
                        {
                            id: 5,
                            children: undefined
                        }
                    ]
                }
            ]
        }
        // @ts-ignore
        expect(deepTravel(node).map(r => r.id).toString()).to.equal('1,4,5,2,3')
    })

});

