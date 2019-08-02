function reverse(str) {
  if(typeof str == 'string'){
    let div=str.split(' ');
    let word = div.filter((e)=>{return e!=""});
    let sentence = word.map((actual, i)=>{
      if(i%2==0){
        return actual;
      }else{

        return actual.split("").reverse().join("");
      }
    });
    let res=sentence.join(" ");
    return res;
  }else{
    return '';
  }
  //return str;
}

module.exports = reverse;

console.log(reverse('     e ss a    d   e wrr   d r  s e  '));