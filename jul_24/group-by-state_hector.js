function groupByState(people) {
  const states = {
    KL: 'King\'s Landing',
    WF: 'Winter Felt',
    BR: 'Braavos',
    HG: 'Highgarden',
    II: 'Iron Islands',
  };

  people = people.split('\n')
    .map(elem => elem.trim())
    .filter(elem => elem);

  let resultObj = {};

  for (let person of people) {
    person = person.split(',').map(elem => elem.trim());
    if (!resultObj.hasOwnProperty(person[2])) {
      resultObj[person[2]] = {
        code: person[2],
        name: states[person[2]],
        people: [{
          name: person[0],
          address: person[1],
          state: person[2],
        }],
      };
    } else {
      resultObj[person[2]].people.push({
        name: person[0],
        address: person[1],
        state: person[2],
      });
    }
  }

  return resultObj;
}

module.exports = groupByState;