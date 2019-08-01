# Fire in the whole

There are some candles in a room that you have to blow before they start a fire
as they are of different sizes, you can not blow all of them at the same time only the tallest ones

For example: there are 4 candles of height 4,4,1,3 you will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.

you will receive 1 or more Arrays of candles
doesn't matter how many arrays you receive, you will return only one number of candles that you where able to blow the first time.

```js
function avoidingFire(arrays/*one or more*/) {

return int /* how many are you able to blow the first time */
}

test('blow candles', () => {
  expect(avoidingFire([1,2,3,4,5,6])).toBe(1);
  expect(avoidingFire([6,5,4,3,2,1,2,3,4,5,6])).toBe(2);
  expect(avoidingFire([2,2,2,1])).toBe(3);
  expect(avoidingFire([2,2,2,1], [6,9,2], [7,7,1,2], [8,8,1,7,3])).toBe(1);
})

```

```js
function avoidingFire(...arr) {
    let result = arr // [[1,2,3,4,5],[3,4,5,6],[4,5,6,7,8,8]]
    result = result.reduce((acc, item) => { return acc.concat(item) }, []) // [1,2,3,4,5,3,4,5,6,4,5,6,7,8,8]
    result = result.filter((item,i,iarr) => { return item === Math.max(...iarr)}) // [8,8]
    result = result.length; // 2
	return result // 2
}


avoidingFire([1, 2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7, 8, 8])
```
