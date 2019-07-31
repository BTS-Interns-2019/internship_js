function sort(arry,callback) {
  let sergioArry = arry.filter(word => word == undefined);
  for (let i = 0; i < arry.length; i++) {
    if(arry[i] == undefined){
      arry.splice(i,1);
    }   
  }
console.log(arry);

    const l = arry.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arry[j].toString() > arry[j+1].toString() ) {
          [arry[j], arry[j+1]] = [arry[j+1], arry[j]];
        }
      }
    }

    arry.push(...sergioArry);

    
    return arry;
}  
  const arr = [10, 4, 40, 32,undefined, 67, 12, 43,undefined, 31, 65, 1];


console.log(sort(arr));








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

// DOS
///ENCRYPT
///
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

// decrypt - decrypt
//
function decrypt(baseAlphabet,baseAlphabet1,encryptedMessage) {

  
  encryptedMessage = encryptedMessage.split("");
 
for (let i = 0; i < encryptedMessage.length; i++) {
  if(baseAlphabet1.includes(encryptedMessage[i])){
    encryptedMessage[i] = baseAlphabet[baseAlphabet1.indexOf(encryptedMessage[i])];
  }  
}

encryptedMessage = encryptedMessage.toString();
encryptedMessage =  encryptedMessage.replace(/,/gi,'');

return encryptedMessage;
}

// DATOS
let baseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u'];
let baseAlphabet1 = baseAlphabet.slice();
let seed = generateSeed(baseAlphabet1);
let message = "punto para windows"
//console.log(baseAlphabet);
//console.log(seed);
//console.log(message);
//console.log(encrypt(baseAlphabet,seed,message));
let message2 = encrypt(baseAlphabet,seed,message);
console.log(decrypt(baseAlphabet,seed,message2));


  module.exports = {sort,encrypt,decrypt};
