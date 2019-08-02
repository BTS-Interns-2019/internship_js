//Urbano Gonzalez patiño
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
test('Dont reverse this',()=>{
  expect(reverse("Hello ")).toEqual("Hello");
});
test('No spaces', ()=>{
  expect(reverse(" Hello ")).toEqual("Hello");
});
test("Special chracter are our friends", ()=>{
  expect(reverse("Life Is Though!")).toEqual("Life sI Though!");
});
test("Special chracter are our friends2", ()=>{
  expect(reverse("(Delete System32 bro)")).toEqual("(Delete 23metsyS bro)");
});
test("Special chracter are our friends3", ()=>{
  expect(reverse("Just .!%")).toEqual("Just %!.");
});



