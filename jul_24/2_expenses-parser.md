# Expenses Parser
As a developer I want to have a function that receives a list of expenses as multiline string and returns and object with the parsed data.

## Acceptance Criteria
* The input is a multiline string.
* The first line is numeric and represents the initial balance
* The following lines are expenses and they consist in 3 parts delimited by <space> `<id> <description> <cost>`
* The result must be an object with the keys `initialBalance <number>`, `expenses <array>`, `totalExpense <number>`, `averageExpense <number>`, `finalBalance <number>`
* The `expenses` array is a list of objects with the keys `id`, `description`, `cost`, `balance`

## Tech requirements
* The function must be named expensesParser.
* The function should be in a file called `expenses-parser_<yourname>.js`
* At the end of the file you *must add* `module.exports = expensesParser;`
* It must be able to ignore blank lines

## Example
Input
```js
const input = `1000.00
127 Video 7.45
128 Gasoline 16.10`
```

Output
```js
{
  initialBalance: 1000.00,
  expenses: [
    {
      id: 127
      description: 'Video',
      cost: 7.45,
      balance: 992.55
    },
    {
      id: 128
      description: 'Gasoline',
      cost: 16.10,
      balance: 976.45
    }
  ],
  totalExpense: 23.55,
  averageExpense: 11.775,
  finalBalance: 976.45
}
```

## Hints
To add elements at the end of an array you can use `yourarray.push(value)`

The new line character is `\n`