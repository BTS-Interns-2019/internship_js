function login(name, password){
  const users = [
  {name:'marlon', password:'pass1996'},
  {name:'miriam', password:'contra98'},
  {name:'jorge' , password:'pw2008'},
  {name:'marlem', password:'agost1997'}
  ];
  
  return users.some((user) => 
         user.name === name && user.password === password);
}

function onlyEven(array){
  if(typeof array == 'undefined' || array.length === 0){
    return false;
  }

  var result = array.every((item) =>
               item % 2 === 0);
  if(result) return array;
  else return false;
  
}

function google(str){
  switch(str){
      case 'find' : {
          return {
              name: 'find',
              description: 'Returns the value of the first element in the array that satisfies the provided testing function.\nOtherwise undefined is returned.',
              params:[
                {name:'callback', description:'Function to execute on each value in the array.'},
                {name:'element', description:'The current element being processed in the array.'},
                {name:'index', description:'Optional.\nThe index of the current element being processed in the array.'},
                {name:'array', description:'Optional.\nThe array find was called upon.'},
                {name:'thisArg', description:'Optional.\nOptional object to use as this when executing callback.'}
              ],
              returning:'The value of the first element in the array that satisfies the provided testing function. \nOtherwise, undefined is returned.'
          }
      }

      case 'findIndex' : {
        return {
            name: 'findIndex',
            description: 'executes the callback function once for every index 0..length-1 (inclusive) \nin the array until it finds the one where callback returns a truthy value (a value that coerces to true).',
            params:[
              {name:'callback', description:'A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.'},
              {name:'element', description:'The current element being processed in the array.'},
              {name:'index', description:'Optional.\nThe index of the current element being processed in the array.'},
              {name:'array', description:'Optional.\nThe array findIndex was called upon.'},
              {name:'thisArg', description:'Optional.\nOptional object to use as this when executing callback.'}
            ],
            returning:'The index of the first element in the array that passes the test. \nOtherwise, -1.'
        }
    }
  }
}

function evenNumbers(array){
  var ind = [];
  if(typeof array != 'undefined'){
    var it = array.entries();
    for(var i=0; i<array.length; i++){
      var actual = it.next().value;
      if(actual[1]%2 === 0){
        ind.push(actual[0]);
      }
    }
  }
return ind;
}

module.exports = {
    login, onlyEven, google, evenNumbers
}