const arr1 = [];
const arr2 = [1, 2, ['a', 'b'],3 ,4];
const arr3 = [1, 2, ['a', ['b', 'x']],3 ,4];
const arr4 = [1, 2, ['a', ['b', ['x']]],3 ,4];
const arr5 = [1, 2, [{foo: 'bar'}, ["b"]],3, 4];


function flattenArray(arr){
  if(!Array.isArray(arr)){
  throw new Error("This is not Array")
  }
  const res = []
  let pass = arr
  function foo(){
    for(let i of pass){
        if(Array.isArray(i)){
          pass = i
          foo(pass)         
        }else{
          res.push(i)
        } 
      }
      return res
    }
    return foo()
}
console.log(flattenArray(arr5))

module.exports = flattenArray.js