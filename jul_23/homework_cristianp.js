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
var j=0;
while(i<9)
{
    //console.log(matrix[i][j]);
    while(j<9)
    {
        console.log(matrix[i][j]);
        if(matrix[i][j] != i)
        {
            matrix[i][j] = 0;
        }
        j++;
    }
    j=0;
    i++;
}
console.log(matrix);

/*for(var l=0;l<=9;l++){
            if(matrix[i][j] != i)
            {
                matrix[i][j] = 0;
            }
        }*/