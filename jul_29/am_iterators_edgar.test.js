//tests foreach function

test ('6 argumentos', () => {
    expect (foreach([10, 11, 23, 21, 56, 98])).toEqual([10,11,23,21,56,98])
})

test ('4 argumentos', () => {
    expect (foreach(["hey",2,5,"lol"])).toEqual(["hey",2,5,"lol"])
})

test ('3 argumentos', () => {
    expect (foreach(["hjj", "cmn", "jdf"])).toEqual(["hjj","cmn","jdf"])
})


//const foreach = require ('./am_iterators_edgar.js')

//test for maps

test ('6 argumentos', () => {
    expect (maps([10,11,23,21,56,98], 2)).toEqual([12,13,25,23,58,100])
})

test ('4 argumentos', () => {
    expect (maps(["hey", 2,5,"lol"], 2)).toEqual(["hey2",4,7,"lol2"])
})

test ('3 argumentos', () => {
    expect (maps(["hjj","cmn","jdf"], 4)).toEqual(["hjj4","cmn4", "jdf4"])
})

//const maps = require ('./am_iterators_edgar.js')

//test for filters

test ('6 argumentos', () => {
    expect (filters([2,11,2,21,2,98], 2)).toEqual([])
})

test ('4  argumentos', () => {
    expect (filters(["hey", 2, 5, "lol"], 2)).toEqual([2])
})

test ('3 argumentos', () => {
    expect (filters(["hjj","cmn","jdf"], "hjj")).toEqual(["hjj"])
})

//const filters = require ('./am_iterators_edgar.js')

//test reduce

test ('6 argumentos', () => {
    expect (reduces([2,11,2,21,2,98], 0)).toEqual(136)
})

test ('4  argumentos', () => {
    expect (reduces(["hey", 2, 5, "lol"], 2)).toEqual("2hey25lol")
})

test ('3 argumentos', () => {
    expect (reduces(["hjj","cmn","jdf"], "hjj")).toEqual("hjjhjjcmnjdf")
})

//const reduces = require ('./am_iterators_edgar.js')


//test reduce right

test ('6 argumentos', () => {
    expect (reducesright([2,11,2,21,2,98], 0)).toEqual(136)
})

test ('4  argumentos', () => {
    expect (reducesright(["hey", 2, 5, "lol"], 2)).toEqual("2lol52hey")
})

test ('3 argumentos', () => {
    expect (reducesright(["hjj","cmn","jdf"], "hjj")).toEqual("hjjjdfcmnhjj")
})

const {
    foreach,
    maps,
    filters,
    reduces,
    reducesright } = require ('./am_iterators_edgar.js')