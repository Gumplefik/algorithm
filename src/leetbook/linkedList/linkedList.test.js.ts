import { describe, it } from "mocha";
import { expect } from "chai";
import {MyLinkedList} from "./MyLinkedList";


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
