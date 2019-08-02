function cashMeOut(input, quantity, cashierStatus) {
  //Hardcoded for first test :)
  try{
    if(typeof(input) != "object"){
      throw"first parameter is not a object";
    }
    if(typeof(quantity) != "number"){
      throw"second parameter is not a number";
    }
    if(typeof(cashierStatus) != "object"){
      throw"thirt parameter is not a object";
    }
    var moneyEnter =0;
    a = input.bill500;
    moneyEnter += a*500;
    moneyEnter += input.bill200*200;
    moneyEnter += input.bill100*100;
    moneyEnter += input.bill50*50;
    moneyEnter += input.bill20*20;
    moneyEnter += input.coin50*50;
    moneyEnter += input.coin20*20;
    moneyEnter += input.coin10*10;
    moneyEnter += input.coin5*5;
    moneyEnter += input.coin2*2;
    moneyEnter += input.coin1*1;
    if(moneyEnter < quantity){
      return "dont have enogfth money";
    }
    moneyEnter-=quantity;
    //devolver suma en billetes luego en monedas


    console.log(moneyEnter)

    response = {
      bill500: 0,
      bill200: 2,
      bill100: 0,
      bill50: 1,
      bill20: 1,
      coin50: 0,
      coin20: 1,
      coin10: 0,
      coin5: 1,
      coin2: 2,
      coin1: 0,
    }
    return response;
  }catch(e){
    return e;
  }
}
var obj1 = {
  bill500: 0,
  bill200: 2,
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
number = 700;
obj2 = {
  bill500: 200,
  bill200: 200,
  bill100: 200,
  bill50: 200,
  bill20: 1,
  coin50: 200,
  coin20: 2000,
  coin10: 2000,
  coin5: 2000,
  coin2: 2000,
  coin1: 2000,
};
console.log(cashMeOut(obj1, number, obj2));
module.exports = cashMeOut;