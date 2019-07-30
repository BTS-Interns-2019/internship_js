const {
    forEach,
    map,
    filter,
    reduce,
    reduceRigth
}=require('./am_iterators_emmanuelr.js')

let arr=[2,2,3,4,5,6];
//**forEach
testFE=[ //mensaje, callBack, arreglo, respuesta
    ['ForEach: imprimir la respuesta', (cv)=>cv+5, arr, undefined],
    ['ForEach: imprimir desde el call back', (cv)=>console.log(cv+5), arr, arr.forEach(cv=>console.log(cv+5))],
    ['ForEach: imprimir los tres valores', (cv, i, a)=>console.log(cv, i, a), arr, arr.forEach((cv, i, a)=>console.log(cv, i, a))]
]
for (const i in testFE) {
    test(testFE[i][0],function(){
        expect(forEach(testFE[i][1],testFE[i][2])).toBe(testFE[i][3])
    })    
}
//**map
testM=[ //mensaje, callBack, arreglo, respuesta
    ['Map prueva de current value e index', (cv, i)=>cv+i, arr, arr.map((cv, i)=>cv+i)],
    ['Map obtener respuesta', (cv)=>cv+5, arr, arr.map(cv=>cv+5)],
    ['Map imprimir los tres valores desde el call back', (cv, i, a)=>console.log(cv, i, a), arr, arr.map((cv, i, a)=>console.log(cv, i, a))]
]
for (const i in testM) {
    test(testM[i][0],function(){
        expect(map(testM[i][1],testM[i][2])).toEqual(testM[i][3])
    })    
}
//**filter
let arr2=[1,2,"ho","","la",0, null];
testF=[ //mensaje, callBack, arreglo, respuesta
    ['filtrar mayor a 3', x => x>3, arr, arr.filter(x => x>3)],
    ['filtrar por falsy values', x => x, arr2, arr2.filter(x => x)],
    ['filtrar por enteros', x => Number.isInteger(x), arr2, arr2.filter(x => Number.isInteger(x))]
]
for (const i in testF) {
    test(testF[i][0],function(){
        expect(map(testF[i][1],testF[i][2])).toEqual(testF[i][3])
    })    
}