/** file name am_iterators_homerowk_<name>.js for function definition.

function name charCounter.

Create a function that receives 1 string as parameter and returns an object indicating how many times a letter was used.

Each key of the object will be a used letter in lowercase

Any character that is not a letter must be ignored

for, while, do...while loops are forbidden

Example I/O
"Hi Every body!" => {
  h: 1,
  i: 1,
  e: 2,
  v: 1,
  r: 1,
  y: 2,
  b: 1,
  o: 1,
  d: 1,
}
TDD
Create a tests file with the same name but ending in .test.js aka am_iterators_homework_<name>.tests.js
Write at least 3 different test cases for the excersise
TIP: remember: forEach, map, filter, reduce, reduceRight. */

const greet = "Hi Every body!"
const bye = "Good bye all my folks, i might fly!!!"
const clintEastwood = "Tomorrow is promised to no one."
const gandalffTheGrey = "Many that live deserve death."
const dumbledore = "One can never have enough socks."

const charCounter = greet =>{
  const letters = /[a-z]/g
  const onlyChars = greet.toLowerCase().match(letters)

  const counterObj = {}

  onlyChars.forEach((char) => 
    counterObj[char] = counterObj[char] = counterObj.hasOwnProperty(char) ? counterObj[char]+1 : +1)

  return counterObj

}
console.log(charCounter(greet))

module.exports = charCounter;