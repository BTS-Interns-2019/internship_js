function cashMeOut(input, quantity, cashierStatus) {
  let billetes = [200,100,50,20,50,20,10,5,2,1];
  let denominacionObj = ['bill500','bill200','bill50','bill20','coin50','coin20','coin10','coin5','coin2','coin1']
  var count = 0;
  let response;
  for (let i = 0; i < billetes.length; i++) {
      console.log(input[denominacionObj[i]]);
      count += input[denominacionObj[i]] * billetes[i];
 
  }
  console.log(count);
  
  if(count < quantity){
    return "Not enough money for payment"
  }else if(count == quantity){
    return 0;
  }else{

   for (const key in cashierStatus) {
    cashierStatus[key] = cashierStatus[key] +input[key];
   }
   count = count - quantity;


  }
  response = { bill500: 0,
    bill200: 0,
    bill100: 0,
    bill50: 0,
    bill20: 0,
    coin50: 0,
    coin20: 0,
    coin10: 0,
    coin5: 0,
    coin2: 0,
    coin1: 0,
  };
  for (let i = 0; i < billetes.length; i++) {
    if(count %500 != 0){
      response[denominacionObj[i]] = 1;
      count-cashierStatus[denominacionObj[i]];
    }
    count += cashierStatus[denominacionObj[i]] * billetes[i];

}




  return response;
}
console.log(cashMeOut({ bill500: 0,
  bill200: 4,
  bill100: 0,
  bill50: 1,
  bill20: 11,
  coin50: 0,
  coin20: 18,
  coin10: 0,
  coin5: 1,
  coin2: 2,
  coin1: 0,
},382,{
  bill500: 200,
  bill200: 200,
  bill100: 200,
  bill50: 200,
  bill20: 2,
  coin50: 200,
  coin20: 2000,
  coin10: 2000,
  coin5: 2000,
  coin2: 2000,
  coin1: 2000,
}) );


module.exports = cashMeOut;