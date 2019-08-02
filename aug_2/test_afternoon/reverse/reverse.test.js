const reverse = require('./reverse');

test('reverse empty string', function(){
  expect(reverse('')).toEqual('');
});

test('reverse words1', function(){
  expect(reverse('this is an example :)')).toEqual('this si an elpmaxe :)');
});

test('reverse words2', function(){
  expect(reverse(' this is a second test :O ')).toEqual('this si a dnoces test O:');
});

test('reverse words3', function(){
  expect(reverse('   this is a third test :O   ')).toEqual('this si a driht test O:');
});

test('reverse words4', function(){
  expect(reverse(' Nomequieroir ')).toEqual('Nomequieroir');
});

test('reverse words5', function(){
  expect(reverse(' Symbols !"·%/()=')).toEqual('Symbols =)(/%·"!');
});