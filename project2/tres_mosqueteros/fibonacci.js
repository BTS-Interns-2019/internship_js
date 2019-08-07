numbers=[0n, 1n];
function fibonacci (nth) {
    if(numbers[nth]!=null){
        return numbers[nth];
    }else {
        numbers[nth]=(fibonacci(nth-2)+fibonacci(nth-1));
        return numbers[nth];
    }
}
console.log(fibonacci(6));
console.log(fibonacci(16));
console.log(fibonacci(56));
console.log(fibonacci(96));
console.log(fibonacci(106));
console.log(fibonacci(200));
console.log(fibonacci(2000));
module.exports=fibonacci;