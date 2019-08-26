const reverse = require('./reverse');

test('reverse empty string', function(){
  expect(reverse('')).toEqual('');
})

test('reverse words1', function(){
  expect(reverse('this is an example :)')).toEqual('this si an elpmaxe :)');
})

test('reverse words2', function(){
<<<<<<< HEAD
  expect(reverse(' this is a second test :O ')).toEqual('this si a dnoces test O:');
})

test('reverse words23', function(){
  expect(reverse('  ejemplos de test')).toEqual('ejemplos ed test');
})
=======
  expect(reverse('this is a second test :O')).toEqual('this si a dnoces test O:');
})

test('reverse words3', function(){
  expect(reverse("This si so yzarc")).toEqual("This is so crazy")
})


>>>>>>> master
