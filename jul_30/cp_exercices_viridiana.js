/*# Using `some`, `every`, `find` and/or `findIndex`, write functions that accomplish the following:
**create tests first**
filename: cp_exercices_<yourName>.js

* login, return true or false if a user is allowed to login*/

function login(name, password) {
    var users = [
        {name:'Viridiana', password:'12345'},
        {name:'Juan', password:'password'},
        {name:'Lola', password:'diciembre1994'}
     ]

     const result=users.some((valor, index, arr)=>{return valor.name===name && valor.password===password})
        console.log(result);
}

login('Viridiana', 'diciembre1994') //false
login('Lola', 'diciembre1994') //true

//* Given an array, returns an array with *even* elements if all are *even* or false if at least one is odd
  
let arr=[2,4,6,1]

function onlyEven(arr){ 
    
    const result= arr.every((valor, index, arr)=>(valor%2===0))
    if(result){
        return arr;
    }else{
       return false
    }
    
        
}

  console.log(onlyEven(arr))
    

    



//* Given a string, returns an object with the required params and returning values of the following `functions ["find","findIndex","every","some","values","entries","keys"]`

    function google(str){
        var data=[{
            name:"some",
            description:" "
            params:[{}]
        }]
        return {
            name:"some",
            description:"",
            params:[{name:"item", description:""}],
            returning:'boolean'
        }
    }

    /*
* Given an array of numbers, returns a new array of just the index of *even* numbers*/

function numbers(){

}
module.exports={
    login,
    google,
    numbers
}