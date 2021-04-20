import { describe, it } from "mocha";
import { expect } from "chai";
import {MyLinkedList} from "./MyLinkedList";

import {reverseList} from "./reverseList";
import {createLinkedList, linkedListToArray} from "./common";
import {removeElements} from "./removeElements";
import {oddEvenList} from "./oddEvenList";
import {isPalindrome, isPalindrome2} from "./isPalindrome";
import {mergeTwoLists} from "./mergeTwoLists";
import {addTwoNumbers} from "./addTwoNumbers";
import {copyRandomList} from "./copyRandomList";
import {rotateRight} from "./rotateRight";


describe("MyLinkedList", () => {
  it("case 1", () => {
    let l = new MyLinkedList()
    l.addAtHead(1)
    l.addAtTail(3)
    l.addAtIndex(1,2)
    expect(l.get(1)).to.equal(2)
  })

  it("case 2", () => {
    let l = new MyLinkedList()
    l.addAtHead(1)
    l.addAtTail(3)
    l.addAtIndex(1,2)
    l.deleteAtIndex(1)
    expect(l.get(1)).to.equal(3)
  })
  it("case 3", () => {
    let l = new MyLinkedList()
    l.addAtHead(1)
    l.addAtTail(3)
    l.addAtIndex(1,2)
    l.deleteAtIndex(0)
    expect(l.get(0)).to.equal(2)
  })
  it("case 4", () => {
    let l = new MyLinkedList()
    l.addAtIndex(0,10)
    l.addAtIndex(0,20)
    l.addAtIndex(1,30)
    expect(l.get(0)).to.equal(20)
  })
})


describe("reverse link list", () => {
  it("case1", () => {
    let r = createLinkedList([1,2,3,4,5])
    expect(linkedListToArray(reverseList(r)).toString()).to.equal(
      "5,4,3,2,1"
    )
  })
})


describe("remove val in linked list", () => {
  it("case1", () => {
    let r = createLinkedList([1,2,3,4,5])
    expect(linkedListToArray(removeElements(r, 2)).toString()).to.equal(
      "1,3,4,5"
    )
  })
  it("case2", () => {
    let r = createLinkedList([1,2,3,4,5,1])
    expect(linkedListToArray(removeElements(r, 1)).toString()).to.equal(
      "2,3,4,5"
    )
  })
  it("case3", () => {
    let r = createLinkedList([1,2,2,1])
    expect(linkedListToArray(removeElements(r, 2)).toString()).to.equal(
      "1,1"
    )
  })
})

describe('oddEvenList', () => {
  it('case 1', () => {
    let r = createLinkedList([1,2,3,4,5])
    expect(linkedListToArray(oddEvenList(r)).toString()).to.equal(
      "1,3,5,2,4"
    )
  })
})

describe('isPalindrome', () => {
  it('case 1', () => {
    let r = createLinkedList([1,2,3,4,5])
    expect(isPalindrome(r)).to.equal(
      false
    )
  })
  it('case 2', () => {
    let r = createLinkedList([])
    expect(isPalindrome(r)).to.equal(
      true
    )
  })
  it('case 3', () => {
    let r = createLinkedList([1,1])
    expect(isPalindrome(r)).to.equal(
      true
    )
  })
})

describe('isPalindrome2', () => {
  it('case 1', () => {
    let r = createLinkedList([1,2,3,4,5])
    expect(isPalindrome2(r)).to.equal(
      false
    )
  })
  it('case 2', () => {
    let r = createLinkedList([])
    expect(isPalindrome2(r)).to.equal(
      true
    )
  })
  it('case 3', () => {
    let r = createLinkedList([1,1])
    expect(isPalindrome2(r)).to.equal(
      true
    )
  })
})

describe('mergeTwoLists', () => {
  it('case 1', () => {
    let r = createLinkedList([1,2])
    let j = createLinkedList([1,2])
    expect(linkedListToArray(mergeTwoLists(r, j)).toString()).to.equal(
      "1,1,2,2"
    )
  })
  it('case 2', () => {
    let r = createLinkedList([])
    let j = createLinkedList([1,2,3,4,5])
    expect(linkedListToArray(mergeTwoLists(r, j)).toString()).to.equal(
      "1,2,3,4,5"
    )
  })
  it('case 3', () => {
    let r = createLinkedList([1,2])
    let j = createLinkedList([3,4])
    expect(linkedListToArray(mergeTwoLists(r, j)).toString()).to.equal(
      "1,2,3,4"
    )
  })
})

describe('addTwoNumbers', () => {
  it('case 1', () => {
    let r = createLinkedList([1,2])
    let j = createLinkedList([1,2])
    expect(linkedListToArray(addTwoNumbers(r, j)).toString()).to.equal(
      "2,4"
    )
  })
  it('case 2', () => {
    let r = createLinkedList([])
    let j = createLinkedList([1,2,3,4,5])
    expect(linkedListToArray(addTwoNumbers(r, j)).toString()).to.equal(
      "1,2,3,4,5"
    )
  })
  it('case 3', () => {
    let r = createLinkedList([1,2])
    let j = createLinkedList([3,4])
    expect(linkedListToArray(addTwoNumbers(r, j)).toString()).to.equal(
      "4,6"
    )
  })
  it('case 4', () => {
    let r = createLinkedList([9,9,9,9,9,9,9])
    let j = createLinkedList([9,9,9,9])
    expect(linkedListToArray(addTwoNumbers(r, j)).toString()).to.equal(
      "8,9,9,9,0,0,0,1"
    )
  })
})


describe('copyRandomList', () => {
  it('case 1', () => {
    let r = createLinkedList([2,4])
    expect(linkedListToArray(copyRandomList(r)).toString()).to.equal(
      "2,4"
    )
  })
  it('case 2', () => {
    let r = createLinkedList([1,2])
    expect(linkedListToArray(copyRandomList(r)).toString()).to.equal(
      "1,2"
    )
  })
})


describe('rotateRight', () => {
  it('case 1', () => {
    let r = createLinkedList([2,4])
    expect(linkedListToArray(rotateRight(r,1)).toString()).to.equal(
      "4,2"
    )
  })
  it('case 2', () => {
    let r = createLinkedList([1,2,3,4,5])
    expect(linkedListToArray(rotateRight(r, 2)).toString()).to.equal(
      "4,5,1,2,3"
    )
  })
  it('case 3', () => {
    let r = createLinkedList([2,4])
    expect(linkedListToArray(rotateRight(r,0)).toString()).to.equal(
      "2,4"
    )
  })
})
