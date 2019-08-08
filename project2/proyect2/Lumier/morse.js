module.exports = morse;

function morse (binaryMorseCode){
    console.log(binaryMorseCode);
    if(binaryMorseCode === undefined)return;
    if(typeof binaryMorseCode === 'number')return "please, insert it like a string";
    console.log(binaryMorseCode);
    binary = binaryMorseCode.replace(/00000000000000/g,"\n");//Replace the seven pairs of zeroes to a line break
    binary = binary.replace(/000000/g," ").replace(/111111/g,"-").replace(/11/g,"·").replace(/00/g,"");//Become the message in morse code
    div = binary.split("\n");//Divide the words in morse
    word = div.map((cv)=>{//Whole sentence
        d = cv.split(" ");
        w = d.map((actual)=>{return alphabet(actual);}).join("");//Word
        return w;//Return replaced word
    }).join(" ");//Join the sentence
    return word;//Human readable text
}

/* Alphabet function is responsible for change the morse code to a human readable text */
function alphabet (str){
    switch(str){
        case '·': return 'E';
        case '-': return 'T';
        case '··': return 'I';
        case '·-': return 'A';
        case '-·': return 'N';
        case '--': return 'M';
        case '···': return 'S';
        case '-··': return 'D';
        case '·-·': return 'R';
        case '--·': return 'G';
        case '··-': return 'U';
        case '-·-': return 'K';
        case '·--': return 'W';
        case '---': return 'O';
        case '····': return 'H';
        case '-···': return 'B';
        case '·-··': return 'L';
        case '--··': return 'Z';
        case '··-·': return 'F';
        case '-·-·': return 'C';
        case '·--·': return 'P';
        case '···-': return 'V';
        case '-··-': return 'X';
        case '--·-': return 'Q';
        case '-·--': return 'Y';
        case '·---': return 'J';
        case '·----': return '1';
        case '··---': return '2';
        case '···--': return '3';
        case '····-': return '4';
        case '·····': return '5';
        case '-····': return '6';
        case '--···': return '7';
        case '---··': return '8';
        case '----·': return '9';
        case '-----': return '0';
    }
}

/*ALPHABET
    A   · -         11 00 11 11 11
    B   - · · ·     11 11 11 00 11 00 11 00 11
    C   - · - ·     11 11 11 00 11 00 11 11 11 00 11
    D   - · ·       11 11 11 00 11 00 11
    E   ·           11
    F   · · - ·     11 00 11 00 11 11 11 00 11
    G   - - ·       11 11 11 00 11 11 11 00 11
    H   · · · ·     11 00 11 00 11 00 11
    I   · ·         11 00 11
    J   · - - -     11 00 11 11 11 00 11 11 11 00 11 11 11
    K   - · -       11 11 11 00 11 00 11 11 11
    L   · - · ·     11 00 11 11 11 00 11 00 11
    M   - -         11 11 11 00 11 11 11
    N   - ·         11 11 11 00 11
    O   - - -       11 11 11 00 11 11 11 00 11 11 11
    P   · - - ·     11 00 11 11 11 00 11 11 11 00 11
    Q   - - · -     11 11 11 00 11 11 11 00 11 00 11 11 11
    R   · - ·       11 00 11 11 11 00 11
    S   · · ·       11 00 11 00 11
    T   -           11 11 11
    U   · · -       11 00 11 00 11 11 11
    V   · · · -     11 00 11 00 11 00 11 11 11
    W   · - -       11 00 11 11 11 00 11 11 11
    X   - · · -     11 11 11 00 11 00 11 00 11 11 11
    Y   - · - -     11 11 11 00 11 00 11 11 11 00 11 11 11
    Z   - - · ·     11 11 11 00 11 11 11 00 11 00 11
    1   · - - - -   11 00 11 11 11 00 11 11 11 00 11 11 11 00 11 11 11
    2   · · - - -   11 00 11 00 11 11 11 00 11 11 11 00 11 11 11
    3   · · · - -   11 00 11 00 11 00 11 11 11 00 11 11 11
    4   · · · · -   11 00 11 00 11 00 11 00 11 11 11
    5   · · · · ·   11 00 11 00 11 00 11 00 11
    6   - · · · ·   11 11 11 00 11 00 11 00 11 00 11
    7   - - · · ·   11 11 11 00 11 11 11 00 11 00 11 00 11
    8   - - - · ·   11 11 11 00 11 11 11 00 11 11 11 00 11 00 11
    9   - - - - ·   11 11 11 00 11 11 11 00 11 11 11 00 11 11 11 00 11
    0   - - - - -   11 11 11 00 11 11 11 00 11 11 11 00 11 11 11 00 11 11 11
    ""              00 00 00
    " "             00 00 00 00 00 00 00
 */