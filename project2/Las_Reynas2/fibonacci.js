
function fibonacci(n) {
    if (n <= 0) 
        return BigInt(0);
    if (n === 1 || n === 2){ 
        return BigInt(1);
    }
    //console.log(BigInt((fibonacci(n - 1) + fibonacci(n - 2))));
    
        return BigInt((fibonacci(n - 1) + fibonacci(n - 2)));
  }
  //fibonacci(100)
  console.log(fibonacci(25));