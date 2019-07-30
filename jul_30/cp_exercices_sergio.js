function login(name, password) {
    var users = [
        {name:"sergio",password:"Colima"},
        {name:"rabbanito",password:"villaDalvarez"},
        {name:"chr",password:"yahualica"},
        {name:"urbanus",password:"arabia"},
        {name:"pere",password:"jalpa"},
        {name:"migue",password:"powers"},
        {name:"marlon",password:"cayendoConEstilo"},
        {name:"david",password:"aromatizante"},
        {name:"fanny",password:"sabe"},
        {name:"hector",password:"master"},
        {name:"ricardo",password:"tepa"},
        {name:"emmanuel",password:"judas"},
        {name:"viri",password:"porSupuesto"},
        {name:"erick",password:"noTeEntiendo"},
        {name:"luis",password:"suKiEsTanPoderosoQueReparaTuCodigoConSoloAsomarseATuPantalla"}    
    ];

    let check = users.find(e => e.name === name && e.password === password);



    return !!check;
}

console.log(login("emmanuel","judas"));

function onlyEven(arry) {
    
    let res = arry.every((N)=>  N %2 == 0 ? arry:false);
    if(res){return arry}
    return res;

}

console.log(onlyEven([2,4,6,8,12,13]));

function google(string) {
    let obj1 = [ {
        name:"find",
        description:"el primer objeto que cumple la condicion, en otro caso desvuelve undefined",
        params:[
            {name:"element", 
            description:"El elemento actual que se está procesando en el array."
            },
            {name:"index",
            description:"El índice del elemento actual que se está procesando en el array."
            },
            {name:"array",
            description:"El array desde el que se llama al método find."
            }],
        returning:'El valor del primer elemento del array que cumple la función de prueba proporcionada; de lo contrario, devuelve undefined.'
    },
    {
        name:"findIndex",
        description:"El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.",
        params:[
            {name:"element", 
            description:"El elemento actual siendo procesado en el array."
            },
            {name:"index",
             description:"El índice del elemento actual que está siendo procesado en el array."
            },
            {name:"array",
            description:"El array findIndex de donde fue llamado."
        }],
        returning:'Un índice en el array si un elemento pasa la prueba; en caso contrario, -1.'
    },
    {
        name:"every",
        description:"",
        params:[{name:"item", description:""}],
        returning:'boolean'
    },
    {
        name:"values",
        description:"",
        params:[{name:"item", description:""}],
        returning:'boolean'
    },
    {
        name:"entries",
        description:"",
        params:[{name:"item", description:""}],
        returning:'boolean'
    },
    {
        name:"keys",
        description:"",
        params:[{name:"item", description:""}],
        returning:'boolean'
    },
    ];

    let res = obj1.find(e => e.name === string );

    return res;   

   
    }



console.log(google('find'));

module.exports = {login,onlyEven,google};
