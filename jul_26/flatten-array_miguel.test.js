function flattenArray(array){
    let res = [];
    for(let i;i<array.length;i++){
        res=res.push(getRes(array[i]));
    }
    return res;
}
function getRes(pos){
    let ts = pos.toString();
    if(hasComma(ts)==true){
        let tsdiv = ts.split(',');
        for(let i;i<tsdiv.length;i++){
            return getRes(tsdiv[i]);
        }
    }else{
        return pos;
        
    }
}
function hasComma(word){
    for(let i=0;i<word.length;i++){
        if(word.charAt(',')){
            return true;
        }
    }
    return false;
}

let input1 = [];
let input2 = [1,2,['a','b'],3,4];
let input3 = [1,2,['a',['b','x']],3,4];
let input4 = [1,2,['hola',['b','x']],3,4];
let input5 = [1,2,[{foo: 'bar'},['b']],3,4];
console.log(flattenArray(input1));
console.log(flattenArray(input2));
console.log(flattenArray(input3));
console.log(flattenArray(input4));
console.log(flattenArray(input5));
//TEST
/*test("Test 1: Vacio",function(){
    let input = [];
    let result = [];
    expect(flattenArray(input)).toStrictEqual(result);
})
test("Test 2: Arreglo en arreglo",function(){
    let input = [1,2,['a','b'],3,4];
    let result = [1,2,'a','b',3,4];
    expect(flattenArray(input)).toStrictEqual(result);
})
test("Test 3: Arreglo en arreglo con arreglo",function(){
    let input = [1,2,['a',['b','x']],3,4];
    let result = [1,2,'a','b','x',3,4];
    expect(flattenArray(input)).toStrictEqual(result);
})
test("Test 4: Arreglo en arreglo con arreglo 2",function(){
    let input = [1,2,['hola',['b','x']],3,4];
    let result = [1,2,'hola','b','x',3,4];
    expect(flattenArray(input)).toStrictEqual(result);
})
test("Test 5: Arreglo en arreglo con arreglo y objeto",function(){
    let input = [1,2,[{foo: 'bar'},['b']],3,4];
    let result = [1,2,{foo: 'bar'},'b',3,4];
    expect(flattenArray(input)).toStrictEqual(result);
})*/