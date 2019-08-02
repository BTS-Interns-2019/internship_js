const cashMeOut = require('./cashier');

test('test cashMeOut 1', function(){
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
  expect(typeof response).toEqual("object");
  expect(response.bill500).toEqual(0)
  expect(response.bill200).toEqual(2)
  expect(response.bill100).toEqual(0)
  expect(response.bill50).toEqual(1)
  expect(response.bill20).toEqual(1)
  expect(response.coin50).toEqual(0)
  expect(response.coin20).toEqual(1)
  expect(response.coin10).toEqual(0)
  expect(response.coin5).toEqual(1)
  expect(response.coin2).toEqual(2)
  expect(response.coin1).toEqual(0)
})

const cashMeOut = require('./cashier');

test('personal test', function(){
  obj1 = {
    bill500: 0,
    bill200: 1,
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
  number = 700;
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
  expect(cashMeOut).toEqual("dont have enogfth money");
})