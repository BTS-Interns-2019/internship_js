function reverse(str) {
  if(typeof str != 'string') {
    throw console.error('¡Los caracteres ingresados no son un string!')
  };
    str = str.trim();
    arr = str.split(' ');

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
