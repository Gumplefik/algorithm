import { describe, it } from 'mocha'
import { expect } from 'chai'
import { DirectSelectSort } from "./algorithm/sort/DirectSelect";

describe('directSort', () => {
    it('test directSort', () => {
        let arr = [1, 5, 7, 0, 10, -1];
        let result = [-1, 0, 1, 5, 7, 10];
        expect(DirectSelectSort(arr).join(',')).to.equal(result.join(','))
    })
});
