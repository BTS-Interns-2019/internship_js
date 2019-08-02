// Hector Soto Garcia
/**
 * xmasList
 * @param {String} kidsList
 * @param {Array} toys
 * @returns {Array}
 */
function xmasList(kidsList, toys) {
  kidsList = kidsList.split('\n')
    .map(elem => elem.trim())
    .filter(elem => elem);
  
  kidsList = kidsList.map(kid => kid.split(','). map(elem => elem.trim()));

  kidsList.forEach(kid => {
    kid.push(kid[2] - kid[1] * 2);
  });

  const copyKids = Array.from(kidsList);
  copyKids.sort((a, b) => b[3] - a[3]);
  const resultObj = {};

  toys.forEach((toy, index) => {
    if (toy.quantity > 1) {
      for (let i = 0; i < toy.quantity; i++) {
        copyKids[i].push(toy); 
      } 
    }
  });

  kidsList.forEach(kid => {
    if (!kid[4]) {
      kid.push('Coal');
    }
  });

  kidsList = kidsList.map(kid => {
    return {
      name: kid[0],
      age: Number.parseInt(kid[1]),
      score: Number.parseInt(kid[2]),
      gift: typeof kid[4] === 'object' ? kid[4].description : 'coal',
    };
  });

  return kidsList;
}

module.exports = xmasList;
