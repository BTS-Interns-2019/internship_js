const cashMeOut = require('./cashier');

test('Input 1 is not an object', function(){
  obj1 = 'Not an object';
  number = 501;
  obj2 = {
    bill500: 200,
    bill200: 200,
    bill100: 200,
    bill50: 200,
    bill20: 1,
    coin50: 200,
    coin20: 2000,
    coin10: 2000,
    coin5: 2000,
    coin2: 2000,
    coin1: 2000,
  };

  let response = cashMeOut(obj1, number, obj2);
  expect(response).toBe('First input is not an object');
});
test('Input 2 is not a number', function(){
  obj1 = {
    bill500: 2,
    bill200: 0,
    bill100: 0,
    bill50: 0,
    bill20: 0,
    coin50: 0,
    coin20: 0,
    coin10: 0,
    coin5: 0,
    coin2: 0,
    coin1: 0,
  };
  number = '501';
  obj2 = {
    bill500: 200,
    bill200: 200,
    bill100: 200,
    bill50: 200,
    bill20: 1,
    coin50: 200,
    coin20: 2000,
    coin10: 2000,
    coin5: 2000,
    coin2: 2000,
    coin1: 2000,
  };

  let response = cashMeOut(obj1, number, obj2);
  expect(response).toBe('Second input is not a number');
});
test('Input 3 is not an object', function(){
  obj1 = {
    bill500: 2,
    bill200: 0,
    bill100: 0,
    bill50: 0,
    bill20: 0,
    coin50: 0,
    coin20: 0,
    coin10: 0,
    coin5: 0,
    coin2: 0,
    coin1: 0,
  };
  number = 501;
  obj2 = 'Not an object';

  let response = cashMeOut(obj1, number, obj2);
  expect(response).toBe('Third input is not an object');
});
test('Response says "Not enough money for payment" when input 2 is less than the sum of input 1', function(){
  obj1 = {
    bill500: 2,
    bill200: 0,
    bill100: 0,
    bill50: 0,
    bill20: 0,
    coin50: 0,
    coin20: 0,
    coin10: 0,
    coin5: 0,
    coin2: 0,
    coin1: 0,
  };
  number = 501;
  obj2 = {
    bill500: 200,
    bill200: 200,
    bill100: 200,
    bill50: 200,
    bill20: 1,
    coin50: 200,
    coin20: 2000,
    coin10: 2000,
    coin5: 2000,
    coin2: 2000,
    coin1: 2000,
  };

  let response = cashMeOut(obj1, number, obj2);
  expect(response).toBe('Not enough money for payment');
});
test('Response is 0 when input 2 is the same as the sum of input 1', function(){
  obj1 = {
    bill500: 2,
    bill200: 0,
    bill100: 0,
    bill50: 0,
    bill20: 0,
    coin50: 0,
    coin20: 0,
    coin10: 0,
    coin5: 0,
    coin2: 0,
    coin1: 0,
  };
  number = 1000;
  obj2 = {
    bill500: 200,
    bill200: 200,
    bill100: 200,
    bill50: 200,
    bill20: 1,
    coin50: 200,
    coin20: 2000,
    coin10: 2000,
    coin5: 2000,
    coin2: 2000,
    coin1: 2000,
  };

  let response = cashMeOut(obj1, number, obj2);
  expect(response).toBe(0);
});
test('Response has more bills used than coins', function(){
  obj1 = {
    bill500: 2,
    bill200: 0,
    bill100: 0,
    bill50: 0,
    bill20: 0,
    coin50: 0,
    coin20: 0,
    coin10: 0,
    coin5: 0,
    coin2: 0,
    coin1: 0,
  };
  number = 1500;
  obj2 = {
    bill500: 200,
    bill200: 200,
    bill100: 200,
    bill50: 200,
    bill20: 1,
    coin50: 200,
    coin20: 2000,
    coin10: 2000,
    coin5: 2000,
    coin2: 2000,
    coin1: 2000,
  };

  let response = cashMeOut(obj1, number, obj2);
  expect(response).toStrictEqual({
    bill500: 3,
    bill200: 0,
    bill100: 0,
    bill50: 0,
    bill20: 0,
    coin50: 0,
    coin20: 0,
    coin10: 0,
    coin5: 0,
    coin2: 0,
    coin1: 0,
  });
});
test('Response has more bills used than coins and it\'s the least amount of items possible', function(){
  obj1 = {
    bill500: 2,
    bill200: 0,
    bill100: 0,
    bill50: 0,
    bill20: 0,
    coin50: 0,
    coin20: 0,
    coin10: 0,
    coin5: 0,
    coin2: 0,
    coin1: 0,
  };
  number = 1500;
  obj2 = {
    bill500: 200,
    bill200: 200,
    bill100: 200,
    bill50: 200,
    bill20: 1,
    coin50: 200,
    coin20: 2000,
    coin10: 2000,
    coin5: 2000,
    coin2: 2000,
    coin1: 2000,
  };

  let response = cashMeOut(obj1, number, obj2);
  expect(response).toStrictEqual({
    bill500: 3,
    bill200: 0,
    bill100: 0,
    bill50: 0,
    bill20: 0,
    coin50: 0,
    coin20: 0,
    coin10: 0,
    coin5: 0,
    coin2: 0,
    coin1: 0,
  });
});
test('Response says "Not enough money to return" when there isn\'t enough money in the cashier to return', function(){
  obj1 = {
    bill500: 2,
    bill200: 0,
    bill100: 0,
    bill50: 0,
    bill20: 0,
    coin50: 0,
    coin20: 0,
    coin10: 0,
    coin5: 0,
    coin2: 0,
    coin1: 0,
  };
  number = 1500;
  obj2 = {
    bill500: 0,
    bill200: 0,
    bill100: 0,
    bill50: 0,
    bill20: 0,
    coin50: 0,
    coin20: 0,
    coin10: 0,
    coin5: 0,
    coin2: 0,
    coin1: 0,
  };

  let response = cashMeOut(obj1, number, obj2);
  expect(response).toBe('Not enough money to return');
});