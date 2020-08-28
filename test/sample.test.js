import {sample} from "../src"

// Describe : top level to describe a block of test below is for what
describe("Test Sample Function", () => {
    // Test : is run for each test
    test("Test N is Undefined", () => {
        expect(sample(undefined)).toBe(undefined) // expect sample(undefined) return undefined
    })

    test("Test N is Null", () => {
        expect(sample(null)).toBe(undefined)
    })

    test("Test N is not number",() => {
        expect(sample("Hello")).toBe(undefined)
    })

    test("Test Normal Number",() => {
        expect(sample(0)).toBe(0)
        expect(sample(1)).toBe(1)
        expect(sample(2)).toBe(4)
        expect(sample(100)).toBe(10000)
    })

})
