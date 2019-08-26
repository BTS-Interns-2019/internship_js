# Person Name (getters/setters)

Create a "constructor" function called `Person` that receives a person name as params and creates an object with name, lastname and full name
any of those values can be changed and the other 2 should change in consequence

## Acceptance Criteria
* Use of `new` to create objects.
* Contrsuctor receives `name` and `lastName`.
* The resulting Object has an aditional `fullName` prop composed by `name` + `(space)` + `lastName`.
* If name or last name changes `fullName` must reflect the change.
* If `fullName` changes, `name` and `lastName` must reflect the change, everything before the first space is `name` and the rest is `lastName`.

## TDD
Do at least 3 different usefull test

## Examples
```js
const p = new Person('Juan', 'Perez');
console.log(p.fullName); // Juan Perez

p.name = "Pancho";
console.log(p.fullName); // Pancho Perez

p.fullName = "John Smith";
console.log(p.name); // John
console.log(p.lastName); // Smith
```