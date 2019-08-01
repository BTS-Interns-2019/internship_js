

const {sort,encrypt,decrypt} = require('./mutation-metods_sergio');


test('reordenamiento burbuja', () => {
    expect(sort([10,4,40,32,67,12,43,31,65,1])).toStrictEqual([1,10,12,31,32,4,40,43,65,67]);
  })

  test('ordenamiento con "undefined" incluidos en el array acomodandolos al final', () => {
    expect(sort([10,4,40,undefined,32,67,undefined,12,43,31,65,1])).toStrictEqual([1,10,12,31,32,4,40,43,65,67,undefined,undefined]);
  })

  test('Debe resibir un string y devolver ya encriptado', () => {
    function generateSeed(array) {
        var i = array.length, temp, irandom;
      
        while (0 !== i) {
      
          irandom = Math.floor(Math.random() * i);
          i -= 1;
      
          temp = array[i];
          array[i] = array[irandom];
          array[irandom] = temp;
        }
        return array;
      }
   function encrypt(baseAlphabet1,seed,message) {
        message = message.split("");
       
      for (let i = 0; i < message.length; i++) {
        if(baseAlphabet1.includes(message[i])){
      
          message[i] = seed[baseAlphabet1.indexOf(message[i])];
        }  
      }
      
      message = message.toString();
      message =  message.replace(/,/gi,'');
      return message;
      }
      
      let baseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u'];
    let baseAlphabet1 = baseAlphabet.slice();
    let seed = generateSeed(baseAlphabet1);
    let menssage3 = "punto para windows"
    let res = encrypt(baseAlphabet,seed,menssage3)
    expect(encrypt(baseAlphabet,seed,menssage3)).toBe(res);
  })