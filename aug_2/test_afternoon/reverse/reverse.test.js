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

test('this are not words', function(){
  expect(reverse([1,2,3])).toEqual("error, ingresa un string");
})

test('matenme pls', function(){
  expect(reverse("matenme slp")).toEqual("matenme pls");
})
