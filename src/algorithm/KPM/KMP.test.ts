import { describe, it } from "mocha";
import { expect } from "chai";
import {KMP} from "./KMP";


describe('kmp', () => {
    it('case 1', () => {
        expect(KMP("aaaaaaaaaaaaa", "aaacaaaa")).to.equal(-1)
    })
    it('case 2', () => {
        expect(KMP("", "")).to.equal(0)
    })
    it('case 3', () => {
        expect(KMP("aaaaa", "bba")).to.equal(-1)
    })
    it('case 4', () => {
        expect(KMP("hello", "ll")).to.equal(2)
    })
});

