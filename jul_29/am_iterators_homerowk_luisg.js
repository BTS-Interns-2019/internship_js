function charCounter(input) {
    input = input.toLowerCase();
    input = input.split('');
    const res = {};
    input.forEach(element => {
      if (element >= 'a' && element <= 'z') {
        if (!res[element] && res[element] !== 0) {
          res[element] = 1;
        } else {
          res[element]++;
        }
      }
    }
    );
  return res;
  }
  module.exports=charCounter;
