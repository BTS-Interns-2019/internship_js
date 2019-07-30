function charCounter(str) {
  const resultObj = {};
  str.split('').map(elem => elem.toLowerCase()).filter(elem => elem.match(/[a-z]/)).forEach(elem => {
    resultObj[elem] = resultObj.hasOwnProperty(elem) ? resultObj[elem] + 1 : 1;
  });
  return resultObj;
}

module.exports = charCounter;