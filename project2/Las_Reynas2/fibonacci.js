
function fibonacci(n) {
    if (n <= 0) 
        return BigInt(0);
    if (n === 1 || n === 2){ 
        return BigInt(1);
    }
        return BigInt((fibonacci(n - 1) + fibonacci(n - 2)));
  }
  console.log(fibonacci(25));