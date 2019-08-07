function fibonacci(n){
  if(n === 1){
    return BigInt(n)
  }
  else if(n === 2){
    return BigInt(fibonacci(n - 1))
  }
  else{
    return BigInt((fibonacci(n-1) + fibonacci(n-2)))
  }
};

module.exports = fibonacci;