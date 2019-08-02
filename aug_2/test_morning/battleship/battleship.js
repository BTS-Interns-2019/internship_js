//Miguel Angel Vivanco Maldonado

/* TABLERO
-   A   B   C   D   E   F   G   H   I   J   K
1
2
3
4
5
6
7
8
9
 
---Botes---!* Necesario separacion de un espacio entre ellos
Carrier         5 pos
Battleship      4 pos
Cruiser         3 pos
Submarine       3 pos
Destroyer       2 pos

Each boat is represented by an array of 2 coordinates, ex ['F9', '3A']

    The coordinates represent the limits of the ship
    It can start with a letter or a number but it must have both
    Letter are given always in uppercase

The function will return a boolean indicating if all the boats have been correctly placed or not
*/

function isBoardReady(boats){
    let board = [['A1','B1','C1','D1','E1','F1','G1','H1','I1','J1','K1'],
        ['A2','B2','C2','D2','E2','F2','G2','H2','I2','J2','K2'],
        ['A3','B3','C3','D3','E3','F3','G3','H3','I3','J3','K3'],
        ['A4','B4','C4','D4','E4','F4','G4','H4','I4','J4','K4'],
        ['A5','B5','C5','D5','E5','F5','G5','H5','I5','J5','K5'],
        ['A6','B6','C6','D6','E6','F6','G6','H6','I6','J6','K6'],
        ['A7','B7','C7','D7','E7','F7','G7','H7','I7','J7','K7'],
        ['A8','B8','C8','D8','E8','F8','G8','H8','I8','J8','K8'],
        ['A9','B9','C9','D9','E9','F9','G9','H9','I9','J9','K9']];
    let res = boats.map((actual)=>{
        //B8 C8
        let inicio = board.find(actual[0]);
        console.log(inicio);
        let fin = board.find(actual[1]);
        console.log(fin);
    })
    return board;
}

console.log(isBoardReady([['B8', 'C8'],['C4', '4F'],['2B', 'D2'],['H5', 'H1'],['J8', 'J6'],]));