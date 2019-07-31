// array = [5,2,9,1];
// n = array.length;

// for (j = 0; j < n; j++) {
//     if(array[j]>array[j+1]) {
//         a = array.slice(j,j+1);
//         console.log(a);
//         for (i = 0; i < n; i++) {
//             array.copyWithin(i, i+1, i+2);
//             array.splice(i+1,1,Number(a));
//         }
//     } 
//     console.log(array);
// }

//////////////////////////////////
array = [5,2,6,1];
if (array[0]>array[1]) {
    a = array.slice(0,1);
    console.log(a);
    array.copyWithin(0, 1, 2);
    console.log(array);
    array.splice(1,1,Number(a));
    console.log(array);
}
/////////////////////////////////
if (array[1]>array[2]) {
    a = array.slice(1,2);
    console.log(a);
    array.copyWithin(1, 2, 3);
    console.log(array);
    array.splice(2,1,Number(a));
    console.log(array);
} else {
    a = array.slice(2,3);
    console.log(a);
    array.copyWithin(2, 3, 4);
    console.log(array);
    array.splice(3,1,Number(a));
    console.log(array);
}
/////////////////////////////////
if (array[2]>array[1]) {

} else {
    a = array.slice(1,2);
    console.log(a);
    array.copyWithin(1, 2, 3);
    console.log(array);
    array.splice(2,1,Number(a));
    console.log(array);
}
/////////////////////////////////
if (array[1]>array[0]) {

} else {
    a = array.slice(0,1);
    console.log(a);
    array.copyWithin(1, 0, 1);
    console.log(array);
    // array.splice(0,1,Number(a));
    // console.log(array);
}
