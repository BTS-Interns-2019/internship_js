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
"2018-08-31T12:04:00.000" | "2019-07-31T12:00:00.000" | "-0000-11-00" | "in less than 1 year"

# TDD

Write 2 test cases for each exercise.
