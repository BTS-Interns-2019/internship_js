# Jokes (promises)

## Happy path
* Write an async function called `giveMeAJoke` which takes an `apiUrl` and `jokeId` which returns a promise.
* The data will need to be filtered to get the specified joke by id.
* When you got the joke it should have `saySetup` and `sayPunchLine` methods.
* Each one returns as string the coresponding part of the joke

## Handle error cases
* If a joke is not found return `new Error('No jokes found id: {jokeId}')` where jokeId should me populated with the correspoding value
* Getting jokes from a another API URL may return a different data shape, throw this error message `new Error('No jokes at url: {url}')` for an unexpected shape.


## Expected api response
```js
{
  jokes: [
    {
      id: 101,
      setup: "Who is Santa's favorite singer?",
      punchLine: "Elf-is Presley!"
    },
    {
      id: 103,
      setup: "Who is the Elf?",
      punchLine: "Elf-is Presley!"
    }
  ]
}
```

## API endpoint
```
http://great.jokes/christmas
```

### Ussage example
```js
giveMeAJoke('http://great.jokes/christmas').then((joke) => {
  console.log(joke.saySetup());
  console.log(joke.sayPunchLine());
})
```