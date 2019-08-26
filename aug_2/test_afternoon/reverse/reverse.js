function reverse(str) {
<<<<<<< HEAD
  if(typeof str != 'string') {
    throw console.error('¡Los caracteres ingresados no son un string!')
  };
    str = str.trim();
    arr = str.split(' ');
=======
  let newStr = str.split(" ")
  
  for(let i = 0; i < newStr.length; i++){
    if(i % 2 !== 0){
      newStr[i] = newStr[i].split('').reverse().join('')
    }
  }
  return newStr.join(' ')
}
>>>>>>> master

    let n = 2;
    for (i = 1; i < arr.length; i++) {
        if (n % 2 == 0) {
          let arr2 = arr[i].split('').reverse().join('');
            arr.splice(i, 1, arr2); 
        }
        n++;
    }
    str = arr.join(' ');  
    return str;
  }
  console.log(reverse(''))
  module.exports = reverse;
