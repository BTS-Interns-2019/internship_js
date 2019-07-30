
function login(nombre, contrasena) {

    var user = [
        {name:"admin", password: "admin"},
        {name:"ricardo", password: "12345"},
        {name: "ajalas", password: "bistec"}
    ];
      return user.some(function(arrVal){
        return arrVal.name === nombre && arrVal.password === contrasena;
      });
    }
    //console.log(login( "admin", "admin"))


    function onlyEven(arr){
        if (arr.every(function(num){
            return num % 2 ==0;
        }) == true)return arr;
        else{return false};
    }

    console.log(onlyEven([2,4,6]));
    
// google


//evenIndex

function evenIndex(arr){

    var iterator = arr.keys(); 
    let res = [];
    let i = 0;
    for (let key of iterator) {
        if(arr[key] % 2 == 0){
            res[i] = key;
            i++;
        }

    }

    return res;
}

console.log(evenIndex([1,2,3,4]));







module.exports = {login, onlyEven,evenIndex };