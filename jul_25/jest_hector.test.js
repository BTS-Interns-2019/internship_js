// function sum(primero, segundo) {
//   return primero + segundo;
// }

// test('Suma de 2 + 2', () => {
//   expect(sum(2, 2)).toBe(4);
// });

// test('Suma de 4 + 3', () => {
//   expect(sum(4, 3)).toBe(7);
// });

// test('Suma de 4 + 9', () => {
//   expect(sum(4, 9)).toBe(13);
// });

// // Individual tests
// test('Suma de -5 + 2', () => {
//   expect(sum(-5, 2)).toBe(-3);
// });

// test('Suma de 0 + 0', () => {
//   expect(sum(0, 0)).toBe(0);
// });

// test('Suma de Infinity + - Infinity', () => {
//   expect(sum(Infinity, -Infinity)).toBe(NaN);
// });

function averageSpeed() {
  let counter = 0;
  let speedSum = 0;
  return function funcionHija(speed) {
    counter++;
    speedSum += speed;
    return speedSum / counter;
  }
}

const average = require('./functions_ex_hector.js');
const avg = average();

test('Nueva velocidad promedio con 100', () => {
  expect(avg(100)).toBe(100);
});

test('Nueva velocidad promedio con 50', () => {
  expect(avg(50)).toBe(75);
});

test('Nueva velocidad promedio con 75', () => {
  expect(avg(75)).toBe(75);
});

test('Nueva velocidad promedio con 80', () => {
  expect(avg(80)).toBe(76.25);
});

test('Nueva velocidad promedio con 130', () => {
  expect(avg(130)).toBe(87);
});

test('Nueva velocidad promedio con 160', () => {
  expect(avg(160)).toBeCloseTo(99.16, 1);
});