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


## Instructions

 In order to solve the N queen problem, our function need to receive 2 arguments:

1. Size of mesh, a number between 4 and 20, the limits for this function
1. Coordinates of one queen, an array with 2 elements that represents positions in 'x' and 'y', also numbers

```js
queenProblem(4, [2,0])
```
In this case, we expect a "square" array with 4 array elements of length 4 each and with the seed queen in row 2 and column 0 as input data \
The output data must be a single solution with Queens positions so they can't attack each other, with only one Queen per row, column and theirs diagonals \
Queens are represented with number 1 and empty spaces with 0
```js

    [
      [ 0,  1,  0,  0],
      [ 0,  0,  0,  1],
      [ 1,  0,  0,  0],
      [ 0,  0,  1,  0]
    ]
```