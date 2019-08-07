# Project 2
### Team: *filthy_acts_for_a_reasonable_price*
## Morse Code
### Introduction
Morse Code is a method of character encoding used in telecommunications that transforms text characters as a sequence of two different signals called *dots* and *dashes*.

The International Morse Code encodes the 26 English letters from `A` to `Z`, some non-English characters, the arabic numbers `0-9`, and a small set of punctuation signals. **There is no distinction between lower and upper case letters within the Morse code.**

### Problem
The problem established in this exercise has the following requirements:

* Transform the string given in Morse code to a decoded message.
* The input string has `1`'s and `0`'s representing the signals used in Morse code.
* One signal (*dot* or *dash*) is represented using units. One unit is equal to 2 values, e.g. One unit of 1 = 11 and one unit of 0 = 00. This is to make sure that the signal is not lost.
* The `1`'s are used to represent the *dots* and *dashes*, while the `0`'s are used to represent the spaces between parts of the letter, between letter, and between words.
* The length of one *dot* is one unit (`11`).
* The length of one *dash* is three units (`111111`).
* The length of the space between parts of the same letter is one unit (`00`).
* The length of the space between letters is three units (`000000`).
* The length of the space between words is seven units (`00000000000000`).

E.g.
```js
'HEY JUDE' == '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'
```

With this information, the function decodes any messages "encrypted" in Morse code using the system described above.

### Solution
The function implemented comes with two checks to determine if the input string is correctly formatted and can be used to decode its hidden message.

The first check determines if there is any other character in the string that is different than the only two characters allowed: `1` and `0`. If the function finds that there's a different character, the input string is returned.

```js
if (input.match(/[^0-1]/g))
```

The second check determines if the input string has an even length, given that all the signals will be of units composed of two values. Like a *dot* would be a `11`. If it is not of even length, the input string is returned.

```js
if (input.length % 2 !== 0)
```

After both checks were confirmed to be false, a map with all the characters encoded is created to be used as reference when determining the value of a certain letter. The map consists of key-value pairs, where the key is the encoded letter, e.g. `1100111111`, and the value is the letter, e.g. `A`. 

```js
const ref = { // Morse code map
  '1100111111': 'A',
  '111111001100110011': 'B',
  '1111110011001111110011': 'C',
  // ...
}
```

We know that all words have to be separated by a sequence of 14 `0`'s, so a new array `words` is created to store all the words in the encoded message based on this. 

Once all the words are stored, the function now iterates over each word and over each letter to obtain the corresponding value of the letter, using the reference map established earlier. A new string using the decoded letters is returned.
## Fibonacci (BigInt)
## Kindergarden Sum