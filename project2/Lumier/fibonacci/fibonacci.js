let fibos = {} // This object will make register of numers called along the recurtion flow.

function fibonacci(n){
  if(fibos[n]){  // Here, if fibos object has a register of a number called will simply return its value
    return fibos[n]
  }else{
                    //From here, if fibos doesn't has record, will begin creating records.
    if(n === 1){    //If our input is 1 will save 1 as a property with its value and return it on fibos.
       fibos[n] = n
       return fibos[n]
    }
    else if(n === 2){  //Same scenario here.
      fibos[n] = fibonacci(n - 1)
      return fibos[n]
    }
    else{                 //but.... 
      fibos [n] = fibonacci(n-1) + fibonacci(n-2)   //here, well send a new record to fibos, 
      return fibos[n]                               // as the sum of the two previous number of number passed, 
    }                                               //but filtered on fibonacci function again.
  }
};

module.exports = fibonacci;