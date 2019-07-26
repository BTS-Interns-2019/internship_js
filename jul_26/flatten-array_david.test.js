input1 = [1,2,["a","b"],3,4];
input2 = [1,2,["hola",["x","y"]],3,4];
input3 = [1,2,[{a: '1', b: 2},["bar"]],3,4];

result1 = [1,2,"a","b",3,4];
result2 = [1,2,"hola","x","y",3,4];
result3 = [1,2,{a: '1', b: 2},"bar",3,4];

function flattenArray(arr) {
    return arr.reduce(function (a, b) {
      return a.concat(Array.isArray(b) ? flattenArray(b) : b);
    }, []);
}

test('example 1', () => {
    expect(flattenArray(input1)).toEqual(result1);
})
  
test('example 2', () => {
    expect(flattenArray(input2)).toEqual(result2);
})

test('example 3', () => {
    expect(flattenArray(input3)).toEqual(result3);
})