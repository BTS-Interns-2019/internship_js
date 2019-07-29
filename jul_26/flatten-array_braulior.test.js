// #Flatten array

// `flatten-array_<name>.test.js`

// * Create a function called `flattenArray` that receives an array as argument
// * It will return an array
// * This array can contain any value
// * Every value should be returned as part of the resulting array
// * If a value is an array it should add the inner values to the resulting array, not the array itself
// * it should be able to do the above at any deph
// * If the function argument is not an array `throw` an exception

// ## I/O Examples
// ```js
// []                                        =>  []
// [ 1, 2, [ 'a', 'b' ], 3, 4 ]              =>  [ 1, 2, 'a', 'b', 3, 4 ]
// [ 1, 2, [ 'a', [ 'b', 'x' ] ], 3, 4 ]     =>  [ 1, 2, 'a', 'b', 'x', 3, 4 ]
// [ 1, 2, [ 'hola', [ 'b', 'x' ] ], 3, 4 ]  =>  [ 1, 2, 'hola', 'b', 'x', 3, 4 ]
// [ 1, 2, [ {foo: 'bar'}, [ 'b' ] ], 3, 4 ] =>  [ 1, 2, {foo: 'bar'}, 'b', 3, 4 ]
// ```

input = [ 1, 2, [ {foo: 'bar'}, [ 'b' ] ], 3, 4 ]

function flattenArray(arr) {
  let result = [];

  if(!Array.isArray(arr)) {
    throw new Error("argument is not an array");
  }

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if(Array.isArray(element)) {
      result = [...result, ...flattenArray(element)];
    } else {
      result.push(element)
    }
  }

  return result;
}


const tests = [
  [[]                                       ,  []],
  [[ 1, 2, [ 'a', 'b' ], 3, 4 ]             ,  [ 1, 2, 'a', 'b', 3, 4 ]],
  [[ 1, 2, [ 'a', [ 'b', 'x' ] ], 3, 4 ]    ,  [ 1, 2, 'a', 'b', 'x', 3, 4 ]],
  [[ 1, 2, [ 'hola', [ 'b', 'x' ] ], 3, 4 ] ,  [ 1, 2, 'hola', 'b', 'x', 3, 4 ]],
  [[ 1, 2, [ {foo: 'bar'}, [ 'b' ] ], 3, 4 ],  [ 1, 2, {foo: 'bar'}, 'b', 3, 4 ]],
]

test('flattening array', () => {
  for (let index = 0; index < tests.length; index++) {
    const [input, output] = tests[index];
    expect(flattenArray(input)).toEqual(output);
  }
})

test('throws an error', () => {
  expect(() => flattenArray("input")).toThrow();
})


