// Number

// MAX_VALUE
/**
 * It represents the maximum number available for JavaScript
 */

// MIN_VALUE
/**
 * It represents the minimum number available for JavaScript, but without being zero.
 * In other words, the closest number to zero representable by JavaScript
 */

// NaN
/**
 * It represents Not-A-Number. It is returned whenever JS fails to make a Math function, or when parsing letters
 * into numbers. It will return false when comparing it to any other value.
 */

// NEGATIVE_INFINITY
/**
 * It represents the negative value of the Infinity property in the global object.
 */

// POSITIVE_INFINITY
/**
 * It represents the positive value of the Infinity property in the global object.
 */

// EPSILON
/**
 * Represents the difference between 1 and the smallest floating point number greater than 1. Has a value
 * of approximately 2^-52
 */

// MIN_SAFE_INTEGER
/**
 * Represents the smallest possible (and safe) floating point number in JavaScript following the standard in IEEE 754
 */

// MAX_SAFE_INTEGER
/**
 * Represents the smallest possible (and safe) floating point number in JavaScript following the standard in IEEE 754
 */


// parseFloat()
/**
 * Parses (converts) a string passed as argument into a floating point number
 */
console.log(Number.parseFloat('3.1416'));
console.log(Number.parseFloat('2.22044'));
console.log(Number.parseFloat('1.4142'));

// parseInt()
/**
 * Parses (converts) a string passed as argument into an integer number
 */
console.log(Number.parseInt('420'));
console.log(Number.parseInt('42'));
console.log(Number.parseInt('666'));


// isFinite()
/**
 * Method to determine whether a number is finite or not.
 */
console.log(`Number ${NaN} is finite: ${Number.isFinite(NaN)}`);
console.log(`Number ${Infinity} is finite: ${Number.isFinite(Infinity)}`);
console.log(`Number ${42} is finite: ${Number.isFinite(42)}`);

// isInteger()
/**
 * Method to determine whether a number is an integer or not.
 */
console.log(`Number ${NaN} is an Integer: ${Number.isInteger(NaN)}`);
console.log(`Number ${Infinity} is an Integer: ${Number.isInteger(Infinity)}`);
console.log(`Number ${42} is an Integer: ${Number.isInteger(42)}`);

// isNaN()
/**
 * Method to determine whether a number is Not-a-Number
 */
console.log(`Number ${NaN} is NaN (Not-a-Number): ${Number.isNaN(NaN)}`);
console.log(`Number ${Infinity} is NaN (Not-a-Number): ${Number.isNaN(Infinity)}`);
console.log(`Number ${42} is NaN (Not-a-Number): ${Number.isNaN(42)}`);

// isSafeInteger()
/**
 * Method to determine whether a number is a safe integer (exactly represented as an IEEE 754 double precision number)
 */
console.log(`Number ${NaN} is a safe integer: ${Number.isSafeInteger(NaN)}`);
console.log(`Number ${Infinity} is a safe integer: ${Number.isSafeInteger(Infinity)}`);
console.log(`Number ${42} is a safe integer: ${Number.isSafeInteger(42)}`);

// toExponential()
/**
 * Method to convert a Number into his exponential notation
 */
const var1 = 3.1416578962234;
const var2 = 420000000000;
const var3 = 42;
console.log(`Exponential notation of ${var1} is: ${var1.toExponential()}`);
console.log(`Exponential notation of ${var2} is: ${var2.toExponential()}`);
console.log(`Exponential notation of ${var3} is: ${var3.toExponential()}`);

// toFixed()
/**
 * Method to convert a number in exponential notation to fixed point. The counterpart of toExponential()
 */
console.log(`Fixed notation of ${var1} is: ${var1.toFixed()}`);
console.log(`Fixed notation of ${var2} is: ${var2.toFixed()}`);
console.log(`Fixed notation of ${var3} is: ${var3.toFixed()}`);


// toPrecision()
/**
 * Method to give a Number input the specified precision in decimals
 */
console.log(`Precision of 4 for ${var1} is: ${var1.toPrecision(4)}`);
console.log(`Precision of 4 for ${var2} is: ${var2.toPrecision(4)}`);
console.log(`Precision of 4 for ${var3} is: ${var3.toPrecision(4)}`);

// String
const testString = 'I am the test string!';

// fromCharCode() => used
console.log(String.fromCharCode(65, 66, 67));

// fromCodePoint() => used
console.log(String.fromCodePoint(65, 90));

// charAt() => used
console.log(`Char at index 6: ${testString.charAt(6)}`);

// charCodeAt() => used
console.log(`Char code at index 6: ${testString.charCodeAt(6)}`);

// codePointAt() => used
console.log(`Code point at index 6: ${testString.codePointAt(6)}`);

// concat() => used
const testString2 = ' And I am another test string!';
console.log(`Concatenating: ${testString.concat(testString2)}`);

// endsWith() => used
console.log(`Does ${testString} ends with 'string!'? ${testString.endsWith('string!')}`);

// includes() => used
console.log(`Does ${testString} includes 'test'? ${testString.includes('am')}`);

// indexOf() => used
console.log(`Index of 'am' in ${testString}: ${testString.indexOf('am')}`);

// lastIndexOf() => used
console.log(`Last index of 's' in ${testString}: ${testString.lastIndexOf('s')}`);

// localeCompare() => used
console.log(`Does the '${testString}' string occurs before '${testString2}'?: ${testString.localeCompare(testString2)}`);

// normalize() => used
const strNormalize = '\u1E9B'
console.log(`Normalization of ${strNormalize}: ${strNormalize.normalize()}`);

// padEnd() => used
console.log(`Padded to end of '${testString}': ${testString.padEnd(50, '*')}`);

// padStart() => used
console.log(`Padded to start of '${testString}': ${testString.padStart(50, '*')}`);

// repeat() => used
console.log(`Repeating '${testString}' for 3: ${testString.repeat(3)}`);

// replace() => used
console.log(`Replacing 'am' in '${testString}' for 'was': ${testString.replace('am', 'was')}`);

// search() => used
console.log(`Index of result of search for '[A-Z]' in '${testString}': ${testString.search(/[A-Z]/g)}`);

// slice() => used
console.log(`Slicing the string '${testString}': ${testString.slice(5, 14)}`);

// split() => used
console.log(`Splitting '${testString}' into array by spaces: ${testString.split(' ')}`);

// startsWith() => used
console.log(`Does '${testString}' start with 'Hello'? ${testString.startsWith('Hello')}`);

// substring() => used
console.log(`One substring of '${testString}': ${testString.substring(5, 14)}`);

// toLocaleLowerCase() => used
console.log(`Locale lowercase of '${testString}': ${testString.toLocaleLowerCase()}`);

// toLocaleUpperCase() => used
console.log(`Locale uppercase of '${testString}': ${testString.toLocaleUpperCase()}`);

// toLowerCase() => used
console.log(`Lowercase of '${testString}': ${testString.toLowerCase()}`);

// toString() => used
const str = new String('string made from the Object');
console.log(`The string of the object '${str}' is '${str.toString()}'`);

// toUpperCase() => used
console.log(`Uppercase of '${testString}': ${testString.toUpperCase()}`);

// trim() => used
let whitespace = '    String between whitespace     ';
console.log(`Trimmed form of '${whitespace}': ${whitespace.trim()}`)

// trimEnd() => used
console.log(`Trimmed the end of '${whitespace}': ${whitespace.trimEnd()}`);

// trimStart() => used
console.log(`Trimmed the start of '${whitespace}': ${whitespace.trimStart()}`);

/* give me 3 example using all the String functions above over the same String*/
console.log('\n\n\n\n');
// Example 1
let example1 = '  This is the final test string ẛ   ';
example1 = example1.concat(String.fromCharCode(65))
                  .split('')
                  .reverse()
                  .join('')
                  .concat(String.fromCodePoint(65))
                  .split('')
                  .reverse()
                  .join('')
                  .replace('string', 'torture')
                  .slice(example1.indexOf('\u1E9B'.normalize()))
                  .repeat(5)
                  .substring(example1.lastIndexOf('a'))
                  .toLocaleLowerCase();
console.log(example1);

// Example 2
let example2 = 'Please, let me go to sleep!';
example2 = example2.toLowerCase()
                  .toLocaleUpperCase()
                  .toUpperCase()
                  .padStart(40, ' ')
                  .padEnd(60, ' ')
                  .trim();
console.log(example2);

// Example 3
let example3 = 'Agony Pain';
let example4 = 'Mercy Sleep'

if (example3.localeCompare(example4) === -1) {
  example3 = new String("RELEASE ME FROM THIS HELL").toString();
}
if (example3.startsWith('RELEASE') && example3.endsWith('HELL') && example3.includes('ME')) {
  example3 = '          HOW MUCH DO I REALLY WANT THIS INTERNSHIP?          '.trimStart().trimEnd();
}
if (example3.charCodeAt(example3.search('H')) === 72 && example3.codePointAt(0) === 72 && example3.charAt(0) === 'H') {
  example3 = 'Imma dead X(';
}
console.log(example3);