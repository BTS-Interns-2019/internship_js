// create funtion
// it will return an array
// array can contain any value
// every value should be returned as part of the resulting array
// if a value is an array it should add the inner values to the resulting arrat, not the array itself
// it should be able to do the abive at any deph
// if the function argument is not an array 'throw' an exception

var array = [1, 2, 3, 4, 5];



var datos = [1, 2, ['a', 'b'], 3, 4]
var result= []
function flattenArray(arr) {
    for(i=0; i<arguments.length; i++){
        if (arguments[i] instanceof Array){
        } else {
            result.push(arguments[i])
        }
    }
}

console.log(result)
flattenArray(datos);