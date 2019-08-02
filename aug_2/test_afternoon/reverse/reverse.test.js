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

test('delete the spaces',function(){
  expect(reverse('    empty spaces    ')).toEqual('empty secaps');
})

test('only one word',function(){
  expect(reverse(' hello ')).toEqual('hello');
})

test('only one word',function(){
  expect(reverse(' hello ')).toEqual('hello');
})

test('number input',function(){
  expect(reverse(2)).toEqual("");
})

test('input has separated by more 1 spaces',function(){
  expect(reverse("I  have more to  one   spaces")).toEqual("I evah more ot one secaps");
})