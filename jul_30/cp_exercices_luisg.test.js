const {
    login,
    onlyEven,
    google,
    whereAreThey
} = require('./cp_exercices_luisg.js')

test('login Prueba 1 valido', function () {
    expect(login("", "")).toBe(true);
})

test('login Prueba 2 invalido', function () {
    expect(login("user", "pasword")).toBe(false);
})

test('onlyEven Prueba 1 valido', function () {
    expect(onlyEven([2, 4, 6, 8, 10])).toStrictEqual([2, 4, 6, 8, 10]);
})
test('onlyEven Prueba 2 invalido', function () {
    expect(onlyEven([2, 4, 3, 8, 10])).toBe(false);
})

test('google Prueba 1 keys', function () {
    expect(google("keys")).toStrictEqual({
        name: "keys",
        description: "devuelve un nuevo objeto Array Iterator que contiene contiene las claves de índice con las que acceder a cada elemento en el array",
        params: [{ name: "callback", description: "funcion a ejecutar" }, { name: "element", description: "elemento del array" }],
        returning: "Array"
    });
})
test('google Prueba 2 undefined', function () {
    expect(google("kis")).toStrictEqual(undefined);
})

test('whereAreThey Prueba 1 valido', function () {
    expect(whereAreThey([2, 4, 6, 8, 10])).toStrictEqual([0, 1, 2, 3, 4]);
})
test('whereAreThey Prueba 2 in par en medio', function () {
    expect(whereAreThey([2, 4, 3, 8, 10])).toStrictEqual([0, 1, 3, 4]);
})