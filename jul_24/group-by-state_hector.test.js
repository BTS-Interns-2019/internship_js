const groupByState = require('./group-by-state_hector.js');

const test1 = `John Snow, 341 Kings Road, KL
Arya Stark, 22 No Where St, WF
Jaime Lannister, 73 1st Street, KL`;
const test2 = `Melissandre, 52 Iron Hill, II


    Ned Stark, 13 Winter St, WF
Tyrion Lannister, 73 1st Street, KL`;
const test3 = `Syrio Forel, 88 Faceless Road, BR`;
const test4 = `Margaery Tyrell, 23 Roses Avenue, HG
Theon Greyjoy, 11 Steel Mountain Str, II




                          Balon Greyjoy, 963 Miners Road, II`;

const expect1 = {
  KL: {
    code: 'KL',
    name: "King's Landing",
    people: [
      {
        name: 'John Snow',
        address: '341 Kings Road',
        state: 'KL'
      },
      {
        name: 'Jaime Lannister',
        address: '73 1st Street',
        state: 'KL'
      }
    ]
  },
  WF: {
    code: 'WF',
    name: 'Winter Felt',
    people: [
      {
        name: 'Arya Stark',
        address: '22 No Where St',
        state: 'WF'
      }
    ]
  }
};
const expect2 = {
  II: {
    code: 'II',
    name: "Iron Islands",
    people: [
      {
        name: 'Melissandre',
        address: '52 Iron Hill',
        state: 'II'
      }
    ]
  },
  KL: {
    code: 'KL',
    name: "King's Landing",
    people: [
      {
        name: 'Tyrion Lannister',
        address: '73 1st Street',
        state: 'KL'
      }
    ]
  },
  WF: {
    code: 'WF',
    name: 'Winter Felt',
    people: [
      {
        name: 'Ned Stark',
        address: '13 Winter St',
        state: 'WF'
      }
    ]
  }
};
const expect3 = {
  BR: {
    code: 'BR',
    name: "Braavos",
    people: [
      {
        name: 'Syrio Forel',
        address: '88 Faceless Road',
        state: 'BR'
      }
    ]
  }
};
const expect4 = {
  HG: {
    code: 'HG',
    name: "Highgarden",
    people: [
      {
        name: 'Margaery Tyrell',
        address: '23 Roses Avenue',
        state: 'HG'
      }
    ]
  },
  II: {
    code: 'II',
    name: "Iron Islands",
    people: [
      {
        name: 'Theon Greyjoy',
        address: '11 Steel Mountain Str',
        state: 'II'
      },
      {
        name: 'Balon Greyjoy',
        address: '963 Miners Road',
        state: 'II'
      }
    ]
  }
};

test('States KL and WF', () => {
  expect(groupByState(test1)).toEqual(expect1);
});

test('States II, KL and WF', () => {
  expect(groupByState(test2)).toEqual(expect2);
});

test('States BR', () => {
  expect(groupByState(test3)).toEqual(expect3);
});

test('States II and HG', () => {
  expect(groupByState(test4)).toEqual(expect4);
});