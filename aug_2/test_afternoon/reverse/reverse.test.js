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

test('empty spaces at the beginning and at the end', function(){
  expect(reverse('    this is an example :)    ')).toEqual('this si an elpmaxe :)');
})

test('reverse words1 equals', function(){
  expect(reverse('this sis an elpmaxeexample :)')).toEqual('this sis an elpmaxeexample :)');
})

test('reverse empty string', function(){
  expect(typeof(reverse('kasjdf sañdlkf sadf asd sad f    sd  fs '))).toEqual('string');
})
test('whitout parameters', function(){
  expect(reverse()).toEqual('Solo funciona si envias un string como parametro');
})
test('parameter number', function(){
  expect(reverse(23)).toEqual('Solo funciona si envias un string como parametro');
})
test('paremeter array', function(){
  expect(reverse(["hola","bebé"])).toEqual('Solo funciona si envias un string como parametro');
})
test('paremeter object', function(){
  expect(reverse({name:"juan", age:34})).toEqual('Solo funciona si envias un string como parametro');
})
test('paremeter boolean', function(){
  expect(reverse(true)).toEqual('Solo funciona si envias un string como parametro');
})