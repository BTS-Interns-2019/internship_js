/* function sum (a, b){
return a + b;
}

test ('Suma de 2 + 2', function () {
    expect (sum (2,2)).toBe(4)
})

test ('Suma de 4 + 3', function () {
    expect (sum (4,3)).toBe(7)
})

test ('Suma de 4 + 9', function () {
    expect (sum (4,9)).toBe(13)
})

test ('Suma de 10 + 5', function () {
    expect (sum (10,5)).toBe(15)
}) 

test ('Suma de 100 + 300', function () {
    expect (sum (100,300)).toBe(400)
})

test ('Suma de 1 + 0', function () {
    expect (sum (1,0)).toBe(1)
})

test ('Suma de 6 + 9', function () {
    expect (sum (6,9)).toBe(15)
}) */
/*
let average = averagespeed ();
 console.log (average (100));
 console.log (average (50));
 console.log (average (75));

function averagespeed (){
    let vel = average;
    let prom = 0;
    let i = 0;
    function average (sp){
        i ++;
        return (prom += sp)  / i;
    }
    return vel;
} */

test ('average speed  100', function () {
    let average = averagespeed ();
    expect (average (100)).toBe(100)
    expect (average (50)).toBe(75)
    expect (average (75)).toBe (75)
      
})

test ('average speed  300', function () {
    let average = averagespeed ();
     expect (average (300)).toBe(300)
     expect (average (100)).toBe(200)
    expect (average (500)).toBe (300)
})


test ('average speed  200', function () {
    let average = averagespeed ();
    expect (average (200)).toBe(200)
    expect (average (200)).toBe(200)
    expect (average (200)).toBe (200)
})

test ('average speed  400', function () {
    let average = averagespeed ();
       expect (average (400)).toBe(400)
       expect (average (400)).toBe(400)
    expect (average (100)).toBe (300)
})

test ('average speed  500', function () {
    let average = averagespeed ();
       expect (average (500)).toBe(500)
    expect (average (100)).toBe(300)
    expect (average (0)).toBe (200)    
})

test ('average speed  900', function () {
    let average = averagespeed ();
       expect (average (900)).toBe(900)
       expect (average (100)).toBe(500)
    expect (average (200)).toBe (400)
})

const averagespeed = require ('./functions_ex_edgar.js')