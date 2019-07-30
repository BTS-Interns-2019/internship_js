const {
    login,
    onlyEven,
    google,
    evenIndex
} = require("./cp_exercices_erick")

/**------------- Testing login ---------------- */
test("Verify test", function(){
    expect(login("pifas", "tomatonto")).toBe(true)
});

test("Verify test", function(){
    expect(login("la china", "barrio666")).toBe(true)
});

test("Verify test", function(){
    expect(login("Gandalff", "youShallnotpass")).toBe(false)
});

/** ------------- Testing onlyEven -------------- */

test("Verify only Even numbers in", function(){
    expect(onlyEven([2,4,6,8,10])).toStrictEqual([2,4,6,8,10])
})

test("Verify only Even numbers in", function(){
    expect(onlyEven([1,5,2,9,5,5,9,2,9,5,6,2])).toStrictEqual(false)
})

test("Verify only Even numbers in", function(){
    expect(onlyEven([1,3,5,6,7,9,10])).toStrictEqual(false)
})

/**--------------- Testing google ------------------------ */

test("Taking index description", function(){
    expect(google("forEach")).toStrictEqual(
        { name: 'forEach',
  description: 'Travels all items in an array object',
  params:
   [ { name: 'currentValue', description: 'value iterated' },
     { name: 'index', description: 'current index' },
     { name: 'Array', description: 'reference of array' } ],
  returning: undefined }
    )
});

test("Taking index description", function(){
    expect(google("find")).toStrictEqual(
        { name: 'find',
  description: 'Return first element that matches',
  params:
   [ { name: 'currentValue', description: 'value iterated' },
     { name: 'index', description: 'current index' },
     { name: 'Array', description: 'reference of array' } ],
  returning: 'Value' }
    )
})

test("Taking index description", function(){
    expect(google("some")).toStrictEqual(
        { name: 'some',
  description: 'Return true if any element matches condition',
  params:
   [ { name: 'currentValue', description: 'value iterated' },
     { name: 'index', description: 'current index' },
     { name: 'Array', description: 'reference of array' } ],
  returning: 'Boolean' }

    )
})

/**-----------------Testing evenIndex --------------------- */

test("Array of Even Indexes", function(){
    expect(evenIndex([1,2,3,4,5,6,7,8,9,10])).toStrictEqual([ 1, 3, 5, 7, 9 ])
})
test("Array of Even Indexes", function(){
    expect(evenIndex([1,7,6,5,4,3,4,5,6,7,8,7,6,5,4,3])).toStrictEqual([ 2, 4, 6, 8, 10, 12, 14 ])
})
test("Array of Even Indexes", function(){
    expect(evenIndex([3,4,5,6,7,8,9,0,0,8,7,5,4,3,2,4,5,6,7,8,9])).toStrictEqual([ 1, 3, 5, 7, 8, 9, 12, 14, 15, 17, 19 ])
})


