
function solve(n, arr) {
  var ans = []
  solver([])
  sol = ans
  function solver(current) {
    if (current.length === n)
      ans.push(current)
    else
      for (var i = 0; i < n; i++) {
        for (var j = 0, l = current.length; j < l; j++) {
          var prev = current[j]
          if (prev === i)
            break
          if (prev - (l - j) === i)
            break
          if (prev + (l - j) === i)
            break
        }
        if (j === l)
          solver(current.concat([i]))
      }
  }

  x = arr[0];
  y = arr[1];
  br = false;
  for (i = 0; i < sol.length; i++) {
    for (j = 0; j < sol[i].length; j++) {
      if (y == sol[i][j] && x == j) {
        sol = sol[i];
        br = true;
        break;
      }
      if (br == true) break;

    }
  }if(br == false){
    r = []
      for(i = 0; i < n; i++) {
      r[i] = new Array();
      for(j = 0; j < n; j++) {
        r[i][j] = 0;
      }
    }
    return r
  } 



  arr = [];
//   arreglo = []
  for (i = 0; i < sol.length; i++) {
    arr[i] = new Array();
    for (j = 0; j < sol.length; j++) {
      arr[i][j] = 0;
    console.log(arr[i][j])
      if (j == sol[i]) {
        arr[i][j] = 1
      }
    }
  }
  return arr;

}


console.log(solve(6, [1, 3]))

