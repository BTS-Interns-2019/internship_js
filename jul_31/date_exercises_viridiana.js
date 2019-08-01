/*# Dates exercises
Function definitions in the file `date_exercises_<name>.js`
TDD in the file `date_exercises_<name>.test.js`

## 1) Tell me when Json is coming in the given year
* Function name `jsonTimes`
*/

/*function jsonTimes(dataT){
    let date;

    if(dataT.toString().length<=4){
      date=new Date(dataT,0);
    }else if(typeof dataT ==='string'){
      date=new Date(data)
    }else{
      date = Date(+dataT)
    }

    date.setDate(13)

    const result={dates: []}
}

const mes = date.getMonth()+1;

for(let mes = 0; mes <12; mes ++){
  date.setMonth(mes);
  if(date.getDay===5){

    result.dates.push(
      month.toString().padStart(2, '0') + '/' + date.getDate + '/' + date.getFullYear()
    )
  }


}

result.times = result.dates.length;
return result;

console.log(jsonTimes())


*/


/*
* Upload it before `17:30 07/31/2019`
* Receives a single paramater
* This paramater could be...
  * a `number` represeting the year to watch for...
  * a 4 characters `string` represeting the year to watch for...
  * a timeString in `ISO 8601` representing a date
  * a date object
* For any case you need to return an object containing
  * `times`: the number of times a friday 13 appears in the current year
  * `dates`: an array of dates when Json is coming (firday 13)
    * this date must be a string in the form `mm/dd/YYY`


# TDD

Write 2 test cases for each exercise.*/

/*## 2) Lazy human time visualization
  * Function name `toLazyHuman` 
  * Receives 2 argument as Date objects
  * If second argument is not present use `now`
  * Returns an string representing the time difference between the arguments
    * The string will be rounded to values of 1, 2, 5, 10, 20, 30, of magnitude minutes, hours days, months, years
    * The magnitude of the value should be in singular or plural as needed
    * If the rounding is to the *top* preppend `"less than`
    * If the rounding is to the *floor* preppend `"more than`
    * If the difference is *negative* you need to append `"ago"`
    * If the difference is *positive* you need to preppend `"in"`*/

   function toLazyHuman(date1, date2) {

    if(date2===undefined){//si no recibes date2 te crea un date2 con la funcion Date.now con el dia actual
     let date2=new Date(Date.now())
      console.log(date2)
    }
    date1=date1.toISOString()//recibes date 1 como objeto y lo conviertes en string
    date2=date2.toISOString()
    console.log(date1)
    console.log(date2)
    
    date1=date1.replace(/[-:.TZ]/g, " ").split(" ")
    console.log(date1)
    date2=date2.replace(/[-:.TZ]/g, " ").split(" ")
    console.log(date2)

    let contador=0;
    for(i=0; i<date1.lenght-1; i++)
    if(date2[i]!==date2[i]){
      contador++;
    }
    
    
   }
   toLazyHuman(new Date(1994,12,24,06,03,00),new Date (1992,03,11,10,36,30))
