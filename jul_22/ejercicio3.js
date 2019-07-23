bien (3);
function bien (i) {
try {
    if (isNaN (i)){
    throw "error";
    }
while (i < 6){
        console.log (typeof (i));
    i ++;
  } 
} catch (e) {
    console.log ("el valor no es numerico");
}
 return true;
}