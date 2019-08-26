const sort = require("./mutation-methods_erick")

let originalArr;
let charArr;

beforeEach(() => {
    originalArr = [6, 4, 21, 2]
    charArr = ["M","a","L","r","G","c","I","e","U","o","O"]
})

test("returns an array", () => {
    let result = sort(originalArr);
    expect(Array.isArray(result)).toBe(true)
});

test("returns an array of the same length", () => {
    let result = sort(originalArr);
    expect(result.length.toBe(originalArr.length))
});
/**------------- Test no. 3 ----------- cool */
test("returns the same array", () => {
    let result = sort(originalArr);
    expect(result).toBe(originalArr)
});
/** ------- Test no. 4 ---------- cool */
test("order the array without params", () => {
    let control = originalArr.concat();
    sort(originalArr)
    expect(originalArr).toEqual(control.sort())
});
/** --------Test no. 5 --------- cool */
test("order the array with params", () => {
    let control = originalArr.concat();
    sort(originalArr,  (a, b) => a - b)
    expect(originalArr).toEqual(control.sort())
});
/** ------ Test no. 6 ------- cool */
test("sort chars without parameters", () => {
    let control = charArr.concat()
    sort(charArr)
    expect(charArr).toEqual(control.sort())
})

// test("order chars with parameters"), () => {
//     let control = charArr.concat()
//     sort(charArr, ((a,b) => a.localeCompare(b)))
//     expect(charArr).toEqual(control.sort((a,b) => a.localeCompare(b)))
// }


