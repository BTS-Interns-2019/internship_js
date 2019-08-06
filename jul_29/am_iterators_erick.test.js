const {
    forEach,
    map,
    filter,
    reduce,
    reduceRight
} = require("./am_iterators_erick")
/**---------------- forEach -------------------- */
test("Testing forEach", function(){
    expect(forEach((val, ind, array) => {val = array.length}, [1,2,3,4,5])).toBe(undefined)
});

test("Testing forEach", function(){
    expect(forEach((val, ind, array) => {val * 75}, [1,2,3,4,5])).toBe(undefined)
});

test("Testing forEach", function(){
    expect(forEach((val, ind, array) => {val + val}, ["h","o","l","a"])).toBe(undefined)
});

/** --------------------- map ----------------------------- */


test("Testing map", function(){
    expect(map((val, ind, arr)=> val = arr.length, [1,2,3,4,5])).toStrictEqual([ 5, 5, 5, 5, 5 ])
});

test("Testing map", function(){
    expect(map((val, ind, arr)=> val = "A", [1,2,3,4,5])).toStrictEqual([ 'A', 'A', 'A', 'A', 'A' ])
});

test("Testing map", function(){
    expect(map((val, ind, arr)=> val.toUpperCase(), ["h","o","l","a"])).toStrictEqual([ 'H', 'O', 'L', 'A' ])
});

/** ----------------------- Test filter -------------------------------------- */

test("Testing filter", function(){
    expect(filter((val, ind) => {return val % 2 !== 0}, [1,2,3,4,5,6])).toStrictEqual([ 1, 3, 5 ])
});

test("Testing filter", function(){
    expect(filter((val, ind) => {return val % 2 === 0}, [1,2,3,4,5,6])).toStrictEqual([ 2, 4, 6 ])
});

test("Testing filter", function(){
    expect(filter((val, ind) => {return val > 3}, [1,2,3,4,5,6])).toStrictEqual([ 4, 5, 6 ])
});

/** ----------------- Test reduce ------------------------ */

test("Testing reduce", function(){
    expect(reduce((a,b) => a + b, [1, 2, 3], 0)).toBe(6)
});
test("Testing reduce", function(){
    expect(reduce((a,b) => a - b, [1, 2, 3], 15)).toBe(-5)
});
test("Testing reduce", function(){
    expect(reduce((a,b) => (a ** b)/2, [1, 2])).toBe(0.125)
});

/** ---------------- Test reduceRight -------------------- */

test("Testing reduceRight", function(){
    expect(reduceRight((a,b) => a + b, [1, 2, 3])).toBe(9)
});
test("Testing reduceRight", function(){
    expect(reduceRight((a,b) => a + b, [72, "a", 85])).toBe("170a72")
});
test("Testing reduceRight", function(){
    expect(reduceRight((a,b) => a * b, [1,2,3,4,5])).toBe(600)
});

