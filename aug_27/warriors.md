# Warriors (prototypes)

* file name `warriors_<branchName>.js` for functions definitions.

Create the personas for a battle game that are able to fight between each other
There would be 2 different persona types but there can be multiple persons of each type

## Tech definitions
* Create a base object for the shared actions between personas.
* each Persona has
  * `healthPoints`: number of points that it has, starting with 100
  * `shieldPoints`: number of points that it has, starting with 20
  * `attackPoints`: number of points that it can reduce to opponents
  * `isDead`: <boolean> a flag to now if it has been killed. Killed means it has no health
  * method `attack`: receives a target (object) and reduces the according number of points, first it tries to defeat the `shieldPoints` and then the `healtPoints`, it returns a boolean indicating if it has defeated the opponent or not
  * method `heal`: receives a number of points that will be added to `healthPoints` returns the new `healthPoints` value
  * method `healUnit`: same as `heal` but it affects all the unit members (`Ninja` or `Samurai`) returns nothing
* Ninja persona (constructor called `Ninja`) with
  * `attackPoints` starting with 20
  * `wapon` string to indicate weapon in use
  * method `jutsu` same as `attack` but it strikes with 2x `attackPoints`
* Samurai persona (constructor called `Samurai`) with
  * `attackPoints` starting with 10
  * `armor` string to indicate the armor name he has
  * method `breathing` same as `attack` but it strikes with 2.5x `attackPoints`

* all points can be different for each instance




## Example I/O
```js
const ninjaGaiden = new Ninja();
const ninjaNaruto = new Ninja();

const samTanjiro = new Samurai();
const samBatusai = new Samurai();

ninjaGaiden.heal(10); // 110
ninjaGaiden.healUnit(20); // undefined
ninjaGaiden.healt; // 130
ninjaNaruto.healt; // 120

samTanjiro.healt; // 100
samBatusai.breathing(ninjaGaiden); // false
ninjaGaiden.healt; // 105
ninjaGaiden.isDead; // false
```

## TDD
* file name `warriors_<branchName>.test.js`.

Write at least 3 test cases for each instance.

