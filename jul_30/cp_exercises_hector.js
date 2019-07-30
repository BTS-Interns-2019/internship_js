function login(name, password) {
  const users = [
    { name: 'santiago', password: 'X4a4h*WMXlmd' },
    { name: 'luisa', password: 'Fa8!@lt2hJ4F' },
    { name: 'carolina', password: '5vZ@46Sq2TG^' },
    { name: 'antonio', password: '5O3wb4v3R35%' },
    { name: 'adriana', password: 'tK6%l8JvgRuN' },
  ];

  return users.some(user => name === user.name && password === user.password);
}

function onlyEven(numbers) {
  numbers = numbers.map(num => Number.parseInt(num));
  if (numbers.some(number => number % 2 !== 0)) {
    return false;
  }
  return numbers;
}

function google(str) {
  const functions = [
    {
      name:'find',
      description:'Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.',
      params:[
        {name:'callback', description:'Function to execute on each value in the array'},
        {name:'thisArg', description:'Optional object to use as this when executing callback'},
      ],
      returning:'value of element || undefined'
    },
    {
      name:'findIndex',
      description:'Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.',
      params:[
        {name:'callback', description:'A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found'},
        {name:'thisArg', description:'Optional object to use as this when executing callback'},
      ],
      returning:'number'
    },
    {
      name:'every',
      description:'Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
      params:[
        {name:'callback', description:'A function to test for each element'},
        {name:'thisArg', description:'Optional object to use as this when executing callback'},
      ],
      returning:'boolean'
    },
    {
      name:'some',
      description:'Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value',
      params:[
        {name:'callback', description:'A function to test for each element'},
        {name:'thisArg', description:'Optional object to use as this when executing callback'},
      ],
      returning:'boolean'
    },
    {
      name:'values',
      description:'Returns a new Array Iterator object that contains the values for each index in the array.',
      params:[],
      returning:'Array iterator object'
    },
    {
      name:'keys',
      description:'Returns a new Array Iterator object that contains the keys for each index in the array.',
      params:[],
      returning:'Array iterator object'
    },
    {
      name:'entries',
      description:'Returns a new Array Iterator object that contains the key/value pairs for each index in the array.',
      params:[],
      returning:'Array iterator object'
    },
  ];

  return functions.find(elem => elem.name === str);
}

function whereAreThey(numbers) {
  const evenNumbers = numbers.map(num => Number.parseInt(num)).filter(num => num % 2 === 0);
  const resultArray = [];

  for (let i = 0; i < evenNumbers.length; i++) {
    resultArray.push(numbers.findIndex(num => num % 2 === 0));
    // following line modifies the array in that index to make it 1 (an odd number), so it doesn't get detected by findIndex again
    numbers[resultArray[i]] = 1;
  }

  return resultArray;
}

module.exports = {
  login,
  onlyEven,
  google,
  whereAreThey
};