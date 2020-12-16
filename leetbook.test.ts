import { describe, it } from "mocha";
import { expect } from "chai";
import { findRepeatNumber } from "./src/offer/3";
import { ListNode, Solution } from './src/algorithm/math/ReservoirSampling';
import { divingBoard, respace } from './src/algorithm/math/Memorize'
import pivotIndex from "./src/leetbook/arrayAndString/pivotIndex";
import searchInsert from "./src/leetbook/arrayAndString/searchInsert";
import {rotate} from "./src/leetbook/arrayAndString/rotate";
import {setZeroes} from "./src/leetbook/arrayAndString/setZeros";


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


describe('rotate', () => {
  it('case 1', () => {
    const matrix =
        [
          [ 5, 1, 9,11],
          [ 2, 4, 8,10],
          [13, 3, 6, 7],
          [15,14,12,16]
        ]
    rotate(matrix)
    expect(matrix.toString()).to.equal(
        "15,13,2,5,14,3,4,1,12,6,8,9,16,7,10,11"
    );
  })
  it('case 2', () => {
    const matrix =
        [
          [ 5, 1, 9,11],
          [ 2, 4, 8,10],
          [13, 3, 6, 7],
          [15,14,12,16]
        ]
    rotate(matrix)
    expect(matrix.toString()).to.equal(
        "15,13,2,5,14,3,4,1,12,6,8,9,16,7,10,11"
    );
  })
});

describe('setZeros', () => {
  it('case 1', () => {
    const matrix =
        [
          [1,1,1],
          [1,0,1],
          [1,1,1]
        ]
    setZeroes(matrix)
    expect(matrix.toString()).to.equal(
        "1,0,1,0,0,0,1,0,1"
    );
  })
  it('case 2', () => {
    const matrix =
        [
          [0,1,2,0],
          [3,4,5,2],
          [1,3,1,5]
        ]
    setZeroes(matrix)
    expect(matrix.toString()).to.equal(
        "0,0,0,0,0,4,5,0,0,3,1,0"
    );
  })
});