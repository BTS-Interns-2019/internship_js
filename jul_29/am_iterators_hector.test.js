const { forEach, map, filter, reduce, reduceRight } = require('./am_iterators_hector');

const testArray = [1, 2, 3, 4 ,5];

// forEach
test(`Returning each item in test array with forEach`, () => {
  forEach((elem, index) => expect(elem).toBe(testArray[index]), testArray);
});
test(`Adding 5 to each item in test array with forEach`, () => {
  forEach((elem, index) => {
    elem += 5;
    return expect(elem).toBe(testArray[index] + 5);
  }, testArray);
});
test(`Multiplying each item in test array by its index with forEach`, () => {
  forEach((elem, index) => {
    elem *= index;
    return expect(elem).toBe(testArray[index] * index);
  }, testArray);
});

// map
test(`Powering each element in test array by 2 with map`, () => {
  expect(map(elem => elem ** 2, testArray)).toStrictEqual([1, 4, 9, 16, 25]);
});
test(`Adding a string to the end of each element in test array with map`, () => {
  expect(map(elem => elem + ' mapped', testArray)).toStrictEqual(['1 mapped', '2 mapped', '3 mapped', '4 mapped', '5 mapped']);
});
test(`Changing the base of numbers to binary in test array with map`, () => {
  expect(map(elem => elem.toString(2), testArray)).toStrictEqual(['1', '10', '11', '100', '101']);
});

// filter
test(`Filtering items that are greater than 2 in testArray with filter`, () => {
  expect(filter(elem => elem > 2, testArray)).toStrictEqual([3, 4, 5]);
});
test(`Filtering items that are lesser than 2 in testArray with filter`, () => {
  expect(filter(elem => elem < 2, testArray)).toStrictEqual([1]);
});
test(`Filtering items that are exactly 2 in testArray with filter`, () => {
  expect(filter(elem => elem === 2, testArray)).toStrictEqual([2]);
});

// reduce
test(`Summing up all items in testArray with reduce`, () => {
  expect(reduce((acc, cur) => acc + cur, testArray)).toBe(15);
});
test(`Summing up all items in testArray with reduce with initial value of 10`, () => {
  expect(reduce((acc, cur) => acc + cur, testArray, 10)).toBe(25);
});
test(`Subtract all items in testArray with reduce`, () => {
  expect(reduce((acc, cur) => acc - cur, testArray)).toBe(-13);
});

// reduceRight
test(`Summing up all items in testArray with reduceRight`, () => {
  expect(reduceRight((acc, cur) => acc + cur, testArray)).toBe(15);
});
test(`Summing up all items in testArray with reduceRight with initial value of 50`, () => {
  expect(reduceRight((acc, cur) => acc + cur, testArray, 50)).toBe(65);
});
test(`Subtract all items in testArray with reduceRight with initial value of -20`, () => {
  expect(reduceRight((acc, cur) => acc - cur, testArray, -20)).toBe(-35);
});