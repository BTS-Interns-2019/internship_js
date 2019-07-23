check (0);

function check (i) {
try{
  for (i=1; i<= 10; i++){
    switch (i)
       {
        case 1: 
        console.log ("Escogiste la opcion 1");
        break;
        case 2:
        console.log ("Escogiste el numero 2");
        break;
        case 3:
        console.log ("Escogiste el numero 3");
        break;
        case 4:
        console.log ("Escogiste el numero 4");
        break;
        default:
            throw "error";        
       }
    }
  }  
catch (e){ 
    console.log ("te pasaste de la opcion 4");
}
}




