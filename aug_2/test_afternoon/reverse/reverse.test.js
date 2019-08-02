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
test('validar si la entrada es un string', function(){
  expect(reverse('viri de la rocha@')).toEqual('viri ed la @ahcor')
})

test('reverse words3 con signo !', function(){
  expect(reverse('Esto es un examen importante!')).toEqual('Esto se un nemaxe importante!')
})





