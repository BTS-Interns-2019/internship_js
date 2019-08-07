function fibonacci(n){
  let fibos = {}
  if(fibos[n]){
    return BigInt(fibos[n])
  }else{

    if(n === 1){
       fibos[n] = BigInt(n)
       return fibos[n]
    }
    else if(n === 2){
      fibos[n] = BigInt(fibonacci(n - 1))
      return fibos[n]
    }
    else{
      fibos [n] = BigInt((fibonacci(n-1) + fibonacci(n-2)))
      return fibos[n]
    }
  }
};

module.exports = fibonacci;