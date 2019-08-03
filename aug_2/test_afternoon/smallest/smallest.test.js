const smallest = require('./smallest');

test('test closest1', function(){
  let response = smallest(261235);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
})
test('tests examples', function(){
  let pruebas=[
    [261235,[126235, 2, 0]],
    [83425825,[28342585, 6, 0]],
    [9111111,[1111119, 0, 6]]
  ]
  pruebas.forEach((prueba,i) => {
      expect(JSON.stringify(smallest(prueba[0]))).toBe(JSON.stringify(prueba[1]));
  });
})
test('Another type of value', function(){
  expect(smallest("hola")).toBe("Requiere un number");
})
