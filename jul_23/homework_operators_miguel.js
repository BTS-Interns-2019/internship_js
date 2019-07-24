/* La diferencia entre operador y operador unario es que los operadores se componen de una operando, un operador y otro operando
y el operador unario solo se compone de un operando y un operador */
var a = 1;
var b = 2;
var binario = a + b;//Operador
var unario = a++;//Unario

/* Use the Shorthand operator to return the first 15 numbers of the Times Table of 2 **use the for statement */

for(let i=1;i<16;i++)console.log(`2 * ${i} = ${(2 * i)}`);

/* Use the Shorthand operators to return the first 15 numbers of the binary sequence **use the for statement */

for(let i=1;i<16;i++)console.log(`${i} = ${i.toString(2)}`);

/* Use for and comma operator to print 4 lines of numbers from 0 to 9 but in opposite directions */
/* expected 
0 9 0 9
1 8 1 8
2 7 2 7
3 6 3 6
4 5 4 5
5 4 5 4
6 3 6 3
7 2 7 2
8 1 8 1
9 0 9 0*/

for(let i=0, j=9;i<10, j>-1;i++, j--)console.log(`${i} ${j} ${i} ${j}`);

/* list all the js falsy values 
false
null
undefined
0
NaN
''
""
(document.all) [1]
*/

/* Draw a diagonal in the matrix use while and the comparison operators */
/* Initial 
let matrix = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9]
];*/ 
/* Expected 
let matrix = [
    [1,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,0,0,0],
    [0,0,0,4,0,0,0,0,0],
    [0,0,0,0,5,0,0,0,0],
    [0,0,0,0,0,6,0,0,0],
    [0,0,0,0,0,0,7,0,0],
    [0,0,0,0,0,0,0,8,0],
    [0,0,0,0,0,0,0,0,9]
]*/ 
let matrix = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
];

for(let i=0, key=1, b=0;i<matrix.length;i++){
    for(let j=0;j<matrix.length;j++){
        if(matrix[i][j]==key){
            b = 1;
        }else{
            matrix[i][j] = 0;
        }
    }
    if(b==1){
        b = 0;
        key++;
    }
}

// Arithmetic operators

/* Divide 3 numbers by 0 */

var n1 = 5;
const n2 = 12;
let n3 = 9;
//Todas retornan infinity
n1/0;
n2/0;
n3/0;

// Relational operators
/* use delete to remove the diagonal from the matrix */

/* Expected 
let matrix = [
    [1,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,0,0,0],
    [0,0,0,4,0,0,0,0,0],
    [0,0,0,0,5,0,0,0,0],
    [0,0,0,0,0,6,0,0,0],
    [0,0,0,0,0,0,7,0,0],
    [0,0,0,0,0,0,0,8,0],
    [0,0,0,0,0,0,0,0,9]
]*/ 
for(let i=0, key=1, b=0;i<matrix.length;i++){
    for(let j=0;j<matrix.length;j++){
        if(matrix[i][j]!==0){
            delete matrix[i][j];
        }
    }
}

/* after delete Use in to check if the following index are present in the inner arrays */
/* check here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Relational_operators */

/* -- row 0, check index 0 */
/* -- row 1, check index 1 */
/* -- row 2, check index 2 */
/* -- row 3, check index 3 */
/* -- row 4, check index 4 */
/* -- row 5, check index 5 */
/* -- row 6, check index 6 */
/* -- row 7, check index 7 */
/* -- row 8, check index 8 */

for(let i=0, key=0, b=0;i<matrix.length;i++,key++){
    for(let j=0;j<matrix.length;j++){
        if(matrix[i][j]===matrix[key][key]){
            console.log(`matrix [${i}][${j}] = ${matrix[i][j]}`);
        }
    }
}

// miscellanea

/* print all the numbers from 0 to 100 that when divided by 5 have a reminder greater or equal to 2 but lesser than 4 */
for(let i=0;i<=100;i++){
    let res =i%5;
    if(res>=2 && res<4){
        console.log(i);
    }
}