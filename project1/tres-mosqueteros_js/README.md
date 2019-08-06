# The 8 queen problem
##objective
To create a function on javascript that will place in a coordinated - based console application, the arrengement of 8 queens in function of a chess board, without being plache in check with each other.

##globals questions
1. _what are the entries?_
board size, first queen position.
2. _which are the outputs?_
A matrix with the final position of the 8 queens.

##restrictions
1. _(xi,yi)_ is the position of the _i-esima_ queen.
2. _xi_ it's a value between 0 and 7.
3. _yi_ it's a value between 0 and 7.
4. _every the xi are diferents_ there's no 2 queens on the same row.
5. _every the yi are diferents_ there's no 2 queens on the same colum.
6. _every xi - yi are diferents_ there's no 2 queens on the same diagonal, up - left and down - right.
7. _every xi + yi are diferents_ there's no 2 queens on the same diagonal, up - left and down - right.

##theoretical framework
For the current case, la exemplification of a logic function will be used, in which the behavior of one of the most important chess pieces, the queen, will be exposed.
It is intended to develop a function in javascript, which is executed in console mode, which will place the queens corresponding to the objective set at the beginning of this project and that fulfills the predefined function.

###the n-queens algoritm
The algorithm of the n-queens is a functional method for understanding the development of structured programming.
The list of applicable rules are each board position (rows and columns). The most efficient way to solve it is to place a queen in each row, in case you cannot place a queen in a row, go back to choose a new path.
there are different cases that could be analyzed to solve this problem, each one represents almost similar characteristics when trying to follow the behavior of the tower; Then, finding a satisfactory solution will depend largely on choosing the initial box well.

##rules/mechanics
Chess is a two-player game, where one player is assigned white pieces, and the other black pieces. Each player has 16 pieces at the start of the game: 1 king, 1 queen, 2 bishops, 2 horses, 2 towers and 8 pawns.
The queen is considered as the strongest piece of the board. You can move any number of boxes in a straight line, both horizontally or vertically, and diagonally. The queen moves like the tower and the bishop together.

# the 8 queen problem

https://en.wikipedia.org/wiki/Eight_queens_puzzle

your function will receive 2 arguments

1. size of mesh
1. coordinates of one queen

```js
function queenProblem(4, [x,y]) {
    // Your code Here
    return [
        [ 0,  1,  0,  0],
        [ 0,  0,  0,  1],
        [ 1,  0,  0,  0],
        [ 0,  0,  1,  0]
    ];
}
```

```js
[
    [
        "Erick Vazquez",
        "Miguel Vivanco",
        "Luis Carlos",
    ],
    [
        "Estefania Cano",
        "Cristian Plascencia",
        "Ricardo Martin",
    ],
    [
        "Sergio Rivera",
        "Itati Viridiana",
        "Marlon Torres",
    ],
    [
        "Urbano Gonzalez",
        "David Martin",
        "Hector Soto",
    ],
    [
        "Edgar David",
        "Emmanuel Rubio",
        "Nestor Lira",
    ]
]
```
