/** # Using `some`, `every`, `find` and/or `findIndex`, write functions that accomplish the following:
**create tests first**
filename: cp_exercices_<yourName>.js

* login, return true or false if a user is allowed to login
```js
function login(name, password) {
    var users = [{name:"", password:""}]

    return true|false
}
```
* Given an array, returns an array with *even* elements if all are *even* or false if at least one is odd
    onlyEven(arr){return []|false}
* Given a string, returns an object with the required params and returning values of the following 
  `functions ["find","findIndex","every","some","values","entries","keys"]`
    ```js
    function google(str){
        return {
            name:"some",
            description:"",
            params:[{name:"item", description:""}],
            returning:'boolean'
        }
    }
    ```
* Given an array of numbers, returns a new array of just the index of *even* numbers */

function login(name, password){
    const users = [
                    {name:"pifas",password:"tomatonto"},
                    {name:"la china",password:"barrio666"},
                    {name:"Erick",password:"parangaricutirimicuaro"},
                    {name:"Gandalff",password:"youshallnotpass"},
                  ]

  return users.some((val, ind, arr) => val.name === name && val.password === password)
}

function onlyEven(arr){
  return arr.every((val, ind, arr) => val % 2 === 0) ? arr : false
}


function google(str){
  const search = [
    {name:'forEach',
    description:'Travels all items in an array object',
    params:[{name:'currentValue',description:'value iterated'},
            {name:'index',description:'current index'},
            {name:'Array',description:'reference of array'} 
            ],
    returning:undefined},
    {name:'some',
    description:'Return true if any element matches condition',
    params:[{name:'currentValue',description:'value iterated'},
            {name:'index',description:'current index'},
            {name:'Array',description:'reference of array'}    
            ],
    returning: 'Boolean'},
    {name:'find',
    description:'Return first element that matches',
    params:[{name:'currentValue',description:'value iterated'},
            {name:'index',description:'current index'},
            {name:'Array',description:'reference of array'}    
            ],
    returning:"Value"},
  ];
  return search.find((val, ind, arr) => val.name === str)
};

function evenIndex(arr){
  let evenInd = []
  arr.forEach((val, ind, arr) => val % 2 === 0 ? evenInd.push(ind) : undefined) 
  return evenInd
}


module.exports = {
  login,
  onlyEven,
  google,
  evenIndex
}
