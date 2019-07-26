function flattenArray(arr){
    salida=[];
    try{
        if(Array.isArray(arr)){
            flattenArray2(arr);
            return salida;
        }else throw new Error(message="Solo trabaja con arreglos");
    }catch(e){console.log(e.message);}
    
    function flattenArray2(arr2){
        if(Array.isArray(arr2)){
            arr2.forEach(campo => {
                flattenArray2(campo)
            });
        }else salida.push(arr2);
        return salida;
    }
}
let pruebas=[
    ['arreglo vacio',[],[]],
    ['con un arreglo anidado',[1,2,['a','b'],3,4],[1, 2, "a", "b", 3, 4]],
    ['arreglos anidados y un objeto',[1,2,[{foo:'bar'},['b']],3,4],[1, 2, {"foo": "bar"}, "b", 3, 4]],
    ['con un string',[1,2,['hola'],[['b','x']],3,4],[1, 2, "hola", "b", "x", 3, 4]]
]

test("holis", function(){
    expect("hola").toBe("hola")
})

for(let key=0; key<4; key++){
    test(pruebas[key][0], function(){
        expect(flattenArray(pruebas[key][1])).toEqual(pruebas[key][2]);
    })
}