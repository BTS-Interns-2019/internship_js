function cashMeOut(input, quantity, cashierStatus) {
  if (typeof input !== 'object') {
    return 'First input is not an object';
  }

  if (typeof quantity !== 'number') {
    return 'Second input is not a number';
  }

  if (typeof cashierStatus !== 'object') {
    return 'Third input is not an object'
  }

  //Hardcoded for first test :)
  let bills = [];
  let coins = [];

  let inputTotal = 0;
  let cashierTotal = 0;
  for (let money in input) {
    const inputMoney = Number.parseInt(money.match(/(\d+)/));
    for (let i = 0; i < input[money]; i++) {
      inputTotal += inputMoney;
    }
  }

  for (let money in cashierStatus) {
    const cashierMoney = Number.parseInt(money.match(/(\d+)/));
    if (money.startsWith('b')) {
      bills.push([cashierMoney, cashierStatus[money]])
    } else if (money.startsWith('c')) {
      coins.push([cashierMoney, cashierStatus[money]]);
    }
    for (let i = 0; i < cashierStatus[money]; i++) {
      cashierTotal += cashierMoney;
    }
  }

  if (cashierTotal < quantity) {
    return 'Not enough money to return';
  }

  if (quantity < inputTotal) {
    return 'Not enough money for payment';
  }

  if (quantity === inputTotal) {
    return 0;
  }

  let billsUsed = [];
  let coinsUsed = [];
  if (quantity > inputTotal) {
    billsUsed = bills.map(bill => {
      let amount = Number.parseInt(bill[0]);
      bill[0] = 'bill' + bill[0];
      let quantityOfBill = Number.parseInt(bill[1]);
      bill[1] = 0;
      for (let i = 0; i < quantityOfBill; i++) {
        if (quantity - amount >= 0) {
          quantity -= amount;
          bill[1]++;
        } else {
          return bill;
        }
      }
    }).filter(bill => bill);

    if (quantity > 0) {
      coinsUsed = coins.map(coin => {
        let amount = Number.parseInt(coin[0]);
        coin[0] = 'coin' + coin[0];
        let quantityOfCoin = Number.parseInt(coin[1]); 
        coin[1] = 0;
        for (let i = 0; i < quantityOfCoin; i++) {
          if (quantity - amount >= 0) {
            quantity -= amount;
            coin[1]++;            
          } else {
            return coin;
          }
        }
      }).filter(coin => coin);
    }
  }

  for (let money in cashierStatus) {
    cashierStatus[money] = 0;
  }

  billsUsed.forEach(bill => {
    for (let money in cashierStatus) {
      if (money === bill[0]) {
        cashierStatus[money] = bill[1];
      }
    }
  });

  if (coinsUsed.length > 0) {
    coinsUsed.forEach(coin => {
      for (let money in cashierStatus) {
        if (money === coin[0]) {
          cashierStatus[money] = coin[1];
        }
      }
    });
  }

  return cashierStatus;
}

module.exports = cashMeOut;