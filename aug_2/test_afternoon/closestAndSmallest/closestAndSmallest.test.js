const closestAndSmallest = require('./closestAndSmallest');

test('test closest1', function(){
  let response = closestAndSmallest('103 123 4444 99 2000');
  expect(response[0][0]).toEqual(2);
  expect(response[0][1]).toEqual(4);
  expect(response[0][2]).toEqual(2000);
  expect(response[1][0]).toEqual(4);
  expect(response[1][1]).toEqual(0);
  expect(response[1][2]).toEqual(103);
})
test('tests examples', function(){
  let pruebas=[
    ['103 123 4444 99 2000', [[2, 4, 2000], [4, 0, 103]]],
    ['101 200 101',[[2, 0, 101], [2, 1, 200]]],
    ['80 71 62 53',[[8, 0, 80], [8, 1, 71]]],
    ['444 2000 445 544',[[13, 2, 445], [13, 3, 544]]],
    ['239382 162 254765 182 485944 468751 49780 108 54',[[9, 1, 162], [9, 7, 108]]]
  ]
  pruebas.forEach((prueba,i) => {
    //test("Example "+i,function(){
      expect(JSON.stringify(closestAndSmallest(prueba[0]))).toBe(JSON.stringify(prueba[1]));
    //})
  });
})
test("Dato que no sea string", function(){
  expect(closestAndSmallest(34)).toBe("Requiere un string")
})
test('Empty string', function(){
  expect(closestAndSmallest("")).toBe("La cadena está vacía")
})
test('Return an array', function(){
  expect(Array.isArray(closestAndSmallest("103 123 4444 99 2000"))).toBe(true)
})