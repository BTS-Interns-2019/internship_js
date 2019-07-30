const {login,onlyEven} = require("./cp_exercices_sergio.js");


test('find usuario y contraseña son iguales entonces es true', () => {
    expect(login('urbanus','arabia')).toBe(true);
})

test('Asegurando que todos sean pares o nones even or odd', () => {
    expect(onlyEven([8,12,88,66,34,77,4,57])).toBe(false);
})
test('Asegurando que todos sean pares o nones even or odd', () => {
    expect(onlyEven([8,12,88,66,34,100,22])).toStrictEqual([8,12,88,66,34,100,22]);
})