const smallest = require('./smallest');

test('test closest1', function(){
  let response = smallest(261235);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
  expect(!!response[0].toEqual(true))
})

<<<<<<< HEAD
test('test closest2', function(){
  let response = smallest(34238234);
  expect(response[0]).toEqual(23438234);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
})

test('test closest', function(){
  let response = smallest(99999991);
  expect(response[0]).toEqual(19999999);
  expect(response[1]).toEqual(7);
  expect(response[2]).toEqual(0);
})

=======
test("checking if its an array",function(){
  let response = smallest("261235")
  let itIs = Array.isArray(response)
  expect(itIs).toBe(true)
})
>>>>>>> master
