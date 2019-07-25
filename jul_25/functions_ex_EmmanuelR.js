persona ={
    "nombre" : "",
    "direccion" : "",
    "numero" : "",
    "ocupacion" : "",
    "edad" : "",
    "comidaFavorita" : [],
    "fraseFavorita" : ""
}
function llenadoNombre (objeto,valor){
    objeto.nombre=valor;
}
function llenadoDireccion (objeto,valor){
    objeto.direccion=valor;
}
function llenadoNumero (objeto,valor){
    objeto.numero=valor;
}
function llenadoOcupacion (objeto,valor){
    objeto.ocupacion=valor;
}
function llenadoEdad (objeto,valor){
    objeto.edad=valor;
    if(valor>18) objeto.edad = function(){return hurry}
}
function llenadoComidaFavorita (objeto,valor){
    objeto.comidaFavorita=valor;
}
function llenadoFraseFavorita (objeto,valor){
    objeto.fraseFavorita=valor;
}
// funciones llenando cada campo.
// reciben 2 parametros (objeto, valor)
// cada funcion solo puede llenar una propiedad con el valor que se pasa
// si edad es mayor a 18, asigna una funcion a esa propiedad que retorne "hurray"

llenadoNombre (persona,"Jose Alfredo Jimenez");
llenadoDireccion(persona,"La casa verde junto a la tiendita");
llenadoNumero (persona,"1234567890");
llenadoOcupacion (persona,"Probador de lavamanos públicos");
llenadoEdad (persona,33);
llenadoComidaFavorita (persona,["tacos","tacos de pastor","tacos de canasta","tacos de azada"]);
llenadoFraseFavorita (persona,"Caleeee");

