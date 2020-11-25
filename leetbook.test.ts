import { describe, it } from "mocha";
import { expect } from "chai";
import { findRepeatNumber } from "./src/offer/3";
import { ListNode, Solution } from './src/algorithm/math/ReservoirSampling';
import { divingBoard, respace } from './src/algorithm/math/Memorize'
import pivotIndex from "./src/leetbook/arrayAndString/pivotIndex";
import searchInsert from "./src/leetbook/arrayAndString/searchInsert";


describe('pivotIndex', () => {
  it('case 1', () => {
    expect(pivotIndex([-1,-1,-1,-1,0,1])).to.equal(
      1
    );
  })
  it('case 2', () => {
    expect(pivotIndex([1])).to.equal(
        0
    );
  })
  it('case 3', () => {
    expect(pivotIndex([1,1,1])).to.equal(
        1
    );
  })
  it('case 4', () => {
    expect(pivotIndex([])).to.equal(
        -1
    );
  })
  it('case 5', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).to.equal(
        3
    );
  })
  it('case 6', () => {
    expect(pivotIndex([1, 2, 3])).to.equal(
        -1
    );
  })
  it('case 7', () => {
    expect(pivotIndex([-1,-1,-1,-1,-1,-1])).to.equal(
        -1
    );
  })
  it('case 8', () => {
    expect(pivotIndex([-1,-1,-1,0,1,-1])).to.equal(
        1
    );
  })

});

describe('searchInsert', () => {
  it('case 1', () => {
    expect(searchInsert([1,3,5,6], 5)).to.equal(
        2
    );
  })
  it('case 2', () => {
    expect(searchInsert( [1,3,5,6], 2)).to.equal(
        1
    );
  })
  it('case 3', () => {
    expect(searchInsert([1,3,5,6], 7)).to.equal(
        4
    );
  })
  it('case 4', () => {
    expect(searchInsert([1,3,5,6], 0)).to.equal(
        0
    );
  })
  // it('case 5', () => {
  //   expect(pivotIndex([1, 7, 3, 6, 5, 6])).to.equal(
  //       3
  //   );
  // })
  // it('case 6', () => {
  //   expect(pivotIndex([1, 2, 3])).to.equal(
  //       -1
  //   );
  // })
  // it('case 7', () => {
  //   expect(pivotIndex([-1,-1,-1,-1,-1,-1])).to.equal(
  //       -1
  //   );
  // })
  // it('case 8', () => {
  //   expect(pivotIndex([-1,-1,-1,0,1,-1])).to.equal(
  //       1
  //   );
  // })

});
