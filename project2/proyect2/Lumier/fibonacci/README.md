#Fibonacci Sequence
Sequence of numbers made up by **Leonardo of Pisa** in *1838*. And the funny part is... idea came from the assumption of growth population of rabbits! :) 

>>Here it is some of the Sequence:

>>>>***1, 1, 2, 3, 5, 8, 13, 21, 34, 55...***

>> The **0** was intruduced recently, but to this exercise we'll stand for no **0** 

Basicly explained, the sequence is based on **the summation of the previous two numbers**. In the case of our **function** *fibonacci*, we will receive an **integer** as position of the number wanted. 

>>Receving position **10** we will get the number **55** *or* receiving position **6** will throw an **8**. Cool so far!!



We've found two ways to abord the output, because of the amplitude.
>First way was using **BigInt()** method, that takes a number and change its **data type** to *'bigint'*. 

>We found this tool wide usefull to accomplish the test of making a function based on working rules, *but* wasn't usefull on implementation >of tests due it is not yet a **native method** of *Javascript*. It is actually on **Stage 3 (Candidate)**

>Second method we found was an **npm** library called *big-integer* that you can download with command:
```
npm install bin-integer
```
>and calling it in your script with the next line
``` JS
const bigInt = require("bit-integer")
```
>This was we were able to check succesfully some tests. Unfortunely was not able to express largest numbers as expected.

###*Let's jump to the script shall we?!*
