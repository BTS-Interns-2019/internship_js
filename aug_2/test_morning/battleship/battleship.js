/*
* Luis Carlos Gallegos Rodriguez
*/
/***
 * * It is a 11 X 9 matrix
* 11 is the width and it is referenced by letters `[A-K]`
* 9 is the height and it si referenced by numbers `[1-9]`

Carrier, with five holes
* Battleship, with four holes
* Cruiser, with three holes
* Submarine, with three holes
* Destroyer, with two holes

Boats cannot be placed immediately next to each other, they must be at least one space away
ach boat is represented by an array of 2 coordinates, ex `['F9', '3A']`
The coordinates represent the limits of the ship
      * It can start with a letter or a number but it must have both
      * Letter are given always in uppercase
 */
function isBoardReady(boats) {
    function setCharAt(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
      }
    let espaciosOcupados = []
    if (boats.length == 5) {
        for (let boat of boats) {
            let cas1 = boat[0].charAt(0) >= '0' && boat[0].charAt(0) <= '9' ? boat[0] : boat[0].charAt(1) + boat[0].charAt(0)
            let cas2 = boat[1].charAt(0) >= '0' && boat[1].charAt(0) <= '9' ? boat[1] : boat[1].charAt(1) + boat[1].charAt(0)
            if (cas1.charAt(0) == cas2.charAt(0)) {
                //es vertical
                casAux = cas1
                do {
                    if (espaciosOcupados.includes(casAux)) {
                        return false;
                    } else {
                        espaciosOcupados.push(casAux)
                        setCharAt(casAux,0,parseInt(casAux.charAt(0))+1) //casilla de abajo
                    }
                } while (casAux != cas2)
                espaciosOcupados.push(casAux)
            } else if (cas1.charAt(1) == cas2.charAt(1)) {
                // es horizontal
            } else {
                return false;
            }
        }
    } else { return false }
    return true;
}