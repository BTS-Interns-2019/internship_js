const giveAJoke = require('./jokes_sergior.js');

test('Se espera que saySetup devuelva', () => {
// const apiUrl = 'https://sv443.net/jokeapi/category';
//     let a = giveAJoke(apiUrl, 'Miscellaneous')
//     .then(function (val) {
//         console.log(val);
//         console.log(val.saySetup())
//         console.log(val.sayPunchLine())
//       }
//     ).catch(function (dato) {
//     console.log(dato);
//   });
    
    
    expect( a.saySetup() == 'function').toEqual(true);
  });