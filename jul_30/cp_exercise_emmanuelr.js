function login(name, password){
    let users=[
        {name: 'juanito', password:'1234567890'},
        {name: 'rafa', password:'admin123'},
        {name: 'otro', password:'otra'}
    ]
    return users.some(val => val.name===name && val.password===password)
}
function onlyEven(arr){
    if(arr.every(x => x%2==0))return arr;
    return false;
}
function google(str){
    objeto=[
        {name:"some",
        description:'Devuelve un valor booleano dependiente de si al menos alguno de los elementos del arreglo retorna true aplicandole el call back',
        params:[
            {name:"callBack", description:"funcion a evaluar en cada iteracion"},
            {name:"element", description:"valor tomado del arreglo en esa iteracion"},
            {name:"index", description:"indice del element"},
            {name:"array", description:"arreglo sobre el que se está iterando"},
        ],
        returning:'boolean'},
        {name:"find",
        description:"Devuelve el primer valor del arreglo que cumpla la condicional",
        params:[
            {name:"callBack", description:"funcion a evaluar en cada iteracion"},
            {name:"element", description:"valor tomado del arreglo en esa iteracion"},
            {name:"index", description:"indice del element"},
            {name:"array", description:"arreglo sobre el que se está iterando"},
        ],
        returning:'object'},
        {name:"findIndex",
        description:"Devuelve el indice del primer valor del arreglo que cumpla la condicional",
        params:[
            {name:"callBack", description:"funcion a evaluar en cada iteracion"},
            {name:"element", description:"valor tomado del arreglo en esa iteracion"},
            {name:"index", description:"indice del element"},
            {name:"array", description:"arreglo sobre el que se está iterando"},
        ],
        returning:'number'},
        {name:"every",
        description:"Devuelve true si todos los elementos del arreglo cumplen la condicional y false si al menos uno no la cumple",
        params:[
            {name:"callBack", description:"funcion a evaluar en cada iteracion"},
            {name:"element", description:"valor tomado del arreglo en esa iteracion"},
            {name:"index", description:"indice del element"},
            {name:"array", description:"arreglo sobre el que se está iterando"},
        ],
        returning:'boolean'},
        {name:"values",
        description:"Devuelve un objeto iterable con los valores del arreglo",
        params:[],
        returning:'objeto iterable'},
        {name:"entries",
        description:"Devuelbe un objeto iterable con arreglos con el formato [key , value]",
        params:[],
        returning:'objeto iterable con arreglos'},
        {name:"keys",
        description:"Devuelbe un objeto iterable con las keys del arreglo",
        params:[],
        returning:'objeto iterable'}
    ]
    return objeto.find(val => val.name===str)
}



function whereAreThey(arr){
    arr2=[];
    for(const i of arr.keys()){
        if(arr[i]%2==0)arr2.push(i);        
    }
    return arr2;
}

module.exports={
    login,
    onlyEven,
    google,
    whereAreThey
}