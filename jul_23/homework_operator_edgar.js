//diferencia entre operadores y operadores unitarios
/*los operadores nos permiten manipular el valor de las variables, al igual que los operadores
unitarios, la diferencia radica que los primeros se debe hacer una asignacion e interactuar un par de variables,
 mientras que con los unitariossolo requieren de un operando para funcionar */
 
 //Assigment operators

 //return 15 first products of the time table 2
 table2 (2)
 function table2 (num){
     mult = 1;
     for (i = 1; i <= 15; i += 1){
         j = i;
        console.log(j *= num);
     }
 }

 // return 15 firts number of the binary sequence
 binary1 (0);
 function binary1 (num){
     for (i = 0; i < 15; i += 1){
        if (i == 0){
            console.log (i);
            num = 1;
            console.log (num);
        }else {
        num *= 2;
        console.log (num);
        }
     }
 }

 //use coma and for to print 4 lines of numbers from 0-9 but in oppsite direcctions
multiline (9);
function multiline (num){
    for (i = 0, j = num; i < 10; i += 1, j -= 1){
        console.log (i,j,i,j)
    }
}

//falsy values
/*false
0 (zero)
'' or " " (empty string)
null
undefined
NaN  */

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
/*
for (var i = 0, j = 0; i < 9; i++, j--){
  console.log('matrix[' + i + '][' + j + '] = ' + matrix[i][j]);
} */

//draw a diagonal in the matrix, use while
var i = 0;
while (i < 9){
    j = 0;
    while (j < 9){
        if (i != j){
          zero = matrix [i][j] = 0;
          console.log ('matrix['+i+']['+j+'] = ' + zero);  
        }else{
    console.log ('matrix['+ i +']['+ j +'] = ' + matrix[i][j]);
        }
    j++;
    }
    i++;
}

//aritmethic operators

// divided 3 numbers by 0

console.log (9/0);
console.log (20/0);
console.log (1000/0);

//use delete to remove the diagonal in the matrix

var i = 0;
while (i < 9){
    j = 0;
    while (j < 9){
        if (i == j){
         console.log(delete matrix [i][j]);
        }
         else{
    console.log ('matrix['+ i +']['+ j +'] = ' + matrix[i][j]);
        }
    j++;
    }
    i++;
}

//use in to check if the following index are present in the array

var i = 0;
while (i < 9){
    j = 0;
    while (j < 9){
        if (i == j){
         console.log(matrix [i][j] in matrix);
        }
        else{
    console.log ('matrix['+ i +']['+ j +'] = ' +matrix[i][j]);
        }
    j++;
    }
    i++;
    }
// miscellanea

//print all the number 0-100 that when divided by 5 reminder greater or equal to 2 but lesser than 4 

    for (i = 0; i <=100; i++){
        res = i % 5;
        if (res >= 2 && res < 4 ){
            console.log (i)
        }
    }




