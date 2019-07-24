
/* Silly but describe the difference between operator and an unary operator add an example of it */
// Un operador es cuando se valuan dos o más valors y operador unuario solamente es un valor.
// operator 5 <= 10 // true
// unary operator 6 ++ // 7

// Assignment operators
// a = b // b
// 5 += 5 // 10
// 5 -= 3 // 2
// 5 *= 3 // 15
// 5 /= 3 // 1.66666

/* Use the Shorthand operator to return the first 15 numbers of the Times Table of 2 **use the for statement */
for(var i = 0; i < 15; i++){
    var res = i;
    console.log( res *= 2);
}


/* Use the Shorthand operators to return the first 15 numbers of the binary sequence **use the for statement */
var x = 1;
for (let i = 0; i < 15; i++) {
    if(i == 0 || i == 1){
        console.log(i);
    }else {
        console.log(x *= 2);
    }    
}

/* Use for and comma operator to print 4 lines of numbers from 0 to 9 but in opposite directions */
/* expected */
// 0 9 0 9
// 1 8 1 8
// 2 7 2 7
// 3 6 3 6
// 4 5 4 5
// 5 4 5 4
// 6 3 6 3
// 7 2 7 2
// 8 1 8 1
// 9 0 9 0

/*  */

for(var i = 0, x = 9; x > 0; i++, x--){
    console.log(i,x,i,x);
}

// Comparison operators

/* list all the js falsy values */
// NaN
// false
// 0
// ''
// ""
// ``
// undefined
// null
// []

/* Draw a diagonal in the matrix use while and the comparison operators */
/* Initial */ var matrix = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9]
];

i = 0;
while (i < 9) {
    columna = matrix[i];
    x = 0;
    while(x < 9){
        if(columna[x] == columna[i]){
            x++;
            continue;
        }
        columna[x] = 0;
        x++
    }
    i++;
    x = 0;
    console.log(columna);
}

/* Expected */ var matrix = [
    [1,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,0,0,0],
    [0,0,0,4,0,0,0,0,0],
    [0,0,0,0,5,0,0,0,0],
    [0,0,0,0,0,6,0,0,0],
    [0,0,0,0,0,0,7,0,0],
    [0,0,0,0,0,0,0,8,0],
    [0,0,0,0,0,0,0,0,9]
]

// Arithmetic operators

/* Divide 3 numbers by 0 */
console.log(5/0);
console.log(15/0);
console.log(1000/0);

// Relational operators
/* use delete to remove the diagonal from the matrix */

/* Expected */ var matrix = [
    [1,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,0,0,0],
    [0,0,0,4,0,0,0,0,0],
    [0,0,0,0,5,0,0,0,0],
    [0,0,0,0,0,6,0,0,0],
    [0,0,0,0,0,0,7,0,0],
    [0,0,0,0,0,0,0,8,0],
    [0,0,0,0,0,0,0,0,9]
]
i = 0;
while (i < 9) {
    columna = matrix[i];
    x = 0;
    while(x < 9){
        if(columna[x] == columna[i]){
            delete columna[x];
            x++;
          continue;  
        }
        columna[x] = 0;
        x++
    }
    i++;
    x = 0;
    console.log(columna);
}

/* after delete Use in to check if the following index are present in the inner arrays */
/* check here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Relational_operators */
i = 0;
while (i < 9) {
    columna = matrix[i];
    x = 0;
    while(x < 9){
        if(columna[x] == columna[i]){
            console.log(columna[x] in matrix);
            x++;
          continue;       
        }
        columna[x] = 0;
        x++
    }
    i++;
    x = 0;
}

/* -- row 0, check index 0 */
/* -- row 1, check index 1 */
/* -- row 2, check index 2 */
/* -- row 3, check index 3 */
/* -- row 4, check index 4 */
/* -- row 5, check index 5 */
/* -- row 6, check index 6 */
/* -- row 7, check index 7 */
/* -- row 8, check index 8 */


// miscellanea

/* print all the numbers from 0 to 100 that when divided by 5 have a reminder greater or equal to 2 but lesser than 4 */
for(var i = 0; i < 100; i++){
    if(i % 5 >= 2 && i % 5 < 3)
    console.log(i);
}

