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
              //{name:'callback', description: }
              ]
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