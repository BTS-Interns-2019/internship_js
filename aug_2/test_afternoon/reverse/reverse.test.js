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

test('anita tina con espacios', function(){
  expect(reverse(' anita lava la tina ')).toEqual('anita aval la anit');
})
=======
  expect(reverse('this is a second test :O')).toEqual('this si a dnoces test O:');
})

test('reverse words3', function(){
  expect(reverse("This si so yzarc")).toEqual("This is so crazy")
})


>>>>>>> 43bed090b2f7dd8105c964b70d1533c34a75e127
