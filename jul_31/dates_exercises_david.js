// # Dates exercises

// ## 1) Tell me when Json is coming in the given year
// * Function name `jsonTimes`
// * Receives a single paramater
// * This paramater could be...
//   * a `number` represeting the year to watch for...
//   * a 4 characters `string` represeting the year to watch for...
//   * a timeString in `ISO 8601` representing a date
//   * a date object
// * For any case you need to return an object containing
//   * `times`: the number of times a friday 13 appears in the current year
//   * `dates`: an array of dates when Json is coming (firday 13)
//     * this date must be a string in the form `mm/dd/YYY`


// # TDD
// TDD in the file `date_exercises_<name>.test.js`
// Write 2 test cases for each exercise.

str = 'Hello world !';
str = str.split(' ');

str.forEach(function(item,i,array){
    array[i] = item.split('');
    fl = array[i].shift();
    array[i].push(fl);
    if (array[i].length > 1) {
        array[i] = array[i].join('')+'ay';
    } else {
        array[i] = String(array[i]);
    }
});
str = str.join(' ');
  
console.log(str);




