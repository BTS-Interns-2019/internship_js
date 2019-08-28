# 8 Queens Problem
The 8 Queens Problem is a problem which involves placing 8 Queens in a 8x8 chessboard, in a way that none of them attacks another one. We define *attack* as having a Queen having another one within her range of attack. A Queen can move freely in any vertical, horizontal and diagonal direction. In other words, a Queen is being *attacked* when it is positioned in the range of another previously positioned Queen.

There's a variation to this problem in which the number of Queens, (and therefore the size of the chessboard) is a variable. This is called the N Queens Problem. It is basically the same as the 8 Queens Problem. And more than that, the 8 Queens Problem is a subproblem for the N Queens Problem. The rules are to place N number of Queens in an NxN size chessboard.

This problem usually expects a matrix with the positions of N Queens in the NxN chessboard as a solution.

There might be cases where there is no solution achievable given the position of the first Queen.

## Test Driven Development
Given a N which determines the number of Queens, and therefore the size of the chessboard, and the position of the first Queen, we proceed to explain the following basic tests.

### Basic Tests
1. Size of the board (NxN) is the same as the number of Queens
1. N = 4
1. N = 20
1. N = 10
1. N < 4 or N > 20
1. Coordinates for first Queen doesn't go beyond the size of the chessboard.
1. Coordinates for first Queen are in the right format.
1. Output must be an array [] and must not be empty.
1. Output has no Queens attacking one another.

<<<<<<< HEAD
=======
## Approach
To solve this problem, we opted to use a vector that contains all the Queens' locations in a single array. In this vector, you can find a sequence of numbers ranging from `0` to `n - 1`. The number of each element of the vector represents the row, and the position of the number in the vector represents the column. 

In other words, the number specifies in which row is the Queen located, and the position in the vector specifies in which column the Queen can be found. 

An example of a vector that contains a solution for a 4x4 chessboard with a Queen in the position `[1, 0]` would be:

```js
vector = [1, 3, 0, 2]
```

Transforming this vector to the array would result in:

```js
[
  [0, 0, 1, 0], // Row: 0, Column: 2
  [1, 0, 0, 0], // Row: 1, Column: 0
  [0, 0, 0, 1], // Row: 2, Column: 3
  [0, 1, 0, 0]  // Row: 3, Column: 1
]
```

### How to obtain the vector
To obtain the vector, we need to iterate over a range of numbers from `0` to `n-1` that can satisfy the following conditions:

1. The number cannot be equal to the previous number in the vector (initially the position of the first Queen).
1. The number cannot be equal to the previous number in the vector plus/minus 1.
1. The number cannot be already included in the vector.
1. The subtraction of the number and its would-be position in the vector cannot be the same as the same operation of any other number in the vector. E.g.
```js
const number = 2;
const position = 2;
const result = number - position;

const descDiagonal = [0, 2, 4]; // In this case, the number would be discarded as an option for the vector
```
1. The sum of the number and its would-be position in the vector cannot be the same as the same operation of any other number in the vector.
```js
const number = 2;
const position = 2;
const result = number + position;

const descDiagonal = [0, 2, 4]; // In this other case, the number would be discarded as an option for the vector
```

These last two points is to make sure that none of the Queens represented in the vector attacks each other in a diagonal fashion.

>>>>>>> master

## Instructions

 In order to solve the N queen problem, our function need to receive 2 arguments:

1. Size of mesh, a number between 4 and 20, the limits for this function
1. Coordinates of one queen, an array with 2 elements that represents positions in 'x' and 'y', also numbers

```js
<<<<<<< HEAD
queenProblem(4, [2,0])
=======
queenProblem(4, [2,0]) 
>>>>>>> master
```
In this case, we expect a "square" array with 4 array elements of length 4 each and with the seed queen in row 2 and column 0 as input data \
The output data must be a single solution with Queens positions so they can't attack each other, with only one Queen per row, column and theirs diagonals \
Queens are represented with number 1 and empty spaces with 0
```js
<<<<<<< HEAD

=======
>>>>>>> master
    [
      [ 0,  1,  0,  0],
      [ 0,  0,  0,  1],
      [ 1,  0,  0,  0],
      [ 0,  0,  1,  0]
    ]
```
<<<<<<< HEAD
=======
## Functions
To resolve the problem we make some functions to help us, three of them help us to get the posible solution for the problem, every function return a vector, a vector is a simple array of numbers, the position in the vector represnts a column in our board and the value is a row. 

1. **solveBoard**: this function call a the other functions depending on the position of first queen.
1. **solveFromFirstColumn**: itereates over the vector form left to rigth, when the first queen is in the position 0.
1. **solveBoardRightToLeft**: iterates over the vector from right to left, this function is called when the first queen is in the las position of the vector.
1. **solveFromLastColumn**: iterates over the vector form the middle. It's called when the first queen is not in the begining or the end of the vector.
1. **solveFromMiddleColumn**: returns the board with the solution if the others functions return true, else this will return a board with 0 in every position.
>>>>>>> master
