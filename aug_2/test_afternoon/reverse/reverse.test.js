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

test('reverse words3', function(){
  expect(reverse('   this   word looks   like  was   been  separated too    much    ')).toEqual('this drow looks ekil was neeb separated oot much');
})

test('reverse none', function(){
  expect(reverse()).toEqual('');
})