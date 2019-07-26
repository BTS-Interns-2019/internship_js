const groupByState = require('./group-by-state_luisg.js');

test('Prueba 1', function () {
    expect(groupByState(`John Snow, 341 Kings Road, KL
    Arya Stark, 22 No Where St, WF
    Jaime Lannister, 73 1st Street, KL`)).toStrictEqual(
        {
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
            },
          }
    );
})

test('Prueba 2', function () {
    expect(groupByState(`John Snow, 341 Kings Road, KL
    Arya Stark, 22 No Where St, KL
    Jaime Lannister, 73 1st Street, KL`)).toStrictEqual(
        {
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
                  name: 'Arya Stark',
                  address: '22 No Where St',
                  state: 'KL'
                },
                  {
                    name: 'Jaime Lannister',
                    address: '73 1st Street',
                    state: 'KL'
                  }
              ]
            },
          }
    );
})

test('Prueba 3', function () {
    expect(groupByState(`John Snow, 341 Kings Road, WF
    Arya Stark, 22 No Where St, WF
    Jaime Lannister, 73 1st Street, WF`)).toStrictEqual(
        {
            WF: {
              code: 'WF',
              name: 'Winter Felt',
              people: [
                {
                    name: 'John Snow',
                    address: '341 Kings Road',
                    state: 'WF'
                  },
                {
                  name: 'Arya Stark',
                  address: '22 No Where St',
                  state: 'WF'
                },
                  {
                    name: 'Jaime Lannister',
                    address: '73 1st Street',
                    state: 'WF'
                  }
              ]
            },
          }
    );
})

test('Prueba 4', function () {
    expect(groupByState(`John Snow, 341 Kings Road, KL
    Arya Stark, 22 No Where St, WF
    Jaime Lannister, 73 1st Street, BR`)).toStrictEqual(
        {
            KL: {
              code: 'KL',
              name: "King's Landing",
              people: [
                {
                  name: 'John Snow',
                  address: '341 Kings Road',
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
            },
            BR: {
                code: 'BR',
                name: 'Braavos',
                people: [
                    {
                        name: 'Jaime Lannister',
                        address: '73 1st Street',
                        state: 'BR'
                      }
                ]
              },
          }
    );
})