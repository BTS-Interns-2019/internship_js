//while function return typeof
palabras5 = ["palabra1", "palabra2", "palabra3", "palabra4", "palabra5","palabra6"];
try {
    for(i in palabras5){
        if(palabras5.length > 5 ) throw new Error("No pueden ser mas de 5 palabras");
    }
  }
  catch(e) {
    console.error(e.message);
  }

  finally{
    console.log("Programa terminado");
}




  