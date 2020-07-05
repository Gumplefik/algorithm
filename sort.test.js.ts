import { describe, it } from 'mocha'
import { expect } from 'chai'
import { DirectSelectSort } from "./algorithm/sort/DirectSelect";
import { DirectInsertSort } from './algorithm/sort/DirectInsert';
import { ShellSort } from './algorithm/sort/ShellSort';

describe('directSort', () => {
    it('test directSelectSort', () => {
        let arr = [1, 5, 7, 0, 10, -1];
        let result = [-1, 0, 1, 5, 7, 10];
        expect(DirectSelectSort(arr).join(',')).to.equal(result.join(','))
    })
    it('test directInsertSort', () => {
        let arr = [1, 5, 7, 0, 10, -1];
        let result = [-1, 0, 1, 5, 7, 10];
        expect(DirectInsertSort(arr).join(',')).to.equal(result.join(','))
    })
    it('test ShellSort', () => {
        let arr = [1, 5, 7, 0, 10, -1];
        let result = [-1, 0, 1, 5, 7, 10];
        expect(ShellSort(arr).join(',')).to.equal(result.join(','))
    })
});
