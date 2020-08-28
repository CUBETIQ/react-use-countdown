import {sqrt} from "../src"

// Describe : top level to describe a block of test below is for what
describe("Test Sample 2 Function", () => {
    // Test : is run for each test
    test("Test N is Undefined", () => {
        expect(sqrt(undefined)).toBe(undefined) // expect sample(undefined) return undefined
    })

    test("Test N is Null", () => {
        expect(sqrt(null)).toBe(undefined)
    })

    test("Test N is not number",() => {
        expect(sqrt("Hello")).toBe(undefined)
    })

    test("Test Normal Number",() => {
        expect(sqrt(0)).toBe(0)
        expect(sqrt(1)).toBe(1)
        expect(sqrt(4)).toBe(2)
        expect(sqrt(10000)).toBe(100)
    })

})
