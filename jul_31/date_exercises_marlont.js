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

function toLazyHuman(toDate, fromDate){
  if(typeof fromDate == 'undefined'){
    fromDate = Date.now();
  }
  var miliseconds = 0;
  var seconds = 0;
  var minutes = 0;
  var hours = 0;
  var days = 0;
  var months = 0;
  var years = 0;

  var difference = (toDate - fromDate);
  if(difference >= 1000){
    miliseconds = difference%1000;
    difference = difference/1000;
  } else miliseconds = difference; 

  if(difference >= 60){
    seconds = difference%60;
    difference = difference/60;
  } else seconds = difference;

  if(difference >= 60){
    minutes = difference%60;
    difference = difference/60;
  } else minutes = difference;

  if(difference >= 24){
    hours = difference%24;
    difference = difference/24;
  } else hours = difference;

  if(days >= 365){
    minutes = difference%60;
    difference = difference/60;
  } else minutes = difference;
  console.log(difference);
}