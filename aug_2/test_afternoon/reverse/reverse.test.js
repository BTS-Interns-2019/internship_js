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
  expect(reverse(' this is a test that do anything at all ')).toEqual('this si a tset that od anything ta all');
})

test('reverse words4', function(){
  expect(reverse(' some of this test was made by me')).toEqual('some fo this tset was edam by em');
})