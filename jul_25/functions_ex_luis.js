// objeto persona con propiedades
// nombre
// direccion
// numero
// ocupacion
// edad
// comida favorita -- Array
// fraseFavorita
let persona = {
<<<<<<< HEAD
    "nombre": "",
    "direccion": "",
    "numero": null,
    "ocupacion": "",
    "edad": null,
    "comida_favorita": [],
    "frase_favorita": ""
}
function setNombre(objeto, valor) {
    objeto.nombre = valor;
}
function setDireccion(objeto, valor) {
    objeto.direccion = valor;
}
function setNumero(objeto, valor) {
    objeto.numero = valor;
}
function setOcupacion(objeto, valor) {
    objeto.ocupacion = valor;
}
function setEdad(objeto, valor) {
    if (valor > 18) {
        function mayor() {
            return "hurray";
        }
        objeto.edad = mayor;
    } else {
        objeto.edad = valor;
    }
}
function setComidaFavorita(objeto, valor) {
    objeto.comida_favorita = valor;
}
function setFraseFavorita(objeto, valor) {
    objeto.frase_favorita = valor;
}

setNombre(persona, "Paco");
setComidaFavorita(persona, ["tacos", "lonces"]);
setDireccion(persona, "Enrique Segoviano");
setEdad(persona, 22);
setFraseFavorita(persona, "No porque lo perfecto sea inalcanzable, dejara de ser el ideal");
setNumero(persona, 13);
setOcupacion(persona, "si");
=======
    "nombre":"",
    "direccion":"",
    "numero":null,
    "ocupacion":"",
    "edad":null,
    "comida_favorita":[],
    "frase_favorita":""
}
function setNombre(objeto,valor){
    objeto.nombre=valor;
}
function setDireccion(objeto,valor){
    objeto.direccion=valor;
}
function setNumero(objeto,valor){
    objeto.numero=valor;
}
function setOcupacion(objeto,valor){
    objeto.ocupacion=valor;
}
function setEdad(objeto,valor){
    if(valor>18){
        function mayor(){
            return "hurray";
        }
        objeto.edad=mayor;
    }else{
    objeto.edad=valor;
}
}
function setComidaFavorita(objeto,valor){
    objeto.comida_favorita=valor;
}
function setFraseFavorita(objeto,valor){
    objeto.frase_favorita=valor;
}

setNombre(persona,"Paco");
setComidaFavorita(persona, ["tacos","lonces"]);
setDireccion(persona,"Enrique Segoviano");
setEdad(persona,22);
setFraseFavorita(persona,"No porque lo perfecto sea inalcanzable, dejara de ser el ideal");
setNumero(persona,13);
setOcupacion(persona,"si");
>>>>>>> 1645fc32ef463392f108caec972f0f07e898dd21
//console.log(persona);
//console.log(persona.edad());


// funciones llenando cada campo.
// reciben 2 parametros (objeto, valor)
// cada funcion solo puede llenar una propiedad con el valor que se pasa
// si edad es mayor a 18, asigna una funcion a esa propiedad que retorne "hurray"



// expected: 7 funciones que llenan solo un campo de el objeto en parametro

//Crear un contador de velocidad promedio
//nombre de la funcion averageSpeed
//regresa una funcion funcionHija que recibe un solo parametro numerico, que es la velocidad
// esa funcion regresa la velocidad promedio
// cada vez que se mande llmar la funcionhija debe tomar el parametro de la velocidad y calcular la nueva velocidad promedio
<<<<<<< HEAD
function averageSpeed() {
    let i = 0;
    let velocidadacum = 0;
    function funcionHija(velocidad) {
        i++;
        velocidadacum += velocidad;
        return velocidadacum / i;
=======
function averageSpeed(){
    let i=0;
    let velocidadacum=0;
    function funcionHija(velocidad){
    i++;
    velocidadacum+=velocidad;
    return velocidadacum/i;
>>>>>>> 1645fc32ef463392f108caec972f0f07e898dd21
    }
    return funcionHija;
}

let average = averageSpeed();
console.log(average(100));
console.log(average(50));
console.log(average(75));