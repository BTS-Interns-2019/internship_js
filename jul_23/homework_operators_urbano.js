//un operador es un caracter que solo permita un operando, mientras que 
//el operador normal permiote dos operadores
//unario
-"25"; //unario
25 + 2; //operador normal

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < numbers.length; i++) {
    console.log("2 x"+numbers[i]+"= "+(numbers[i]*=2));  

}
let concat= 1;
for (let i = 0; i <= 15; i++) {

    if(i<2){
        console.log(i)
    }else{
        console.log(concat= concat*=2);
    }  
}

for (let i = 0, j = 9; i < 10; i++ , j--) {
    console.log(i,j,i,j)
}



/*Comparision operands*/
// falsy values
// false;
// 0,
// ''
// " "
// null
// undefined
// NaN


let matrix = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

let counter1 = 0;
let counter2 = 8;
console.log();
while (counter1 < 9) {
    let counter3 = 0;
    console.log(`matrix[${counter1}][${counter2}] =`+matrix[counter1][counter2]);

    while (counter3 < 9) {
        if(counter1 != counter3){
            matrix[counter1][counter3]= 0;
        console.log(`matrix[${counter1}][${counter3}] =` + matrix[counter1][counter3]);

        }else{
            console.log(counter1,counter3);
            matrix[counter1][counter3]=counter1+1;
            console.log(`matrix[${counter1}][${counter3}] =`+matrix[counter1][counter3]);
        }
        
        counter3++;
    }

    
    counter1++;
    counter2--;
}

//
5/0;
3/0;
8/0;
//
//Borrando diagonal
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
       console.log( delete matrix[i][j]);
        
    }
    
}
delete 5 in matrix;
//Revisando Matriz
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        console.log(matrix[i][j] in matrix);
        
    }
    
}
//
let reminder=0;
for (let i = 0; i <= 100; i++) {
reminder = i;
    if(reminder%5>=2 && reminder%5 <4){
        console.log(reminder);
    }
    
}





