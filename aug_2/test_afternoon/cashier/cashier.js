function cashMeOut(input, quantity, cashierStatus) {
  let suma = input.bill500*500+input.bill200*200+input.bill100*100+input.bill50*50+input.coin50*50+input.coin20*20+input.coin10*10
  +input.coin10*10+input.coin5*5+input.coin2*2+input.coin1

  if(suma<quantity){
    return "Not enough money for payment";
  }else if(suma==quantity){
    return 0
  }else{
    let resta = suma - quantity
    let response = {}
    bill500 = parseInt(resta/500)
    if(cashierStatus.bill500<bill500){
      bill500 = cashierStatus.bill500
    }
    response.bill500 = bill500
    resta-=500*bill500

      bill200 = parseInt(resta/200)
    if(cashierStatus.bill200<bill200){
      bill200 = cashierStatus.bill200
    }
    response.bill200 = bill200
    resta-=200*bill200

    bill100 = parseInt(resta/100)
    if(cashierStatus.bill100<bill100){
      bill100 = cashierStatus.bill100
    }
    response.bill100 = bill100
    resta-=100*bill100

    bill50 = parseInt(resta/50)
    if(cashierStatus.bill50<bill50){
      bill50 = cashierStatus.bill50
    }
    response.bill50 = bill50
    resta-=50*bill50

    bill20 = parseInt(resta/20)
    if(cashierStatus.bill20<bill20){
      bill20 = cashierStatus.bill20
    }
    response.bill20 = bill20
    resta-=20*bill20

    coin50 = parseInt(resta/50)
    if(cashierStatus.coin50<coin50){
      coin50 = cashierStatus.coin50
    }
    response.coin50 = coin50
    resta-=50*coin50

    coin20 = parseInt(resta/20)
    if(cashierStatus.coin20<coin20){
      coin20 = cashierStatus.coin20
    }
    response.coin20 = coin20
    resta-=20*coin20

    coin10 = parseInt(resta/10)
    if(cashierStatus.coin10<coin10){
      coin10 = cashierStatus.coin10
    }
    response.coin10 = coin10
    resta-=10*coin10

    coin5 = parseInt(resta/5)
    if(cashierStatus.coin5<coin5){
      coin5 = cashierStatus.coin5
    }
    response.coin5 = coin5
    resta-=5*coin5

    coin2 = parseInt(resta/2)
    if(cashierStatus.coin2<coin2){
      coin2 = cashierStatus.coin2
    }
    response.coin2 = coin2
    resta-=2*coin2

    coin1 = parseInt(resta)
    if(cashierStatus.coin1<coin1){
      coin1 = cashierStatus.coin1
    }
    response.coin1 = coin1
    resta-=coin1

    if(resta>0){
      return "Not enough money to return"
    }else{
      return response;
    }

  }

}

module.exports = cashMeOut;