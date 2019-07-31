const {
    login,
    onlyEven,
    google,
    onlyEvenIndex,
  } = require('./cp_exercises_estefania.js');


test("datos correctos", function () {
    expect(login("user1", "A9876%")).toStrictEqual(true);
});

test("datos incorrectos", function () {
    expect(login("user", "A987611#")).toStrictEqual(false);
});

test("datos que no existen", function () {
    expect(login("usuario2", "hola1654")).toStrictEqual(false);
});

test("array solo pares", function () {
    expect(onlyEven([2, 4, 6, 8])).toStrictEqual([2, 4, 6, 8]);
});

test("array con impares", function () {
    expect(onlyEven([12, 5, 8, 130, 44])).toStrictEqual(false);
});

test("array solo impares", function () {
    expect(onlyEven([3, 5, 7, 11])).toStrictEqual(false);
});

test("busqueda correcta", function () {
    expect(google('findIndex')).toStrictEqual({ name: 'findIndex',
    description:
     'The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.',
    params:
     [ { name: 'item',
         description:
          'The index of the current element being processed in the array.' },
       { name: 'element',
         description: 'The current element being processed in the array.' },
       { name: 'array',
         description: 'The array findIndex was called upon.' } ],
    returning: 'boolean' })
});


test("busqueda incorrecta", function () {
    expect(google('findInd')).toStrictEqual(undefined)
});

test("busqueda inexistente", function () {
    expect(google('filter')).toStrictEqual(undefined)
});