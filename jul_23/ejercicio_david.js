// Exercises 23 jul
// Number and String

// Number

// MAX_VALUE
/* describe what it is? */
// The Number.MAX_VALUE property represents the maximum numeric value representable in JavaScript.
console.log(Number.MAX_VALUE);

// MIN_VALUE
/* describe what it is? */
// The Number.MIN_VALUE property represents the smallest positive numeric value representable in JavaScript.
console.log(Number.MIN_VALUE);

// NaN
/* describe what it is? */
// The global NaN property is a value representing Not-A-Number.
console.log(NaN);

// NEGATIVE_INFINITY
/* describe what it is? */
// The Number.NEGATIVE_INFINITY property represents the negative Infinity value
console.log(Number.NEGATIVE_INFINITY);

// POSITIVE_INFINITY
/* describe what it is? */
// The Number.POSITIVE_INFINITY property represents the positive Infinity value.
console.log(Number.POSITIVE_INFINITY);

// EPSILON
/* describe what it is? */
// The Number.EPSILON property represents the difference between 1 and the smallest floating point number greater than 1.
console.log(Number.EPSILON);

// MIN_SAFE_INTEGER
/* describe what it is? */
// The Number.MIN_SAFE_INTEGER constant represents the minimum safe integer in JavaScript (-(253 - 1)).
console.log(Number.MIN_SAFE_INTEGER);

// MAX_SAFE_INTEGER
/* describe what it is? */
// The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (253 - 1).
console.log(Number.MAX_SAFE_INTEGER);

// parseFloat()
// The parseFloat() function parses an argument and returns a floating point number.
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('314e-2'));
console.log(parseFloat('0.0314E+2'));
console.log();

// parseInt()
// The parseInt() function parses a string argument and returns an integer of the specified radix.
console.log(parseInt('0xF', 16));
console.log(parseInt('F', 16));
console.log(parseInt('17', 8));
console.log();

// isFinite()
// The global isFinite() function determines whether the passed value is a finite number. If  needed, the parameter is first converted to a number.
console.log(isFinite(0));
console.log(isFinite(-Infinity));
console.log(Number.isFinite(NaN));
console.log();

// isInteger()
// The Number.isInteger() method determines whether the passed value is an integer.
console.log(Number.isInteger(5.0));
console.log(Number.isInteger(Math.PI));
console.log(Number.isInteger('10'));
console.log();

// isNaN()
// The isNaN() function determines whether a value is NaN or not.
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN('37.37'));
console.log();

// isSafeInteger()
// The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer.
console.log(Number.isSafeInteger(3));
console.log(Number.isSafeInteger(3.0));
console.log(Number.isSafeInteger(Math.pow(2, 53)));
console.log();

// toExponential()
// The toExponential() method returns a string representing the Number object in exponential notation.
console.log(Number(77.1234).toExponential());
console.log(Number(77.1234).toExponential(2));
console.log(7 .toExponential(4));
console.log();

// toFixed()
// The toFixed() method formats a number using fixed-point notation.
console.log((1.23e+20).toFixed(6));
console.log((1.23e-10).toFixed(2));
console.log(-2.34.toFixed());
console.log();

// toPrecision()
// The toPrecision() method returns a string representing the Number object to the specified precision.
console.log((1.23e+20).toPrecision(6));
console.log((1.23e-10).toPrecision(2));
console.log(-2.34.toPrecision());
console.log();


// String

// fromCharCode()
// The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
console.log(String.fromCharCode(65, 66, 67));
console.log(String.fromCharCode(0x2014));
console.log(String.fromCharCode(0x12014));
console.log();

// fromCodePoint()
// The static String.fromCodePoint() method returns a string created by using the specified sequence of code points.
console.log(String.fromCodePoint(42));
console.log(String.fromCodePoint(65, 90));
console.log(String.fromCodePoint(0x2F804));
console.log();

// charAt()
// The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
console.log('Brave new world'.charAt(0));
console.log('Brave new world'.charAt(1));
console.log('Brave new world'.charAt(999));
console.log();

// charCodeAt()
// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
console.log('Brave new world'.charCodeAt(0));
console.log('Brave new world'.charCodeAt(1));
console.log('Brave new world'.charCodeAt(999));
console.log();

// codePointAt()
// The codePointAt() method returns a non-negative integer that is the Unicode code point value.
console.log('Brave new world'.codePointAt(0));
console.log('Brave new world'.codePointAt(1));
console.log('Brave new world'.codePointAt(999));
console.log();

// concat()
//The concat() method concatenates the string arguments to the calling string and returns a new string.
console.log('Hello'.concat(' ', 'World'));
console.log();

// endsWith()
// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
console.log('Hello'.endsWith('lo', 5));
console.log('Hello'.endsWith('lo', 4));
console.log();

// includes()
//The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
console.log('Blue Whale'.includes('Blue'));
console.log('Blue Whale'.includes('blue'));
console.log();

// indexOf()
// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex.
console.log('Blue Whale'.indexOf('Whale', 0));
console.log('Blue Whale'.indexOf('Whale', 5));
console.log('Blue Whale'.indexOf('Whale', 6));
console.log();

// lastIndexOf()
// ☺The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex.

console.log('canal'.lastIndexOf('a'));
console.log('canal'.lastIndexOf('a', 2));
console.log('canal'.lastIndexOf('a', 0));
console.log();

// localeCompare()
//The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
console.log('a'.localeCompare('a'));
console.log('a'.localeCompare('b'));
console.log('b'.localeCompare('a'));
console.log();

// normalize()
// The normalize() method returns the Unicode Normalization Form of a given string (if the value isn't a string, it will be converted to one first).
console.log('Hello World'.normalize());
console.log();

// padEnd()
// The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
console.log('abc'.padEnd(10));
console.log('abc'.padEnd(10, "foo"));
console.log('abc'.padEnd(6, "123456"));
console.log();

// padStart()
// The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
console.log('abc'.padStart(10));
console.log('abc'.padStart(10, "foo"));
console.log('abc'.padStart(6,"123465"));
console.log();

// repeat()

console.log('Hello World'.repeat(2));
console.log();


// replace()
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
console.log('Hello World'.replace(/world/i, 'David'));
console.log();

// search()
// The search() method executes a search for a match between a regular expression and this String object.
console.log("hey JudE".search(/[A-Z]/g));
console.log("hey JudE".search(/[.]/g));
console.log();

// slice()
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
console.log('The morning is upon us.'.slice(12));
console.log('The morning is upon us.'.slice(1, 8));
console.log('The morning is upon us.'.slice(4, -2));
console.log();

// split()
// The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
console.log('David Martin Silva Cruz'.split(' '));
console.log('David Martin Silva Cruz'.split());
console.log();

// startsWith()
// The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
console.log('Saturday night plans'.startsWith('Sat'));
console.log('Saturday night plans'.startsWith('Sat', 3));
console.log();

// substring()
// The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
console.log('Mozilla'.substring(2));
console.log('Mozilla'.substring(1, 3));
console.log();

// toLocaleLowerCase()
// The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
console.log('ALPHABET'.toLocaleLowerCase());
console.log();

// toLocaleUpperCase()
// The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
console.log('alphabet'.toLocaleUpperCase());
console.log();

// toLowerCase()
// The toLowerCase() method returns the calling string value converted to lower case.
console.log('ALPHABET'.toLowerCase());
console.log();

// toString()
// The toString() method returns a string representing the specified object.
x = new String('Hello World');
console.log(x.toString());
console.log();

// toUpperCase()
// The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
console.log('alphabet'.toUpperCase());
console.log();

// trim()
// The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters.
console.log('   foo  '.trim());
console.log();

// trimEnd()
// The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.
console.log('   foo  '.trimEnd());
console.log();

// trimStart()
// The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.
console.log('   foo  '.trimStart());
console.log();


/* give me 3 example using all the String functions above over the same String*/

// 'Hello World"
var str1 = ' Hello World ';
x = new String(' Hello World ');
console.log(str1.charAt(1));
console.log(str1.charCodeAt(1));
console.log(str1.codePointAt(1));
console.log(str1.concat('!'));
console.log(str1.endsWith('d '));
console.log(str1.includes('Hello'));
console.log(str1.indexOf('World', 0));
console.log(str1.lastIndexOf('d'));
console.log(str1.localeCompare(' '));
console.log(str1.normalize());
console.log(str1.padEnd(16, "!"));
console.log(str1.padStart(16, "!"));
console.log(str1.repeat(2));
console.log(str1.replace(/world/i, 'David'));
console.log(str1.search(/[A-Z]/g));
console.log(str1.slice(6));
console.log(str1.split(' '));
console.log(str1.startsWith(' Hell'));
console.log(str1.substring(1,5));
console.log(str1.toLocaleLowerCase());
console.log(str1.toLocaleUpperCase());
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(x.toString());
console.log(str1.trim());
console.log(str1.trimEnd());
console.log(str1.trimStart());

// ' Hey You '
var str2 = ' Hey You ';
x = new String(' Hey You ');
console.log(str2.charAt(1));
console.log(str2.charCodeAt(1));
console.log(str2.codePointAt(1));
console.log(str2.concat('!'));
console.log(str2.endsWith('u '));
console.log(str2.includes('Hey'));
console.log(str2.indexOf('You', 0));
console.log(str2.lastIndexOf('u'));
console.log(str2.localeCompare(' '));
console.log(str2.normalize());
console.log(str2.padEnd(16, "!"));
console.log(str2.padStart(16, "!"));
console.log(str2.repeat(2));
console.log(str2.replace(/world/i, 'David'));
console.log(str2.search(/[A-Z]/g));
console.log(str2.slice(6));
console.log(str2.split(' '));
console.log(str2.startsWith(' Hey'));
console.log(str2.substring(1,5));
console.log(str2.toLocaleLowerCase());
console.log(str2.toLocaleUpperCase());
console.log(str2.toLowerCase());
console.log(str2.toUpperCase());
console.log(x.toString());
console.log(str2.trim());
console.log(str2.trimEnd());
console.log(str2.trimStart());

// ' Hey David '
var str3 = ' Hey David ';
x = new String(' Hey David ');
console.log(str3.charAt(1));
console.log(str3.charCodeAt(1));
console.log(str3.codePointAt(1));
console.log(str3.concat('!'));
console.log(str3.endsWith('d '));
console.log(str3.includes('Hey'));
console.log(str3.indexOf('David', 0));
console.log(str3.lastIndexOf('d'));
console.log(str3.localeCompare(' '));
console.log(str3.normalize());
console.log(str3.padEnd(16, "!"));
console.log(str3.padStart(16, "!"));
console.log(str3.repeat(2));
console.log(str3.replace(/world/i, 'Martin'));
console.log(str3.search(/[A-Z]/g));
console.log(str3.slice(6));
console.log(str3.split(' '));
console.log(str3.startsWith(' Hey'));
console.log(str3.substring(1,5));
console.log(str3.toLocaleLowerCase());
console.log(str3.toLocaleUpperCase());
console.log(str3.toLowerCase());
console.log(str3.toUpperCase());
console.log(x.toString());
console.log(str3.trim());
console.log(str3.trimEnd());
console.log(str3.trimStart());

// console.log(Number('37.37'));
// console.log(Number(null));
// console.log(Number(true));