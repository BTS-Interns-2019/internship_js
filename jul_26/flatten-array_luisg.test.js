function flattenArray(array) {
    if (!Array.isArray(array)) {
        throw "NoArrayException: " + array + " No es un arreglo"
    } else {
        let res = [];
        for (let p of array) {
            if (!Array.isArray(p)) {
                res.push(p);
            } else {
                let ax = flattenArray(p);
                for (let y of ax) {
                    res.push(y);
                }
            }
        }
        return res;
    }
}

test('Prueba 1', function () {
    expect(flattenArray([1, 2, ['a', 'b',], 3, 4])).toStrictEqual([1, 2, 'a', 'b', 3, 4]);
})

test('Prueba 2', function () {
    expect(flattenArray([1, 2, ['hola', ["b", "x"]], 3, 4])).toStrictEqual([1, 2, 'hola', "b", "x", 3, 4]);
})

test('Prueba 3', function () {
    expect(flattenArray([1, 2, [{ foo: 'bar' }, "b"], 3, 4])).toStrictEqual([1, 2, { foo: 'bar' }, "b", 3, 4]);
})

test('Prueba 4', function () {
    expect(flattenArray([])).toStrictEqual([]);
})


