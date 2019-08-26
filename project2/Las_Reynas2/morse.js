function morse(binaryMorseCode){
    // Creacion del traductor
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""); // alfabeto a traducir
    const morse = ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. .---- ..--- ...-- ....- ..... -.... --... ---.. ----. -----".split(" "); //Valores de morse para cada caracter de alphabet.
    const traduction = new Array(alphabet.length); //Arreglo donde guardaremos la traduccion representando en 0 el caracter y en 1 su equivalente en morse.
    for(let i=0; i<traduction.length; i++){ // Se llena traduction para almacenar el alfabeto y sus equivalencias.
      traduction[i] = new Array(2);
      traduction[i][0] = alphabet[i];
      traduction[i][1] = morse[i]
    }
    let result = ""; // Aqui se almacenara la traduccion de binaryMorseCode
  
    if(binaryMorseCode.length%2 !== 0){ //Se supone que la longitud debe ser un numero par. Si esto no ocurre no hacemos nada y retornamos string vacio
      console.error("ERROR: Incorrect binaryMorseCode");
      return "";
    }
  
    //Traduccion del binaryMorseCode
    const words = binaryMorseCode.split("00000000000000"); //Separacion de palabras
    let morseLetter = ""; // Aqui se guardara un caracter representado en codigo morse
    words.forEach(function(word){ //Se recorren las palabras para encontrar los caracteres
      let characters = word.split("000000"); //Separacion de caracteres por cada palabra
      characters.forEach(function(character) { //Se recorren los caracteres para encontrar su valor en morse. (11001100111111)
        let value = character.split("00"); //Separacion de cada valor en sus respectivos simbolos (11,11,111111)
        value.forEach(function(symbol){ //Se recorre cada simbolo para encontrar su es un punto o una linea
          if(symbol === "11"){ // Si encuentra 11 quiere decir que es un punto
            morseLetter += ".";
          } else if(symbol === "111111"){  // Si no es un punto entonces evaluamos que sea una linea.
            morseLetter += "-";
          } else { // Si no es punto ni linea entonces es un error, Se retornara un string vacio pues el codigo morse no se logro decodificar
            console.error("ERROR: " + symbol + " is not identified as a dot or dash.");
            console.error("Function morse terminated.");
            return "";
          }
        });
        let convert = letterMorseToChar(morseLetter, traduction); //Se manda llamar la funcion que convierte el valor morse en su caracter correspondiente.
        if(convert.length > 0){ // Si la funcion devolvio un valor encontrado entonces concatena
          result += convert;
        } else { //Si no lanzara un error y retornara string vacio porque no se pudo decodificar el mensaje. 
          console.error("Function morse terminated.");
          return "";
        }
        morseLetter = ""; // Se inicializa la variable para poder guardar el siguiente carcter en morse.
      });
      result += " "; // Agregamos un espacio a result porque pasara a evaluar la siguiente palabra
    });
    result = result.trim(); //Aplicamos trim a result porque siempre quedara con un espacio al final.
  
    // funcion que convierte el valor morse en al caracter del alfabeto. 
    //Como parametro recibe el valor morse en string y traductor de donde buscara la equivalencia
    function letterMorseToChar(morse, traductor){ 
      for(let i=0; i<traductor.length; i++){ // Recorre traductor
        if(traductor[i][1] === morse){ //Cuando encuentra el valor retorna su equivalente.
          return traductor[i][0];
        }
      }
      console.error("ERROR: The morse value is not identified."); //Si no encontro el equivalente devolvera string vacio
      console.error(morse + " don't exist in the equivalency table.");
      return "";
    }
  
    return result;
  }
  
  module.exports = morse;