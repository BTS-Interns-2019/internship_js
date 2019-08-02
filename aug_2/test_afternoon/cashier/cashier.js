function cashMeOut(input, quantity, cashierStatus) {
  //Hardcoded for first test :)
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
}

module.exports = cashMeOut;