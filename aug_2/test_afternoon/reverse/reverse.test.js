const reverse = require('./reverse');

test('reverse empty string', function(){
  expect(reverse('')).toEqual('');
})

test('reverse words1', function(){
  expect(reverse('this is an example :)')).toEqual('this si an elpmaxe :)');
})

test('reverse words2', function(){
  expect(reverse(' this is a second test :O ')).toEqual('this si a dnoces test O:');
})

test('reverse words3', ()=>{
  expect(reverse('personal example for the method')).toEqual("personal elpmaxe for eht method");
})

test('reverse words 4', ()=>{
  expect(reverse('i have a new shues james lebron')).toBe("i evah a wen shues semaj lebron");
})

test('reverse words 5', ()=>{
  expect(reverse('happy :) for a working in blue trail')).toBe("happy ): for a working ni blue liart");
})

test('reverse words 6', ()=>{
  expect(reverse('i dont tinking any more')).toBe("i tnod tinking yna more");
})

test('reverse words 7', ()=>{
  expect(reverse(8)).toBe("Error, needed a string");
})