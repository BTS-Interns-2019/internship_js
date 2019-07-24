# Group by state
As a developer I want to have a function that receives a list of people and returns a set of groups by state.

## Acceptance Criteria
* The input is a multiline string.
* Each line of the string is a person with `name`, `address` and `state` delimited by `,`
* The result must be an object containing each state ussing *state code* as key
* Each state must include `code`, `name`, and `people`
* People is an array filled with each person in the list that lives in that state, and must include `name`, `address`, `state`

## Tech requirements
* The function must be named `groupByState`.
* The function should be in a file called `group-by-state_<yourname>.js`
* At the end of the file you *must add* `module.exports = groupByState;`
* It must be able to ignore blank lines

## Example
Input
```js
const input = `John Snow, 341 Kings Road, KL
Arya Stark, 22 No Where St, WF
Jaime Lannister, 73 1st Street, KL`
```

Output
```js
{
  KL: {
    code: 'KL'
    name: "King's Landing",
    people: [
      {
        name: 'John Snow',
        address: '341 Kings Road',
        state: 'KL'
      },
      {
        name: 'Jaime Lannister',
        address: '73 1st Street',
        state: 'KL'
      }
    ]
  },
  WF: {
    code: 'WF'
    name: 'Winter Felt',
    people: [
      {
        name: 'Arya Stark',
        address: '22 No Where St',
        state: 'WF'
      }
    ]
  },
}
```

## Resourses
States
```
KL => King's Landing
WF => Winter Felt
BR => Braavos
HG => Highgarden
II => Iron Islands
```
