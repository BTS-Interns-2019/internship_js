/*create a function called flattenArray that receives an array as argument
It will return an array
This array can contain any values
Every value should be returned as part of the resulting array
If value is an array it should add the inner values to the resulting array, not the array, not the array itself
it should be able to do the above ay any deph
If the function argument is not array throw an exception*/

function flattenArray(array) {
   
    var newArray = []
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            newArray = newArray.concat(flattenArray.apply(null, arguments[i]));
        } else {
            newArray.push(arguments[i]);
        }
    }
    return newArray;
}

//flattenArray([1,2,['a','b'],3,4])
//flattenArray([1,2,['a',['b','x']],3,4])
//flattenArray([1,2,['a','b'],3,4])
flattenArray([1,2,[{foo:'bar'},['b']],3,4])