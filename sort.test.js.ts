import { describe, it } from 'mocha'
import { expect } from 'chai'
import { DirectSelectSort } from "./src/algorithm/sort/DirectSelect";
import { DirectInsertSort } from './src/algorithm/sort/DirectInsert';
import { ShellSort } from './src/algorithm/sort/ShellSort';
import { BubbleSort } from "./src/algorithm/sort/BubbleSort";
import {QuickSort} from "./src/algorithm/sort/QuickSort";
import {MergeSort} from "./src/algorithm/sort/MergeSort";

let arr = [1, 5, 7, 0, 10, -1];
let result = [-1, 0, 1, 5, 7, 10];
let arr1 = [1, 5, 7, 0, 10, -1, 12, 23, -5, 120, -120, 465, 13];
let result1 = [ -120, -5, -1, 0, 1, 5, 7, 10, 12, 13, 23, 120, 465 ];
let arr2 = [4, 6, 2]
let result2 = [2, 4, 6]
let arr3 = [4, 4, 6, 2, 1]
let result3 = [1, 2, 4, 4, 6]

describe('directSort', () => {
    it('test directSelectSort', () => {
        expect(DirectSelectSort([...arr]).join(',')).to.equal(result.join(','))
    })
    it('test directInsertSort', () => {
        expect(DirectInsertSort([...arr]).join(',')).to.equal(result.join(','))
    })
    it('test ShellSort', () => {
        expect(ShellSort([...arr]).join(',')).to.equal(result.join(','))
    })
    it('test BubbleSort', () => {
        expect(BubbleSort([...arr]).join(',')).to.equal(result.join(','))
    })
    it('test QuickSort', () => {
        expect(QuickSort([...arr]).join(',')).to.equal(result.join(','))
    })
    it('test QuickSort case 2', () => {
        expect(QuickSort([...arr1]).join(',')).to.equal(result1.join(','))
    })
    it('test QuickSort case 3', () => {
        expect(QuickSort([...arr2]).join(',')).to.equal(result2.join(','))
    })
    it('test QuickSort case 4', () => {
        expect(QuickSort([...arr3]).join(',')).to.equal(result3.join(','))
    })
    it('test MergeSort', () => {
        expect(MergeSort([...arr1]).join(',')).to.equal(result1.join(','))
    })
});
