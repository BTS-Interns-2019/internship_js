//Urbano Gonzalez Patiño
function reverse(str) {
  let toReverse;
  let word="";
  if (str !==""){

    toReverse= str.trimStart().trimEnd().split(" ");
    for (let i = 0; i <toReverse.length ; i++) {
      if (i%2==1){
        console.log(i);
        word=toReverse[i].split("").reverse().join("");
        toReverse[i]=word
      }

      // console.log(word)
    }
    return toReverse.join(" ");
  }
  return str

}

console.log(reverse("(Delete System32 bro)"));

module.exports = reverse;