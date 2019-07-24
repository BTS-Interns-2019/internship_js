/* Tonto, pero describe la diferencia entre un operador y un operador unario, agregue un ejemplo de ello * /

    /**  Un operador unario garantiza su realizacion pues no pueden ser anulados. Son los siguientes:
     *      - delete (siguiente se denomina a la variable que quiere eliminarse su atributo o valor)
     *      - typeof (retorna el tipo de valor de la variable asignada)
     *      - void   (analiza la variable asignada pero no retorna informacion)
     *      - +      (convierte a numero y lo hace numero positivo)
     *      - -      (convierte a numero y lo hace numero negativo)
     *      - ~      (manejado en bit - binarios, invierte los valores del binario)
     *      - !      (niega la variable asignada)
     *               ejemplo:
     *               var tarea = "Esta es mi tarea de operadores";
     *               typeof tarea // string
     *               var split = tarea.split("") // ["Esta", "es", "mi", "tarea"...]
     *               typeof split // object
     *    De esta manera es que son ejecutados inmediatamente y su valor regresa sin ningun tipo de condicion.
     * 
     *   Los operadores comunes en javascript son los siguientes:
     *      - Operadores de asignacion
     *      - Operadores de comparacion
     *      - Operadores aritmeticos
     *      - Operadores bit a bit 
     *      - Operadores logicos
     *      - Operadores de cadena de caracteres
     *      - Operadores de condicion
     *      - Operadores de coma
     *      - Operadores relacionales
     * 
     *   
     */     

/*  Utilice el operador de taquigrafía para devolver los primeros 15 números de la tabla 
*   de tiempos de 2 ** use la instrucción for.
*/
var tabla2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var result = []
 for(var a = 0; a < 15; a++){ 
   result[a] = (tabla2[a] *= 2)
 }
  console.log(result)

/* Use los operadores de taquigrafía para devolver los primeros 15 números de la secuencia binaria ** use la instrucción for */
 
 for(var a = 0; a < 15; a++){ 
   result[a] = (tabla2[a] *= 2).toString(2)
 }
 console.log(result)

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
   
   
 for(var a = 0, b = 9; a <= 9; a++, b--){        
   console.log(a, b, a, b )
 }


// Comparison operators

/* list all the js falsy values */

//      0
//      false
//      ""
//      null
//      undefined
//      NaN

   /* Draw a diagonal in the matrix use while and the comparison operators */
/* Initial */ 
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


console.log("---------Number diagonal: ")
let xx = 0; 
while(xx < matrix.length){
    let line = matrix[xx]
    let y = 0; 
    while(y < line.length){
        if(line[y] == xx+1){
            line[y] = y+1
        }else{
            line[y] = 0
        }
        y++
    }
    xx++
}
console.log(matrix)

console.log("---------Delete diagonal: ")

let x = 0;
while(x < matrix.length){
  let line = matrix[x]
  delete line[x]
  x++
}
console.log(matrix)

console.log("------------Verifing deleted")

let x1 = 0;
while(x1 < matrix.length){
  let line = matrix[x1]
  delete line[x1]
  console.log("row 0, check index 0: " + (x1 in matrix[x1]));
  x1++
}

// <------con for porque asi me salio primero------>
// for(let x = 0; x < matrix.length; x++){
//     let line = matrix[x]
//     for(let y = 0; y < line.length; y++){
//         if(line[y] == x+1){
//             delete line[y]
//         }else{
//             line[y] = 0
//         }
//     }
// }
// console.log(matrix)


// Arithmetic operators

/* Divide 3 numbers by 0 */
console.log("---------Divide 3 numbers by 0")
console.log(2 / 0)
console.log(-2 / 0)
console.log(2 % 0)




// miscellanea

/* print all the numbers from 0 to 100 that when divided by 5 have a reminder greater or equal to 2 but lesser than 4 */

console.log("--------------Numbers from 0 - 100...")
let num = 0
while(num <= 100){
    if(num % 5 >= 2 && num % 5 < 4){
      console.log("My number: " + num);
    } 
        num++
}

