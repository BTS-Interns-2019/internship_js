function closestAndSmallest(str) {
  var result = [];
  console.log(typeof str);
  if(typeof str !== 'string'){
    console.error("ERROR: tipo de dato incorrecto")
    return result;
  }
  var close = 9999999999;
  var ic = [];
  var is = [];

  var numbers = str.split(" ");
  
  var weight = numbers.map(function(element){
    var digit = element.split("");
    var eachWeigth = 0;
    for(var i=0; i<digit.length; i++){
      eachWeigth += parseInt(digit[i]);
    }
    return eachWeigth;
  });

  console.log(numbers);
  console.log(weight);

  //Closest
  for(var i=0; i<weight.length-1; i++){
    for(var j=i+1; j<weight.length; j++){
      if(Math.abs(weight[i] - weight[j]) <= close){
        console.log(i,j);
        close = Math.abs(weight[i] - weight[j]);
        ic.push(i.toString() + "," + j.toString());
      }
    }
  }  

  if(ic.length === 1){
    console.log("Si entro simon");
    ic = ic[0].split(",");
    console.log(ic);
    result = [[weight[parseInt(ic[0])], parseInt(ic[0]), parseInt(numbers[parseInt(ic[0])])], 
              [weight[parseInt(ic[1])], parseInt(ic[1]), parseInt(numbers[parseInt(ic[1])])]]
  } else {
    //ic
    var menor = 9999999;
    for(var i=0; i<ic.length; i++){
      var actual = ic[i];
      actual = actual.split(",");
      var suma = weight[actual[0]] + weight[actual[1]];
      if(suma < menor){
        menor = suma;
        is = [actual[0], actual[1]];
      } 
    }
    
    result = [
      [weight[is[0]], parseInt(is[0]), parseInt(numbers[is[0]])],
      [weight[is[1]], parseInt(is[1]), parseInt(numbers[is[1]])]
    ]

    if(result[0][0] > result[1][0]){
      var temp = result[0];
      result[0] = result[1];
      result[1] = temp;
    }
  }

  return result;
}

module.exports = closestAndSmallest;