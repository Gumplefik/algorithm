import { describe, it } from "mocha";
import { expect } from "chai";
import pivotIndex from "./pivotIndex";
import searchInsert from "./searchInsert";
import {rotate} from "./rotate";
import {setZeroes} from "./setZeros";
import {reverseString} from "./reverseString";
import {arrayPairSum} from "./arrayPairSum";
import {binarySearch, twoSum} from "./twoSum";
import {removeElement} from "./removeElement";
import {findMaxConsecutiveOnes} from "./findMaxConsecutiveOnes";
import {minSubArrayLen} from "./minSubArrayLen";
import {generate} from "./generate";
import {getRow} from "./getRow";
import {reverseWords} from "./reverseWords";
import {findMin} from "./findMin";
import {removeDuplicates} from "./removeDuplicates";
import {moveZeroes} from "./moveZeroes";


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

describe('removeElement', () => {
    it('case 1', () => {
        expect(removeElement([2,7,11,15], 11)).to.equal(
            3
        );
    })
    it('case 2', () => {
        expect(removeElement([2,3,4], 6)).to.equal(
            3
        );
    })
    it('case 3', () => {
        expect(removeElement([-1,0], -1)).to.equal(
            1
        );
    })
});

describe('findMaxConsecutiveOnes', () => {
    it('case 1', () => {
        expect(findMaxConsecutiveOnes([1,1,0,1,1,1])).to.equal(
            3
        );
    })
    it('case 2', () => {
        expect(findMaxConsecutiveOnes([])).to.equal(
            0
        );
    })
    it('case 3', () => {
        expect(findMaxConsecutiveOnes([1,0,1])).to.equal(
            1
        );
    })
});

describe('minSubArrayLen', () => {
    it('case 1', () => {
        expect(minSubArrayLen(7, [2,3,1,2,4,3])).to.equal(
            2
        );
    })
    it('case 2', () => {
        expect(minSubArrayLen(4, [1,4,4])).to.equal(
            1
        );
    })
    it('case 3', () => {
        expect(minSubArrayLen(11, [1,1,1,1,1,1,1,1])).to.equal(
            0
        );
    })
    it('case 5', () => {
        expect(minSubArrayLen(11, [1,2,3,4,5])).to.equal(
            3
        );
    })
});

describe('generate', () => {
    it('case 1', () => {
        expect(generate(5).toString()).to.equal(
            "1,1,1,1,2,1,1,3,3,1,1,4,6,4,1"
        );
    })
});

describe('getRow', () => {
    it('case 1', () => {
        expect(getRow(3).toString()).to.equal(
            "1,3,3,1"
        );
    })
    it('case 2', () => {
        expect(getRow(5).toString()).to.equal(
            "1,5,10,10,5,1"
        );
    })
});

describe('reverseWords', () => {
    it('case 1', () => {
        expect(reverseWords("Let's take LeetCode contest")).to.equal(
            "s'teL ekat edoCteeL tsetnoc"
        );
    })
});

describe('findMin', () => {
    it('case 1', () => {
        expect(findMin([3,4,5,1,2])).to.equal(
            1
        );
    })
});

describe('removeDuplicates', () => {
    it('case 1', () => {
        expect(removeDuplicates([1,1,2])).to.equal(
            2
        );
    })
    it('case 2', () => {
        expect(removeDuplicates([1,1,1,1,1,1,2])).to.equal(
            2
        );
    })
    it('case 3', () => {
        expect(removeDuplicates([])).to.equal(
            0
        );
    })
    it('case 4', () => {
        expect(removeDuplicates([1,2])).to.equal(
            2
        );
    })
});


describe('moveZeroes', () => {
    it('case 1', () => {
        let a = [0,1,0,3,12]
        moveZeroes(a)
        expect(a.toString()).to.equal(
            "1,3,12,0,0"
        );
    })
    it('case 2', () => {
        let a = [0,0,0,3,12]
        moveZeroes(a)
        expect(a.toString()).to.equal(
            "3,12,0,0,0"
        );
    })
    it('case 3', () => {
        let a = [0]
        moveZeroes(a)
        expect(a.toString()).to.equal(
            "0"
        );
    })
    it('case 4', () => {
        let a = [4,2,4,0,0,3,0,5,1,0]
        moveZeroes(a)
        expect(a.toString()).to.equal(
            "4,2,4,3,5,1,0,0,0,0"
        );
    })
    it('case 5', () => {
        let a = [1]
        moveZeroes(a)
        expect(a.toString()).to.equal(
            "1"
        );
    })
});
