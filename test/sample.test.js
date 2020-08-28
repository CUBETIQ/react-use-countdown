import {power} from "../src"

// Describe : top level to describe a block of test below is for what
describe("Test Sample Function", () => {
    // Test : is run for each test
    test("Test N is Undefined", () => {
        expect(power(undefined)).toBe(undefined) // expect sample(undefined) return undefined
    })

    test("Test N is Null", () => {
        expect(power(null)).toBe(undefined)
    })

    test("Test N is not number",() => {
        expect(power("Hello")).toBe(undefined)
    })

    test("Test Normal Number",() => {
        expect(power(0)).toBe(0)
        expect(power(1)).toBe(1)
        expect(power(2)).toBe(4)
        expect(power(100)).toBe(10000)
    })

})
