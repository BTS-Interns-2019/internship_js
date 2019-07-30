//tests foreach function

test ('6 argumentos', () => {expected (foreach([10,11,23,21,56,98])).toBe(undefined)
})


const foreach = require ('./am_iterators_edgar.js')