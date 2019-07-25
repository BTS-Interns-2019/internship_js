var arreglo = [];
salto = "\n";
var sep = "";
var balance = [];
var id = [];
var descripcion = [];
var costo =[];

function expensesParser(input){

   sep = input.split(" ");
   console.log(sep);

   balance.push(sep[0]);
   console.log(balance);

   for(i = 1, j = 1; i < sep.length ; i++, j++){
       if(j == 4){
           j = 1;
       }else if(j==1){
           id.push(sep[i]);
       }else if(j==2){
           descripcion.push(sep[i]);
       }else if(j == 3){
           costo.push(sep[i]);
       }

        console.log(id);
        //console.log(descripcion);
       // console.log(costo);
   }
   
}

expensesParser("1000.00 127 Video 7.45 128 Gasoline 16.10");







/*
var arreglo = [];
salto = "\n";
var sep = "";
var matrix = [0][0];
var balance = [];
var id = [];
var descripcion = [];
var costo =[];

function expensesParser(input){

   sep = input.split(" ");
   console.log(sep);

   balance.push(sep[0]);
   console.log(balance);

   for(i in sep){
     for(j = 1 ; j < 4 ; j++){
       console.log();
     }
   }



}

expensesParser("1000.00 127 Video 7.45 128 Gasoline 16.10");
*/