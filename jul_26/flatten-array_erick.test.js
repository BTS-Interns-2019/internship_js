const arr1 = [];
const arr2 = [1, 2, ['a', 'b'],3 ,4];
const arr3 = [1, 2, ['a', ['b', 'x']],3 ,4];
const arr4 = [1, 2, ['a', ['b', ['x']]],3 ,4];
const arr5 = [1, 2, [{foo: 'bar'}, [b]],3, 4];


function flattenArray(arr){
  const res = []
  let pass = arr
  function foo(){
    if(!Array.isArray(pass)){
      throw "This is not Array"
    }
    console.log(res)
      for(let i of pass){
        if(Array.isArray(i)){
          pass = i
          foo(pass)         
        }else{
          res.push(i)
        } 
      }
      console.log(res)
    }
    return foo()
}
console.log(flattenArray(arr4))