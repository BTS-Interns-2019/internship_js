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
"2019-07-31T12:04:00.000" | "2019-07-31T12:00:00.000" | "00:04:00.000" | "in less than 5 minutes"
//   lo que sucedera              hoy
# TDD

Write 2 test cases for each exercise.
 */

function jsonTimes(input){
  if(!!+input){
    const jasonComes = {
      times:0,
      dates:[]
    }
    for(let m = 0; m < 12; m++){
        day = new Date(input,m,13).toString().split(" ");
          if(day[0] === "Fri"){
            let date = ''+'0'+(m+1)+'/'+13+'/'+input
            // jasonComes.dates.push(day.join(' '))
            jasonComes.dates.push(date)
            jasonComes.times++
          }
    }console.log(jasonComes)
  }
  else{
    new Date(input).toString()
  }
}
// jsonTimes(1990)
// jsonTimes("1998-13-20T03:23:27.000Z")

const date1 = "2019-07-31T12:04:00.000" 
const date2 = "2005-20-31T12:00:00.000"

function toLazyHuman(date, date2){
  let suppDate;
  if(!date2){
    suppDate = new Date().replace(/[-:.]/g, ' ').split(" ")
    
  }
  let arrDate = date.replace(/[-:.]/g, ' ').split(" ")
  let arrDate2 = date2.replace(/[-:.]/g, ' ').split(" ")
  console.log(arrDate)
  console.log(arrDate2)

    let counter = 0
    for(let i = 1; i <= arrDate.length; i++){
      if(arrDate[i-1] !== arrDate2[i-1]){
        counter += i
        break
      }
    }
    console.log(counter)
    switch(counter){
      case 1:
        if(arrDate[0] - arrDate2[0] > 10){
          return "in less than 10 years"
        }
        else if(arrDate[0] - arrDate2[0] < 10){
          return "in less than 10 years"
        }
        else if(arrDate[0] - arrDate2[0] > -20 && arrDate[0] - arrDate2[0] < 0){
          return "more than 10 years ago"
        }
        else if(arrDate[0] - arrDate2[0] > -10 && arrDate[0] - arrDate2[0] < 0){
          return "less than 10 years ago"
        }
      break
      // case 2:
      //   if(+(arrDate[1] - arrDate2[1]) > 10){
         
      //     return "more than 10 days"
      //   }
    }
}
console.log(toLazyHuman(date1, date2))


module.exports = jsonTimes;