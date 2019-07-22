// Switch con finally
try {
   var opcion = "Helado";
   //console.log("¿Qué deseas comer?")
   switch (opcion) {
   case "Helado":
      //console.log("Elegiste Helado");
      break;
   default:
      console.log("Elige algo");
   }
 } catch(e) {
     console.log("Ocurrió un error : " + e);
 } finally {
     console.log("1 Se hizo un finally")
 }

// for
try {
  for (var i=0; i<=5; i++) {
  }
  //console.log(i);
  console.log(j);
} catch(e) {
    console.log("2 Ocurrió un error (name): " + e.name);
}

// while, return y typeof
var n = 0;
function whil(n) {
   try {
      while (n < 3) {
      n++;
      }
      console.log(m);
   } catch(e) {
      console.log("3 Ocurrió un error (message): " + e.message);
      console.log("Los errores son: " + typeof e);
   }
   return n
}
whil(5)
