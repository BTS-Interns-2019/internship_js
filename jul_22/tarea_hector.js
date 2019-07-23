// 3 break
console.log('**************************************')
console.log('*                break               *')
console.log('**************************************')
const fruits = ['apple', 'orange', 'grape'];
const cities = ['Juarez', 'Guadalajara', 'Tepatitlan'];

for (let fruit of fruits) {
  if (fruit === 'orange') {
    break;
  }
  console.log(fruit);
}

for (let city of cities) {
  if (city === 'Tepatitlan') {
    break;
  }
  console.log(city);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// 3 continue
console.log('**************************************')
console.log('*              continue              *')
console.log('**************************************')
for (let fruit of fruits) {
  if (fruit.length === 6) {
    continue;
  }
  console.log(fruit);
}

for (let city of cities) {
  if (city.length <  7) {
    continue;
  }
  console.log(city);
}

for (let i = 0; i < 10; i++) {
  if (i > 5 && i < 8) {
    continue;
  }
  console.log(i);
}

// 3 if else
console.log('**************************************')
console.log('*             if - else              *')
console.log('**************************************')
if (100 < 200) {
  console.log('100 is less than 200');
} else {
  console.log('That\'s where you are wrong, kiddo');
}

if (null) {
  console.log('null is a truthy value');
} else {
  console.log('That\'s where you are wrong, kiddo. Null is a falsy value');
}

if (50 + true) {
  console.log('Holy cow, you can sum up a number and a boolean!');
} else {
  console.log('That\'s where you are wrong, kiddo');
}

// 3 switch
console.log('**************************************');
console.log('*               switch               *');
console.log('**************************************');
const option = 2;
const pokemon = 'Squirtle';
const team = 'Mystic';

switch (option) {
  case 1:
    console.log('You chose option 1');
    break;
  case 2:
    console.log('You chose option 2');
    break;
  default:
    console.log('You didn\'t choose anything');
    break;
}

switch (pokemon) {
  case 'Bulbasaur':
    console.log('You chose Bulbasaur!');
    break;
  case 'Charmander':
    console.log('You chose Charmander!');
    break;
  case 'Squirtle':
    console.log('You chose Squirtle!');
    break;
  default:
    console.log('Choose a pokemon!');
    break;
}

switch (team) {
  case 'Mystic':
    console.log('You chose Team Mystic!');
    break;
  case 'Valor':
    console.log('You chose Team Valor!');
    break;
  case 'Instinct':
    console.log('You chose Team Instinct!');
    break;
  default:
    console.log('Choose a team!');
    break;
}

// 3 try...catch (2 throw)
console.log('**************************************');
console.log('*            try - catch             *');
console.log('**************************************');
const number = 42;

try {
  if (Number.isInteger(number)) {
    console.log('The number passed the try!');
  } else {
    throw new Error('The input is not an Integer!');
  }
} catch (e) {
  console.log(e.message);
}

try {
  if (Number.isNaN(number)) {
    console.log('The number passed the try!');
  } else {
    throw new Error('The input is an Integer, not a NaN! Error!');
  }
} catch (e) {
  console.log(e.message);
}

try {
  if (Number.isFinite(number)) {
    console.log('The number passed the try! It is Finite!');
  }
} catch (e) {
  console.log(e.message);
}

// 3 let
console.log('**************************************');
console.log('*                let                 *');
console.log('**************************************');
let var1 = 25;
let var2 = 'Hello';
let var3 = false;

console.log(`Let variables before: ${var1}, ${var2}, ${var3}`);

var1 = 52;
var2 = 'Hi';
var3 = true;

console.log(`Let variables after: ${var1}, ${var2}, ${var3}`);

// 3 const
console.log('**************************************');
console.log('*               const                *');
console.log('**************************************');
const conVar1 = 'I';
const conVar2 = 'am';
const conVar3 = 'a const';

console.log(`Const variables: ${conVar1}, ${conVar2}, ${conVar3}`);

// 3 function
console.log('**************************************');
console.log('*              function              *');
console.log('**************************************');

function printInput(input) {
  console.log(input);
}

function sum(num1, num2) {
  console.log(`The sum of the two numbers is: ${num1} + ${num2}`);
}

function cube(num) {
  console.log(`The number to the cube is: ${num**3}`);
}

printInput('I am an input for the function!');
sum(15, 86);
cube(5);

// 3 do while
console.log('**************************************');
console.log('*             do - while             *');
console.log('**************************************');
let counter = 0;
let counter2 = 5;

do {
  console.log(`Iteration - ${counter}`);
  counter++;
} while (counter < 10)

do {
  console.log('I am gonna run just once!');
} while (false)

do {
  console.log(`Iteration - ${counter2}`);
  counter2--;
} while (counter2 > 0)

// 3 for
console.log('**************************************');
console.log('*                for                 *');
console.log('**************************************');
const names = ['Ramses', 'Kevin', 'Daniel'];
const animals = ['tiger', 'lion', 'dolphin'];

for (let i = 0; i < names.length; i++) {
  console.log(`Name ${i+1}: ${names[i]}`);
}

for (let i = 0; i < animals.length; i++) {
  console.log(`Animal ${i+1}: ${animals[i]}`);
}

for (let counter = 5; counter >= 0; counter--) {
  console.log(`Bomb will go off in... ${counter}`);

  if (!counter) {
    console.log('BOOM');
  }
}

// 3 for in
console.log('**************************************');
console.log('*             for - in               *');
console.log('**************************************');
const obj1 = {
  prop1: 'Hi',
  prop2: 'Hello',
};

for (let key in obj1) {
  console.log(`Property => ${key}`);
}

for (let index in animals) {
  console.log(`${index} index of animals`);
}

for (let key in obj1) {
  console.log(`${key} => ${obj1[key]}`);
}

// 3 for of
console.log('**************************************');
console.log('*             for - of               *');
console.log('**************************************');
const countries = ['Mexico', 'Spain', 'Egypt'];

for (let country of countries) {
  console.log(`Country: ${country}`);
}

for (let fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}

for (let animal of animals) {
  console.log(`Animal: ${animal}`);
}

// 3 while
console.log('**************************************');
console.log('*               while                *');
console.log('**************************************');
let whileCounter = 0;
let isTrue = true;

while (whileCounter < 10) {
  console.log(`While Counter: ${whileCounter}`);
  whileCounter++;
}

while (isTrue) {
  console.log('Running while true');
  isTrue = false;
}

while (animals.length) {
  console.log('Running while there are still animals');
  console.log(animals);
  animals.pop();
}