function jsonTimes(year){
  var anio;
  var fecha;
  var fecha_mod;
  var result = {};
  var arrayFechas = [];

  if((typeof year === 'number') || 
  (typeof year === 'string' && year.length === 4)){
    console.log("es number");
    anio = year;
  } else if(typeof year === 'string'){
    anio = year.substring(0,4);
  } else if(typeof year === 'object'){
    anio = year.getFullYear();
  } 
  
  for(var i=0; i<12; i++){
    fecha = new Date(anio,i,13);
    if(fecha.getDay() === 5){
      console.log("si entra");
      fecha.getMonth() < 10 ? fecha_mod = "0"+(fecha.getMonth()+1)+"/" : fecha_mod = (fecha.getMonth()+1)+"/";
      fecha.getDate() < 10 ? fecha_mod += "0"+fecha.getDate()+"/" : fecha_mod += fecha.getDate()+"/";
      fecha_mod += fecha.getFullYear()
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
  var message = "";
  var rounded = false;

  if(typeof fromDate == 'undefined'){
    console.log('fromDate undefined');
    fromDate = new Date(Date.now());
  }
  var miliseconds = toDate.getMilliseconds() - fromDate.getMilliseconds();
  var seconds = toDate.getSeconds() - fromDate.getSeconds();
  var minutes = toDate.getMinutes() - fromDate.getMinutes();
  var hours = toDate.getHours() - fromDate.getHours();
  var days = toDate.getDate() - fromDate.getDate();
  var months = toDate.getMonth() - fromDate.getMonth();
  var years = toDate.getFullYear() - fromDate.getFullYear();

  console.log(years);
  console.log(months);
  console.log(days);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
  

  function round(number){
    var num = Math.abs(number);

    switch(true){
      case num => 30:{
        if(num > 30){
          return "more than 30 ";
          break;
        } else {
          return "30 ";
          break;
        }
      }

      case num >= 20:{
        if(num >= 25){
          return "less than 30 ";
          break;
        } else if(num !== 20){
          return "more than 20 ";
          break;
        } else {
          return "20 ";
          break;
        }
      }

      case num >= 10:{
        if(num >= 15){
          return "less than 20 ";
          break;
        } else if(num !== 10){
          return "more than 10 ";
          break;
        } else {
          return "10 ";
          break;
        }
      }

      case num >= 5:{
        if(num >= 8){
          return "less than 10 ";
          break;
        } else if(num !== 5){
          return "more than 5 ";
          break;
        } else {
          return "5 ";
          break;
        }
      }

      case num >= 2:{
        if(num === 4){
          return "less than 5 ";
          break;
        } else if(num === 3){
          return "more than 2 ";
          break;
        } else {
          return "2 ";
          break;
        }
      }

      case num === 1:{
        return "2 ";
        break;
      }
    }
  
  }

  switch(true){
    case Math.abs(years) > 0: {
      if(Math.abs(months) >= 1 && Math.abs(years) === 1){
        message = "less than 1 year ago";
        break;
      }
      message = round(years);
      if(Math.abs(years) > 1 || message.charAt(0) == '2'){
        message += "years"
      } else {
        message += "year"
      }
      if(years < 0){
        message += " ago";
      } else {
        message = message.padStart(message.length+3, "in ");
      }
      break;
    }

    case Math.abs(months) > 0: {
      if(Math.abs(months) >= 6){
        message = "less than 1 year"
      } else{
        message = round(months);
      }

      if(Math.abs(months) > 1 || message.charAt(0) == '2'){
        message += "months"
      } else {
        message += "month"
      }
      if(months < 0){
        message += " ago";
      } else {
        message = message.padStart(message.length+3, "in ");
      }
      break;
    }

    case Math.abs(days) > 0: {
      if(Math.abs(days) >= 15){
        message = "less than 1 month"
      } else{
        message = round(days);
      }
      if(Math.abs(days) > 1 || message.charAt(0) == '2'){
        message += "days"
      } else {
        message += "day"
      }
      if(days < 0){
        message += " ago";
      } else {
        message = message.padStart(message.length+3, "in ");
      }
      break;
    }

    case Math.abs(hours) > 0: {
      if(Math.abs(hours) >= 12){
        message = "less than 1 day"
      } else{
        message = round(hours);
      }
      if(Math.abs(hours) > 1 || message.charAt(0) == '2'){
        message += "hours"
      } else {
        message += "hour"
      }

      if(hours < 0){
        message += " ago";
      } else {
        message = message.padStart(message.length+3, "in ");
      }
      break;
    }

    case Math.abs(minutes) > 0: {
      if(Math.abs(minutes) >= 30){
        message = "less than 1 hour"
      } else{
        message = round(minutes);
      }
      if(Math.abs(minutes) > 1 || message.charAt(0) == '2'){
        message += "minutes"
      } else {
        message += "minute"
      }

      if(minutes < 0){
        message += " ago";
      } else {
        message = message.padStart(message.length+3, "in ");
      }
      break;
    }

    case Math.abs(seconds) > 0: {
      message = "less than 1 minute"

      if(seconds < 0){
        message += " ago";
      } else {
        message = message.padStart(message.length+3, "in ");
      }
      break;
    }

    case Math.abs(miliseconds) > 0: {
      message = "less than 1 minute"

      if(seconds < 0){
        message += " ago";
      } else {
        message = message.padStart(message.length+3, "in ");
      }
      break;
    }
  }
  return message;
}

module.exports = {
  jsonTimes,
  toLazyHuman
}