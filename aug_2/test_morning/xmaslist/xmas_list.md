# Xmas List

>Function definition in `xmas_list.js`

>TDD in `xmas_list.test.js`

Type your name in comments at the top of the file.


Santa needs your help to know who is receiving what for this Xmas.
The bad news is that maybe there are not enough toys for every one, so younger kids has preference, if a kind doesn't have a gift he will receibe `coal` instead.

He only has a list of the kids of the world in his notepad which includes an average score of how good was the id during the last year.

Also the elfs have provided an array of the toys they have made for this season.

* Write a function called `xmasList`
* The function receives 2 parameters
  * `kids` as a coma separated multiline string
    * Each line of the string contains `name`, `age` and `score` comma separated
  * `toys` an array of objects containing `{description: <string>, quantity: <number>}`
* The toys will be assigned to each kid by `finalScore`, higher scores get gifts first
* The final score will be calculated based in `score - age * 2` to keep the preference for younger kids
* The ones that didn't reach a gift will receibe `coal`
* The function will return an array containing the list of the kids in the same order they where provided
  * Each kid is an object with his own data and an aditional attribute `gift` which will be the `description` of the toy he receives or `'coal'`

## TDD

You are provided with a sample tests file.

Add at least another 2 useful test cases.