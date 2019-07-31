function jsonTimes(year){
  var anio;
  var fecha;
  var fecha_mod;
  var result = {};
  var arrayFechas = [];

  if((typeof year === 'number') || 
  (typeof year === 'string' && year.length === 4)){
    anio = year;
  } else if(typeof year === 'string' && year.length === 24){
    anio = year.substring(0,4);
  } else if(typeof year === 'object'){
    anio = year.getFullYear();
  } 
  
  for(var i=0; i<12; i++){
    fecha = new Date(anio,i,13);
    if(fecha.getDay() === 5){
      console.log("si entra");
      fecha_mod = fecha.getMonth()+1 + "/" + 
                  fecha.getDate() + "/" +
                  fecha.getFullYear()
      arrayFechas.push(fecha_mod);
    }
  }

  result = {
      times:arrayFechas.length,
      dates:arrayFechas
  };
  return result;
}