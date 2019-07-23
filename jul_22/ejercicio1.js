val (10);

function val (num){
    try
    {
      switch (num)
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
    } catch (e){
        console.log ("seleccion incorrecta");
    } finally {
       console.log ("puedes cambiar tu opcion") 
       return false;
    }
 }
  