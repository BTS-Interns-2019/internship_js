function avoidingFire(...candles) {
  candles = candles.reduce((acc, cur) => acc.concat(cur), []);

  let tallest = candles[0];
  candles.forEach(elem => {
    if (elem > tallest) {
      tallest = elem;
    }
  });
  
  return candles.filter((elem) => elem === tallest).length;
}

module.exports = avoidingFire;

console.log(avoidingFire([1,2,3,4], [2,2,2,1], [6,9,1]));