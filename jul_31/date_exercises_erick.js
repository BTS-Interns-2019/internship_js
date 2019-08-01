/*
# Dates exercises
Function definitions in the file `date_exercises_<name>.js`
TDD in the file `date_exercises_<name>.test.js`

## 1) Tell me when Json is coming in the given year
* Function name `jsonTimes`
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

## 2) Lazy human time visualization
  * Function name `toLazyHuman`
  * Receives 2 argument as Date objects
  * If second argument is not present use `now`
  * Returns an string representing the time difference between the arguments
    * The string will be rounded to values of 1, 2, 5, 10, 20, 30, of magnitude minutes, hours days, months, years
    * The magnitude of the value should be in singular or plural as needed
    * If the rounding is to the *top* preppend `"less than`
    * If the rounding is to the *floor* preppend `"more than`
    * If the difference is *negative* you need to append `"ago"`
    * If the difference is *positive* you need to preppend `"in"`

### Example
toDate | fromDate | difference | output
--- | --- | --- | ---
"2019-07-31T12:00:00.000" | "2019-07-31T12:01:00.000" | "-00:01:00.000" | "1 minute ago"
"2019-07-31T12:00:00.000" | "2019-07-31T12:01:00.100" | "-00:01:00.100" | "more than 1 minute ago"
"2019-07-31T12:00:00.000" | "2019-07-31T12:04:00.100" | "-00:04:00.100" | "less than 5 minutes ago"
"2007-07-31T12:04:00.000" | "2019-07-31T12:00:00.000" | "00:04:00.000" | "in less than 5 minutes"
//   sucedio / sucedera              hoy
# TDD

Write 2 test cases for each exercise.
 */
// const date1 = "1992-04-11T15:20:26.000"
// const date2 = "1992-04-11T15:20:50.000"

function jasonTimes(input){
  const jasonComes = {
    times:0,
    dates:[]
  }
  
  if(!!+input){ 
    for(let month = 0; month < 12; month++){
        day = new Date(input,month,13).toString().split(" ")
          if(day[0] === "Fri"){
            let date = '0'+(month+1)+'/'+13+'/'+input
            jasonComes.dates.push(date)
            jasonComes.times++
          }
    }
    return jasonComes
  }
  else{
    const dateMod = input.replace(/[-:.T]/g, " ").split(" ")
    for(let month = 0; month < 12; month++){
      day = new Date(dateMod[0],month,13).toString().split(" ")
      if(day[0] === "Fri"){
        let date = (month+1).toString().padStart(2, "0")+'/'+13+'/'+dateMod[0]
        jasonComes.dates.push(date)
        jasonComes.times++
      }
    }
    return jasonComes
  }
}
// console.log(jasonTimes(1982))
// console.log(jasonTimes("2014"))
console.log(jasonTimes("1998-13-20T03:23:27.000Z"))



function toLazyHuman(date, date2){
  if(!date2){
    
  }
  let arrDate = date.replace(/[-:.T]/g, " ").split(" ")
      arrDate2 = date2.replace(/[-:.T]/g, " ").split(" ")

    let counter = 0
    for(let i = 1; i <= arrDate.length; i++){
      if(arrDate[i-1] !== arrDate2[i-1]){
        counter += i
        break
      }
    }
    let data = arrDate[counter-1] - arrDate2[counter-1]
    const magn = ["years", "months", "days", "hours", "minutes", "seconds"]
        
/**--------------------------Negatives------------------------------ */
        if(data < -30){
          return "more than 30 "+magn[counter-1]+" ago"
        }
        else if(data >= -29 && data <= -25){
          return "less than 30 "+magn[counter-1]+" ago"
        }
        else if(data == -30){
          return "30 "+magn[counter-1]+" ago"
        }
        else if(data < -20 ){
          return "more than 20 "+magn[counter-1]+" ago"
        }
        else if(data >= -19 && data <= -15){
          return "less than 20 "+magn[counter-1]+" ago"
        }
        else if(data == -20){
          return "20 "+magn[counter-1]+" ago"
        }
        else if(data < -10){
          return "more than 10 "+magn[counter-1]+" ago"
        }
        else if(data >= -9 && data <= -5){
          return "less than 10 "+magn[counter-1]+" ago"
        }
        else if(data == -10){
          return "10 "+magn[counter-1]+" ago"
        }
        else if(data == -5){
          return "5 "+magn[counter-1]+" ago"
        }
        else if(data < -2){
          return "more than 2 "+magn[counter-1]+" ago"
        }
        else if(data < -1){
          return "more than 1 "+magn[counter-1]+" ago"
        }
        else if (data == -1){
          return "1 "+magn[counter-1]+" ago"
        }   
/**----------------------------Positives---------------------------------- */
        if(data > 30){
          return "in more than 30 "+magn[counter-1]
        }
        else if(data <= 29 && data >= 25){
          return "in less than 30 "+magn[counter-1]
        }
        else if(data == 30){
          return "in 30 "+magn[counter-1]
        }
        else if(data > 20 ){
          return "in more than 20 "+magn[counter-1]
        }
        else if(data <= 19 && data >= 15){
          return "in less than 20 "+magn[counter-1]
        }
        else if(data == 20){
          return "in 20 "+magn[counter-1]
        }
        else if(data > 10){
          return "in more than 10 "+magn[counter-1]
        }
        else if(data <= 9 && data >= 5){
          return "in less than 10 "+magn[counter-1]
        }
        else if(data == 10){
          return "in 10 "+magn[counter-1]
        }
        else if(data == 5){
          return "in 5 "+magn[counter-1]
        }
        else if(data > 2){
          return "in more than 2 "+magn[counter-1]
        }
        else if(data > 1){
          return "in more than 1 "+magn[counter-1]
        }
        else if(data == 1){
          return "in 1 "+magn[counter-1]
        }   

}
// console.log(toLazyHuman(date1, date2))


module.exports = {
  jasonTimes,
  toLazyHuman
}