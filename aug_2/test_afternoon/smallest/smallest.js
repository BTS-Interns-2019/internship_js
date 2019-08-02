function smallest(str) {
  if (typeof (str) != "number") return "error, ingresa un numero";
  n = ""; n += str;
  n = n.split(""); //Conviertes a arreglo
  str = [];
  for (i = 0; i < n.length; i++) {
    str.push(parseInt(n[i]));
  }
  n = str.slice();
  str.sort((a, b) => a - b);// ordenas

  peq = str[0] //obtienes mas pequeño
  peqsave = 0;
  peqindex = 0;
  numpeq = n.slice();
  gra = str[str.length - 1] //obtienes mas grande
  grasave = 0;
  graindex = 0;
  numgra = n.slice();

  for (i = n.length - 1; i => 0; i--) { // se obtiene el index, se borra el numero pequeño,
    if (peq == n[i]) {                    // y se agrega al inicio
      peqsave = peq;
      peqindex = i;
      numpeq.splice(i, 1);
      numpeq.unshift(parseInt(peq));
      break;
    }
  }

  for (i = 0; i <= n.length; i++) { // se obtiene el index, se borra el numero grande,
    if (gra == n[i]) {                    // y se agrega al final
      grasave = gra;
      graindex = i;
      numgra.splice(i, 1);
      numgra.push(gra);
      break;
    }
  }

  numpeq = numpeq.join(""); numgra = numgra.join(""); n = n.join("");

  res = [];

  if (numpeq < numgra) {
    res.push(parseInt(numpeq), peqindex, 0)
    return res
  } else if (numpeq > numgra) {
    res.push(parseInt(numgra), graindex, numgra.length - 1)
    return res;
  } else {
    res.push(parseInt(n), 0, 0)
    return res;

  }
}

console.log(smallest(83425825))  //28342585

module.exports = smallest;