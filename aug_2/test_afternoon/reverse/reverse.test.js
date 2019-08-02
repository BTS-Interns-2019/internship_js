const reverse = require('./reverse.js');

test('reverse empty string', function(){
  expect(reverse('')).toEqual('');
})

test('reverse words1', function(){
  expect(reverse('this is an example :)')).toEqual('this si an elpmaxe :)');
})

test('reverse words2', function(){
  expect(reverse(' this is a second test :O ')).toEqual('this si a dnoces test O:');
})

test('prueba sergio words99', function(){
  

  expect(reverse('this is an example :):):):):):):)')).toEqual('this si an elpmaxe :):):):):):):)');
})
test('reverse words2', function(){
  expect(reverse(NaN)).toEqual('');
})
