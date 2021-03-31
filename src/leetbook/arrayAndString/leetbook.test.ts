import { describe, it } from "mocha";
import { expect } from "chai";
import pivotIndex from "./pivotIndex";
import searchInsert from "./searchInsert";
import {rotate} from "./rotate";
import {setZeroes} from "./setZeros";
import {reverseString} from "./reverseString";
import {arrayPairSum} from "./arrayPairSum";
import {binarySearch, twoSum} from "./twoSum";


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


describe('reverseString', () => {
    it('case 1', () => {
        let s = ["h","e","l","l","o"]
        reverseString(s)
        expect(s.join('')).to.equal(
            "olleh"
        );
    })
    it('case 2', () => {
        let s = ["a","e","l","l","o"]
        reverseString(s)
        expect(s.join('')).to.equal(
            "ollea"
        );
    })
});

describe('arrayPairSum', () => {
    it('case 1', () => {
        let nums = [1,4,3,2]
        expect(arrayPairSum(nums)).to.equal(
            4
        );
    })
    it('case 2', () => {
        let nums = [6,2,6,5,1,2]
        expect(arrayPairSum(nums)).to.equal(
            9
        );
    })
});

describe('twoSum', () => {
    it('case 1', () => {
        expect(twoSum([2,7,11,15], 9).toString()).to.equal(
            "1,2"
        );
    })
    it('case 2', () => {
        expect(twoSum([2,3,4], 6).toString()).to.equal(
            "1,3"
        );
    })
    it('case 3', () => {
        expect(twoSum([-1,0], -1).toString()).to.equal(
            "1,2"
        );
    })
    it('case 5', () => {
        expect(twoSum([5,25,75], 100).toString()).to.equal(
            "2,3"
        );
    })
});


describe('binarySearch', () => {
    it('case 1', () => {
        expect(binarySearch([2,7,11,15], 11)).to.equal(
            2
        );
    })
    it('case 2', () => {
        expect(binarySearch([2,3,4], 6)).to.equal(
            -1
        );
    })
    it('case 3', () => {
        expect(binarySearch([-1,0], -1)).to.equal(
            0
        );
    })
});
