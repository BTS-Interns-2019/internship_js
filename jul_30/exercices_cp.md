# Using `some`, `every`, `find` and/or `findIndex`, write functions that accomplish the following:
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
* Given a string, returns an object with the required params and returning values of the following `functions ["find","findIndex","every","some","values","entries","keys"]`
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
* Given an array of numbers, returns a new array of just the index of *even* numbers
