/*# Dates exercises
Function definitions in the file `date_exercises_<name>.js`
TDD in the file `date_exercises_<name>.test.js`

## 1) Tell me when Json is coming in the given year
* Function name `jsonTimes`
*/

function jsonTimes(dataT){
    let date;

    if(dataT.toString().length<=4){
      date=new Date(dataT,0);
    }else if(typeof dataT ==='string'){
      date=new Date(data)
    }else{
      date = Date(+dataT)
    }

    date.setDate(13)
    
}


jsonTimes()
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

   function tola(date1, date2) {
    date2=new Date(Date.now())
    date1=new Date(date1)
    let diff = date1 - date1; // the difference in milliseconds
  
    if (diff < 1000) { // less than 1 second
      return 'right now';
    }
  
    let sec = Math.floor(diff / 1000); // convert diff to seconds
  
    if (sec < 60) {
      return sec + ' sec. ago';
    }
  
    let min = Math.floor(diff / 60000); // convert diff to minutes
    if (min < 60) {
      return min + ' min. ago';
    }