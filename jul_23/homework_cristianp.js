/*diferencia entre un operador y un operador unario, agregue un ejemplo de ello */
/*Que el operado unario hace operaciones con un solo operador//*/

/*Use the Shorthand operator to return the first 15 numbers of the Times Table of 2 **use the for statement //*/
/*for(var i = 1; i<=15; i++)
{
    var s=i;
    console.log(s*=2);
}//*/


/* Use the Shorthand operators to return the first 15 numbers of the binary sequence **use the for statement */
var s=1;
/*for(var i = 2; i<=30; i+2)
{
    if(s>32768)
        break;
    s*=i;
    console.log(s);
}//*/

/* Use for and comma operator to print 4 lines of numbers from 0 to 9 but in opposite directions */
for(var i=0,o=9;i<=9;i++,o--)
{
    console.log(i + " " + o + " " + i + " " + o);
}

/* list all the js falsy values */
/*false
''
""
0
undefined
[]
null
{}
//*/
let matrix = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9] ];

var i=0;
while(i<9)
{
    var j=0;
    //console.log(matrix[i][j]);
    while(j<9)
    {
        if(matrix[i][j] != i+1)
        {
            matrix[i][j] = 0;
        }
        j++;
    }
    i++;
}

for(var i=0; i<9;i++)
{
    for(var j = 0; j<9;j++)
    {
        console.log(matrix[i][j]);
    }
}
/*for(var l=0;l<=9;l++){
    if(matrix[i][j] != i)
    {
        matrix[i][j] = 0;
    }
}*/

console.log(15/0);
console.log(50/0);
console.log(6/0);


//
var matriz = [
    [1,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,0,0,0],
    [0,0,0,4,0,0,0,0,0],
    [0,0,0,0,5,0,0,0,0],
    [0,0,0,0,0,6,0,0,0],
    [0,0,0,0,0,0,7,0,0],
    [0,0,0,0,0,0,0,8,0],
    [0,0,0,0,0,0,0,0,9]
];
var i=0;
while(i<9)
{
    var j=0;
    //console.log(matrix[i][j]);
    while(j<9)
    {
        if(matrix[i][j] == i+1)
        {
            delete matriz[i][j];
        }
        j++;
    }
    i++;
}

for(var i=0; i<9;i++)
{
    for(var j = 0; j<9;j++)
    {
        //console.log(matriz[i][j]);
        if(i==j)
        {
            console.log(matriz[i][j] in matriz);
        }
    }
}

/*
console.log(matriz[0][0] in matriz);
console.log(matriz[1][1] in matriz);
console.log(matriz[2][2] in matriz);
console.log(matriz[3][3] in matriz);
console.log(matriz[4][4] in matriz);
console.log(matriz[5][5] in matriz);
console.log(matriz[6][6] in matriz);
console.log(matriz[7][7] in matriz);
console.log(matriz[8][8] in matriz);
//*/

//
for(var a = 0; a<=100;a++)
{
    ostia = a;
    if((ostia%5)>=2 && (ostia%5)<4)
    {
        console.log(a);
    }
}
