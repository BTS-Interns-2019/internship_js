function reverse(str) {
  let newStr = str.split(" ")
  
  for(let i = 0; i < newStr.length; i++){
    if(i % 2 !== 0){
      newStr[i] = newStr[i].split('').reverse().join('')
    }
  }
  return newStr.join(' ')
}

module.exports = reverse;