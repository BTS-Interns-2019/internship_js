const { login, onlyEven, google, whereAreThey } = require('./cp_exercises_hector.js');

// Login tests
const users = [
  { name: 'carlos', password: '!jE3p68Avh1t', result: false },
  { name: 'santiago', password: 'X4a4h*WMXlmd', result: true },
  { name: 'martin', password: 'n53T#nP$a!k3', result: false },
  { name: 'luisa', password: 'Fa8!@lt2hJ4F', result: true },
  { name: 'carolina', password: '5vZ@46Sq2TG^', result: true },
]

for (let i = 0; i < users.length; i++) {
  test(`Testing with 5 users in login function`, () => {
    expect(login(users[i].name, users[i].password)).toBe(users[i].result);
  });
}

// onlyEven tests
const numbers = [
  { numbers: [1, 2, 3, 4, 5], result: false },
  { numbers: [4, 8, 16, 20, 100, 108], result: [4, 8, 16, 20, 100, 108] },
  { numbers: [80, 2, 14, 21, 50, 42], result: false },
  { numbers: [71, 80, 8, 9, 7], result: false },
  { numbers: ['10', 20, 30, 40, 50], result: [10, 20, 30, 40, 50] }
];

for (let i = 0; i < numbers.length; i++) {
  test(`Testing with 5 arrays of numbers in onlyEven function`, () => {
    expect(onlyEven(numbers[i].numbers)).toStrictEqual(numbers[i].result);
  });
}

// google tests
const queries = [
  { 
    query: 'find', 
    result: {
      name:'find',
      description:'Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.',
      params:[
        {name:'callback', description:'Function to execute on each value in the array'},
        {name:'thisArg', description:'Optional object to use as this when executing callback'},
      ],
      returning:'value of element || undefined'
    }
  },
  { 
    query: 'every', 
    result: {
      name:'every',
      description:'Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
      params:[
        {name:'callback', description:'A function to test for each element'},
        {name:'thisArg', description:'Optional object to use as this when executing callback'},
      ],
      returning:'boolean'
    } 
  },
  { query: 'filter', result: undefined },
  { query: 'map', result: undefined },
  { 
    query: 'values', 
    result: {
      name:'values',
      description:'Returns a new Array Iterator object that contains the values for each index in the array.',
      params:[],
      returning:'Array iterator object'
    } 
  }
];

for (let i = 0; i < queries.length; i++) {
  test(`Testing with 5 queries in google function`, () => {
    expect(google(queries[i].query)).toStrictEqual(queries[i].result);
  });
}

// whereAreThey tests
const nums = [
  { numbers: [1, 2, 3, 4, 5], result: [1, 3] },
  { numbers: [4, 8, 16, 20, 100, 108], result: [0, 1, 2, 3, 4, 5] },
  { numbers: [80, 2, 14, '21', 50, 42], result: [0, 1, 2, 4, 5] },
  { numbers: [71, 80, 8, 9, 7], result: [1, 2] },
  { numbers: ['10', 20, 30, 40, 50], result: [0, 1, 2, 3, 4] }
];

for (let i = 0; i < nums.length; i++) {
  test(`Testing with 5 arrays of numbers in whereAreThey function`, () => {
    expect(whereAreThey(nums[i].numbers)).toStrictEqual(nums[i].result);
  });
}