# Project V_2

## Morse Code 

### Introduction
Morse code is a character encoding scheme used in telecommunication that encodes text characters as standardized sequences of two different signal durations called dots and dashes or dits and dahs.
Morse code is named for Samuel F. B. Morse, an inventor of the telegraph. 
The International Morse Code encodes the 26 English letters A through Z, some non-English letters, the Arabic numerals and a small set of punctuation and procedural signals (prosigns). There is no distinction between upper and lower case letters. Each Morse code symbol is formed by a sequence of dots and dashes. The dot duration is the basic unit of time measurement in Morse code transmission. The duration of a dash is three times the duration of a dot. Each dot or dash within a character is followed by period of signal absence, called a space, equal to the dot duration. The letters of a word are separated by a space of duration equal to three dots, and the words are separated by a space equal to seven dots.

### Problem
The present exercise established the next conditions:
* Received one argument on a string.
* this string contains the message on a series of "0" and "1" that represents the morse code.
* one signal of morse code (dots or dash) represents by unit. this units are represented by 2 simbols, 11 = 1, and 00 = 0.
* the 1 is used to represent the _dots_ and _dash_, and the 0 represents the spaces.
* one dot is equal to 11.
* one dash is equal to 111111.
* a space between characters of the same letter is equal to 000000.
* a space between words is equal to 00000000000000
a simple example is:
```j
'HOLA' == '1100110011001100000011111100111111001111110000001100111111001100110000001100111111'
```
this information is the way that we starts this function.

### Solution
1. the function called _morse_ take a string as an argument.
2. inside there is a object that contains the alphabet in forms of "0" and "1"
3. then the function take the string with the message and search for every element that compose, compare letter by letter on the object.
4. once finds the letter corresponding, take it and placed in the string call _strMessage_
5. at last the function print the result message, being this the decode of the original message

## Fibonacci (bigint)

### Introduction
In mathematics, the Fibonacci numbers, commonly denoted Fn form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

### Problem
the present problem has the next requeriments:
* take a number a return the fibonacci sequence into the given position.
* the position is a natural number greater than zero or equal.
* It is expected to receive a large position.
* to be able to do that javascript offers variable functionality named _bigint_, wiche allows to represents number larger than  2^53.

### Solution 
1. The function called _fibonacci_ receive one argument that represents the number we want to knok it's fibonacci sum.
2. then stars to make the sum, but first check a condition.
3. if the number is already calculated, return that number.
4. else if the number is not calculated, starts to make the sum with the last two numbers calculated.
5. this operation is made by recursivity.
6. at last the result is storaged in an array, that will return with teh resul.

## Kindergarten sum

### Introduction
Actually the computers can resolve operation in a matter of milliseconds, and in that way can be able to give results a operation that take some minutes to a human.
When we were children we were taught to add numbers of more than two digits, adding type column by column. And easy example is:
1. add 123 plus 321.
2. separate them into individuals items (1 2 3 and 3 2 1 ).
3. sum each item one by one.
```
  1 2 3
+ 3 2 1
_________
  4 4 4 
```

### Problem
the problem to solve the raises the following:
* two inputs are given in form on a string, that represents the numbers to add.
* the operation of addition must be performed on the way we added when we were kids.
* the result must be an string that represents the result of the addition of the twu numbers given.

### Solution
1. the function called _kSum_ receive two arguments in a form of strings, that represents the two numbers to add.
2. both strings are separated in indivualds items
3. then boths are inverted and the operation begins.
4. all the elements are added starting from the last, continuing like this until reaching the first.
5. the add of each element is storaged on a array.
6. when the operation ends, the array is inverted to represent the number in a normal way.
7. the function return the result of the add.
