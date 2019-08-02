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
test('reverse word3', function(){
  expect(reverse('   hola mundo cruel :(      ')).toEqual('hola odnum cruel (:');
})

test('reverse words4', function(){
  expect(reverse('I ekil tacos')).toEqual('I like tacos');
})

test('reverse words5', function(){
  expect(reverse(' como ?satse')).toEqual('como estas?');
})

test('reverse words6', function(){
  expect(reverse('  !"·%/()= !"·%/()= !"·%/()=  ')).toEqual('!"·%/()= =)(/%·"! !"·%/()=');
})
