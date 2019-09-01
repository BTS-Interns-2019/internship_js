# Jokes (promises)

## Happy path
* Write an async function called `giveMeAJoke` which takes an `apiUrl` and `category` which returns a promise.
* When you got the joke it should have `saySetup` and `sayPunchLine` methods.
  * `saySetup` returns `setup`
  * `sayPunchLine` returns `delivery`

## Handle error cases
* Getting jokes from a another API URL may return a different data shape, throw this error message `new Error('No jokes at url: {url}')` for an unexpected shape.


## Expected api response
```js
{
  "category": "Miscellaneous",
  "type": "twopart",
  "setup": "I asked my wife \"Am I the only one you've been with?\"",
  "delivery": "\"Yes... but I've had some sevens and eights.\" She replied.",
  "id": 83
}
```

## API endpoint
```
https://sv443.net/jokeapi/category/miscellaneous?type=twopart
```

### Ussage example
```js
giveMeAJoke('http://great.jokes/christmas').then((joke) => {
  console.log(joke.saySetup());
  console.log(joke.sayPunchLine());
})
```


## TDD
Create at least 1 test case for each bullet in the description

Documentation here https://jestjs.io/docs/en/asynchronous.html