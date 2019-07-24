/* Un operador requere de dos operandos y un operador unario solo requere un operando */
let x=0; //operador
x++; //operador unario

// Assignment operators

/* Use the Shorthand operator to return the first 15 numbers of the Times Table of 2 **use the for statement */
function tabla2(){
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    for (let i = 0; i < 15; i++) {
        arr[i]*=2;
    }
    return arr;
}
//console.log(tabla2);


/* Use the Shorthand operators to return the first 15 numbers of the binary sequence **use the for statement */
function binarySequence(){
    arr=[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
    for (let j = 0; j <15;  j++) {
        arr[j]**=j;
    }
    return arr;
}
//console.log(binarySequence());


/* Use for and comma operator to print 4 lines of numbers from 0 to 9 but in opposite directions */
for(let i=0, j=9, k=0, l=9, m=0, n=9, o=0, p=9; i<10; i++, j--, k++, l--, m++, n--, o++, p--){
     //console.log(i,j,k,l,m,n,o,p);
}
// Comparison operators

/* list all the js falsy values */
// false
// null
// undefined
// 0
// NaN
// ''
// ""
// (document.all)    **solo para internet explorer

/* Draw a diagonal in the matrix use while and the comparison operators */
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
];
let i=0, j=0;
while(i<9){
    while(j<9){
        if(i!=j)
            matrix[i][j]=0;
        j++;
    }
    i++;
    j=0;
}
//console.log(matrix);

// Arithmetic operators

/* Divide 3 numbers by 0 */
let byZero0=345/0, byZero1=-345/0, byZero2=0/0;
//console.log(byZero0,byZero1,byZero2);

// Relational operators
/* use delete to remove the diagonal from the matrix */
for(let i=0; i<9; i++){
    for (let j = 0; j < 9; j++) {
        if(matrix[i][j]!=0) delete(matrix[i][j]);        
    }
}

/* after delete Use "in" to check if the following index are present in the inner arrays */
/* check here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Relational_operators */
for(let i=0; i<9; i++){
    console.log(i in matrix[i]);/*
    for (let j = 0; j < 9; j++) {
        if(matrix[i][j]!=0) delete(matrix[i][j]);
        
    }*/
}

//matrix[0] 
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
for(let i=0; i<=100; i++){
    if(i%5>=2 && i%5<4)console.log(i);    
}
