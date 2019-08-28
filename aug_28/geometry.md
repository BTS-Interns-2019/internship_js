# Geometry (prototypes)

* file name `geometry_<branchName>.js` for functions definitions.

Create constructors for 2d and 3d figures

## Tech definitions
* Create a base object for the shared actions between figures.
* each figure has
  * constructor
    * Define all needed mesures to know the figure dimension
  * getters
    * `descriptionObj`: an object representation of the figure with:
      - `type`: \<string> as
      - `mesures`: \<object> key value of each needed messure to define the figure
      - valid names are `base`, `height`, `radius`, `vHeight` in this order
    * `description`: a text representation of the figure, based on `descriptionObj`
      * example `Cube of base = 10`
    * `area`: \<number>
    * `perimeter`: \<number>

* Create 2d objects for
  * `Rectangle`
  * `Square`
  * `Triangle`
  * `Circle`

* Create 3d objects for
  * Cube
  * PrismRectangle
  * PrismTriangle
  * Cilinder
  * each 3d object has
    * `area`: the sumatory of the area of all the faces
    * `perimeter`: perimeter of the base
  * each 3d object can be created with a corresponding 2d Object instead of messures
    * if the 2d object is not valid for the 3d object throw an error saying
      * Do this validation based in the prototype
      * `"Error creating <objectType>: It expects an object of Type <expected 2d object type> but got <given 2d object type> instead"`



## Example I/O
```js
const square = new Square(10);
square.perimeter; // 40

const cube = new Cube(10);
cube.perimeter; // 40
cube.area; // 240
cube.descriptionObj;
// {
//   type: 'Cube',
//   mesures: {
//     base: 10
//   }
// }
cube.description; // Cube of base = 10


const triangle = new Triangle(10, 11);
const fakeCube = new Cube(triangle, 20) // [error]
// Error creating Cube: It expects an object of Type Square but got Triangle instead
```

## TDD
* file name `geometry_<branchName>.test.js`.

Write at least 1 test cases for item in the Tech definitions list.

