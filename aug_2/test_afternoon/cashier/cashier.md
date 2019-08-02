Write a function called cashMeOut which will take 3 arguments, first an object indicating the money input, second is a number of how much the user is paying and third and object with the current count of coins and bills in the cashier.

```js
obj1 = {
  bill500: 0,
  bill200: 1,
  bill100: 1,
  bill50: 2,
  bill20: 0,
  coin50: 0,
  coin20: 0,
  coin10: 0,
  coin5: 0,
  coin2: 0,
  coin1: 0,
};
number = 382;
obj2 = {
  bill500: 200,
  bill200: 200,
  bill100: 200,
  bill50: 200,
  bill20: 2,
  coin50: 200,
  coin20: 2000,
  coin10: 2000,
  coin5: 2000,
  coin2: 2000,
  coin1: 2000,
};
```

First some rules:

If the quantity that needs to be "paid" is less than the sum of the first object then we should return a string saying "Not enough money for payment".

if the quantity that needs to be "paid" is exactly as the sum of the first object we return a number 0

if the quantity that needs to be "paid" is more than the sum of the first object we return an object with the same structure adding how many of each category the cashier should return.

We should always try to return bills first and then coins, and we should return always the less quantity of items, for example:

```js
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

const response = cashMeOut(obj1, number, obj2);

// response = {
//   bill500: 0,
//   bill200: 2,
//   bill100: 0,
//   bill50: 1,
//   bill20: 1,
//   coin50: 0,
//   coin20: 1,
//   coin10: 0,
//   coin5: 1,
//   coin2: 2,
//   coin1: 0,
// }
```

If there isn't enough money on the cashier we need to return a string saying "Not enough money to return"