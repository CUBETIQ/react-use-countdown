"use strict";
function sumTest() {
    return 1 + 4;
}
test("test sum with 1 + 4 -> 5", function () {
    expect(1 + 4).toBe(5);
});
