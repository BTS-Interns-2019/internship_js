function jsonTimes(year){
  var anio;
  var fecha;
  var fecha_mod;
  var result = {};
  var arrayFechas = [];

  if(typeof year === 'number'){
    anio = year;
  } else if(typeof year === 'string' && year.length === 4){
    anio = year;
  }
  
  for(var i=0; i<12; i++){
    fecha = new Date(anio,i,13);
    if(fecha.getDay === 5){
      counter ++;
      fecha_mod = fecha.getMonth() + "/" + 
                  fecha.getDate() + "/" +
                  fecha.getFullYear()
      arrayFechas.push(fecha_mod);
    }
  }

  obj = {
      times:arrayFechas.length,
      dates:arrayFechas
  };
  return obj;
}