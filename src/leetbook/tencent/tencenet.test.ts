import { describe, it } from "mocha";
import { expect } from "chai";
import {twoSum} from "./twoSum";
import {findMedianSortedArrays} from "./findMedianSortedArrays";
import {longestPalindrome} from "./longestPalindrome";


describe('twoSum', () => {
  it('case 1', () => {
    expect(twoSum([2,7,11,15], 9).toString()).to.equal(
      "0,1"
    );
  })
  it('case 2', () => {
    expect(twoSum([3,2,4], 6).toString()).to.equal(
        "1,2"
    );
  })
  it('case 3', () => {
    expect(twoSum([0,4,3,0], 0).toString()).to.equal(
      "0,3"
    );
  })

});

describe('findMedianSortedArrays', () => {
  it('case 1', () => {
    expect(findMedianSortedArrays([1,3], [2])).to.equal(
      2
    );
  })
  it('case 2', () => {
    expect(findMedianSortedArrays([1,2], [3,4])).to.equal(
      2.5
    );
  })
  it('case 3', () => {
    expect(findMedianSortedArrays([0,0], [0,0])).to.equal(
      0
    );
  })
  it('case 4', () => {
    expect(findMedianSortedArrays([], [2,3])).to.equal(
      2.5
    );
  })

});


describe('longestPalindrome', () => {
  it('case 1', () => {
    expect(["bab", "aba"].includes(longestPalindrome("babad"))).to.equal(
      true
    );
  })
  it('case 2', () => {
    expect(longestPalindrome("cbbd")).to.equal(
      "bb"
    );
  })
  it('case 3', () => {
    expect(longestPalindrome("a")).to.equal(
      "a"
    );
  })
  it('case 4', () => {
    expect(["a", "c"].includes(longestPalindrome("ac"))).to.equal(
      true
    );
  })
  it('case 5', () => {
    expect(longestPalindrome("aacabdkacaa")).to.equal(
      "aca"
    );
  })

});
