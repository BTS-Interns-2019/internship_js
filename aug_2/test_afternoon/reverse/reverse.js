function reverse(str) {
  if(typeof str != 'string')
  console.log('esto no es un dato valido') 
    str = str.trim();
    word1 = str.split(' ');
    word2 = 2;
    for (i=1; i < word1.length; i++) {
        if (word2%2 == 0) {
            word3 = word1[i].split('').reverse().join('');
            word1.splice(i, 1, word3); 
        }
        word2++;
    }
    str = word1.join(' ');
    
    return str;
  }
  
  //reverse('some words Like this')

module.exports = reverse;