Write a function called closestAndSmallest which will receive a string of positive numbers such as:

```js
string = '444 2000 445 544'
```

The numbers are separated by the space, now let us call the weight of a number the sum of its digits. For example, 99 will have "weight" 18, 100 will have "weight" 1.

Two numbers are the "closest" if the difference of their weights is the smallest among them.

The output should be an array with two arrays inside, any of those two arrays will have 3 items, the first item is the weight of the number, the second item is the index of the number in the original string and the third one is the original number itself.

example:

```js
string = '103 123 4444 99 2000'
// The weights are 4, 6, 16, 18, 2
// function should return [[2, 4, 2000], [4, 0, 103]]
```

as you may notice in this example The smallest difference is 2. 4 (for 103) and 6 (for 123) have a difference of 2 too but they are not the smallest ones with a difference of 2 between their weights. you need to return the closest and smallest!

if there were two pairs which have the same difference and they have the same weight we need to return the first two according to their index in the string such as:

```js
string = '101 200 101'
// The weights are 2, 2, 2
// function should return [[2, 0, 101], [2, 1, 200]]
```

more examples:

```js
string = '80 71 62 53'
// All the weights are 8.
// function should return [[8, 0, 80], [8, 1, 71]]

string = '444 2000 445 544'
// The weights are 12, 2, 13, 13
// closest should return [[13, 2, 445], [13, 3, 544]]
```

444 and 2000 have the smallest weights (12 and 2) but not the smallest difference of weights, they are not the closest. Here the smallest difference is 0 and in the result, the indexes are in ascending order.


```js
string = '239382 162 254765 182 485944 468751 49780 108 54'
// The weights are: 27, 9, 29, 11, 34, 31, 28, 9, 9.
// function should return  [[9, 1, 162], [9, 7, 108]]
```
108 and 54 have the smallest difference of weights too, they also have the smallest weights but they don't have the smallest ranks in the original string.