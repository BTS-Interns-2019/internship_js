// // # Exercises 23 jul

// // Number and String

// // create a file named `tarea_<nombre>.js` in your own branch using.



// // Number


// // MAX_VALUE
// /* describe what it is? */

// // MIN_VALUE
// /* describe what it is? */

// // NaN
// /* it means Not a Number. It appear when trying to Math strings */

// // NEGATIVE_INFINITY
// /* describe what it is? */

// // POSITIVE_INFINITY
// /* describe what it is? */

// // EPSILON
// /* describe what it is? */

// // MIN_SAFE_INTEGER
// /* describe what it is? */

// // MAX_SAFE_INTEGER
// /* describe what it is? */



// // parseFloat()
// /* Parses a string and convert it in a float number if string is a number */

// let a = parseFloat("45.256432453") // 45.234532453
// let b = parseFloat("10.00") // 10.00
// let c = parseFloat("Verdolaga") // NaN

// // parseInt()
// /* String number turns in a number integer */

// let d = parseInt("45.256432453") // 45
// let e = parseInt("3.1234123") // 3
// let f = parseInt("qwer.12341") // NaN

// // isFinite()
// /* Determine if a number is finite. return false if +infinity, -infinity or NaN */

// let g = isFinite("1234ewq") // true
// let h = isFinite(1234123) // true
// let i = isFinite(-Infinity) // false 

// // isInteger()
// /* return True if argument is an integer */

// let j = isInteger(1) // true
// let k = isInteger("12.34") // false
// let l = isInteger("333333333") // false

// // isNaN()
// /* return true if its an illegal number */
// let m = isNaN("asdf") // true
// let n = isNaN(1341) // false
// let o = inNaN(undefined) // true

// // isSafeInteger()
// /* return true if number is an integer */
// let p = isSafeInteger(1234) // true
// let q = isSafeInteger("1234") // false
// let r = isSafeInteger(Infinity) // false

// // toExponential()
// /* Convert a number in to exponentional notation */
// let s = 3
// s.toExponential(s) // "3.00e+0"
// let t = 5
// t.toExponential(t) // "2.50000e+1"
// let u = -25
// //u.toExponential(25) // error... must be between 0...100

// // toFixed()
// /* Given a float number, will show me numbers passed by argument */
// let v = 5.25555555
// v.toFixed(3) // 5.255
// let w = 123.12341
// w.toFixed(5) // 123.12341
// let x = 123.33
// x.toFixed(7) // 123.3300000

// // toPrecision()
// /* Similar to .toFixed but taking full number */

// let y = 13.1234
// y.toPrecision(5) // 13.123
// let z = 3.1416
// z.toPrecision(1) // 3
// let aa = "25"
// //aa.toPrecision(1234) // error


// // String


// // fromCharCode()
// /* Convert unicode to character */
// let bb = String.fromCharCode(65) // "A"
// let cc = String.fromCharCode(64) // "@"
// let dd = String.fromCharCode(123) // "{"


// // fromCodePoint()
// /* Convert code to Char and concatenates if multiple codes */
// let ee = String.fromCodePoint(65,64,123) // "A@{"


// // charAt()
// /* Shows character on position passed as argument */
// let ff = "HELLO"
// ff.charAt(0) // "H"
// ff.charAt(10) // ""
// ff = 1234
// //ff.charAt(0) // error

// // charCodeAt()
// /* Return unicode of character passed, or the character of the string index passed. */
// let gg = "HELLO"
// gg.charCodeAt(0) // 72 

// // codePointAt()
// /* Return unicode from argument passed */
// let hh = "ABC" 
// hh.codePointAt(1);          // 66


// // concat()
// /* cancatenates values passed */

// var array1 = ['a', 'b', 'c'];
// var array2 = ['d', 'e', 'f'];
// array1.concat(array2)

// // endsWith()
// /* returns true if arguments passed is true */
// var greet = "Hello to all the world!"
// greet.endsWith("world!") // true

// // includes()
// /* return true if str applied includes argument */
// greet.includes("Hello") // true

// // indexOf()
// /* returns index of first char of string passed as argument */
// greet.indexOf("all") // 9

// // lastIndexOf()
// /* return index of las char of string passed */
// greet.indexOf("Hello") // 4

// // localeCompare()
// /* return -1 if var1 was first as comparison variable. gives 1 if greet 1 was written after  */
// let greet2;
// let greet1;
// greet1.localeCompare(greet2) // 1

// // normalize()
// /* Return Normalized Unicode Form of string passed */
// var str = ""
// str.normalize('NFC'); // '\u1E9B\u0323'

// // padEnd()
// /* receive index and char to add after index */
// greet.padEnd(22, "!@#$") // "Hello to all the world!!@#$"

// // padStart()
// /* give me an example that does an action a string */
// greet.padStart(22, "!@#$") // "!@#$Hello to all the world!"

// // repeat()
// /* repeat string taken as many times mentioned as argument */
// console.log("im Tired", greet.repeat(100))

// // replace()
// /* returns a new string with replaced pattern specified */
// var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
// var regex = /dog/gi 
// p.replace(regex, 'ferret')

// // search()
// /* searches for matches on regex declaration argument */
// var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// var regex = /[^\w\s]/g;

// console.log(paragraph.search(regex)) // 43

// // slice()
// /* return a portion of a string, pased in index numberes as arguments */

// var str = 'The quick brown fox jumps over the lazy dog.';
// str.slice(31) // "the lazy dog"
// str.slice(4, 19) // "quick brown fox"
// // split()
// /* returns an array divided accor expression passed as argument */
// let arraygo = "12345"
// arraygo.split("") // ["1", "2","3","4","5"]

// // startsWith()
// /* return true if value passed it true beggining of str */
// arraygo.startsWith("123") // true

// // substring()
// /* return part of string that is between the argument indexes */
// let str = 'GODZILLA'
// str.substring(0,2) // "GOD"

// // toLocaleLowerCase()
// /* return calling string value to lowercase */
// str.toLocaleLowerCase("godzilla")


// // toLocaleUpperCase()
// /* return calling string value to uppercase */

// // toLowerCase()
// /* Turn to lowercase input */

// // toString()
// /* turn input to a String */

// // toUpperCase()
// /* Turn to uppercase input */

// // trim()
// /* removes white space from input string */

// // trimEnd()
// /* Remove whitespace from end of string input */

// // trimStart()
// /* Remove whitespace from start of string input */



// /* give me 3 example using all the String functions above over the same String*/

const pocho = "Hola ese! How are you amigo!!!"
console.log(pocho.charAt(8))                          
console.log(pocho.charCodeAt(8))
console.log(pocho.codePointAt(8))
console.log(pocho.concat(pocho))
console.log(pocho.endsWith("!!!"))
console.log(pocho.includes("amigo"))
console.log(pocho.indexOf("ese!"))
console.log(pocho.lastIndexOf("amigo!!!"))
console.log(pocho.normalize())
console.log(pocho.padEnd(5, "!!@#41"))
console.log(pocho.padStart(5, "!@#41"))
console.log(pocho.repeat(5))
console.log(pocho.trim(" "))
console.log(pocho.toUpperCase("SALUDOTE"))
console.log(pocho.toLowerCase("saludito"))
console.log(pocho.substring(7, 15))
console.log(pocho.startsWith("Hola"))
console.log(pocho.slice(15, 19))
console.log(pocho.replace(/\s/gi, "#"))

const homework = "Oh my god, im so hungy, tired, my eyes hurt... help me Beatles!!!"
console.log(homework.charAt(16))                          
console.log(homework.charCodeAt(16))
console.log(homework.codePointAt(16))
console.log(homework.concat(pocho))
console.log(homework.endsWith("!!!"))
console.log(homework.includes("Beatles"))
console.log(homework.indexOf("hungry!"))
console.log(homework.lastIndexOf("Beatles!!!"))
console.log(homework.normalize())
console.log(homework.padEnd(5, "!!@#41"))
console.log(homework.padStart(5, "!@#41"))
console.log(homework.repeat(70))
console.log(homework.trim(" "))
console.log(homework.toUpperCase("NOSEQUEESTO"))
console.log(homework.toLowerCase("niestomaifrend"))
console.log(homework.substring(3, 19))
console.log(homework.startsWith("tired"))
console.log(homework.slice(2, 7))
console.log(homework.split(""))
console.log(homework.replace(/\s/gi, "@#@#@#"))

const locura = "This might end in a crazy nightmare if i do not eat eat eat!!! please give me food..!!!>!>!>!"
console.log(locura.charAt(12))                          
console.log(locura.charCodeAt(17))
console.log(locura.codePointAt(6))
console.log(locura.concat(pocho, homework))
console.log(locura.endsWith("!!!"))
console.log(locura.includes("food"))
console.log(locura.indexOf("crazy"))
console.log(locura.lastIndexOf("!"))
console.log(locura.normalize())
console.log(locura.padEnd(5, "!!@#41"))
console.log(locura.padStart(5, "!@#41"))
console.log(locura.repeat(70))
console.log(locura.trim(" "))
console.log(locura.toUpperCase("NOSEQUEESTO"))
console.log(locura.toLowerCase("niestomaifrend"))
console.log(locura.substring(1, 2))
console.log(locura.startsWith("nightmare"))
console.log(locura.slice(0, 10))
console.log(locura.split("**"))
console.log(locura.replace(/\s/gi, "#$%#$%"))
console.log("-------------------------")
console.log("No trono :)")

