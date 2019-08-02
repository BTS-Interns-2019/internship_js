Write a function called smallest which will receive a positive number:

```js
num = 261235;
```

You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

You need to return an array with 3 items, the first item is the lowest number you could get, the second is the index of the digit you took and the third item is the index where you insert this digit.

An example could be

```js
smallest(261235) --> [126235, 2, 0] 
```

```js
smallest(83425825) --> [28342585, 6, 0]
```

```js
smallest(911111) --> [111119, 0, 6]
```