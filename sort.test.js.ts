import { describe, it } from 'mocha'
import { expect } from 'chai'
import { DirectSelectSort } from "./algorithm/sort/DirectSelect";
import { DirectInsertSort } from './algorithm/sort/DirectInsert';
import { ShellSort } from './algorithm/sort/ShellSort';
import { BubbleSort } from "./algorithm/sort/BubbleSort";
import {QuickSort} from "./algorithm/sort/QuickSort";

let arr = [1, 5, 7, 0, 10, -1];
let result = [-1, 0, 1, 5, 7, 10];
let arr1 = [1, 5, 7, 0, 10, -1, 12, 23, -5, 120, -120, 465, 13];
let result1 = [ -120, -5, -1, 0, 1, 5, 7, 10, 12, 13, 23, 120, 465 ];

describe('directSort', () => {
    it('test directSelectSort', () => {
        expect(DirectSelectSort(arr).join(',')).to.equal(result.join(','))
    })
    it('test directInsertSort', () => {
        expect(DirectInsertSort(arr).join(',')).to.equal(result.join(','))
    })
    it('test ShellSort', () => {
        expect(ShellSort(arr1).join(',')).to.equal(result1.join(','))
    })
    it('test BubbleSort', () => {
        expect(BubbleSort(arr1).join(',')).to.equal(result1.join(','))
    })
    it('test QuickSort', () => {
        expect(QuickSort(arr1).join(',')).to.equal(result1.join(','))
    })
});
