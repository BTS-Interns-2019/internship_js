# **Proyect 2**
**By Estefania Cano, Ricardo Martin and Cristian Humberto**

# Morse code

## **Description**

The "***binari morse code***"problem tell us to make a program capable of receive a string binari morse phrase and translate it to a readable by humans phrase, which means that the bits will be translated to morse, the morse translated to a readable phrase and the phrase will be returned to the user.

1. Function morse receives:
    * One input with a binary morse code.
1. The result must be a string that represents the hidden message in the input.

````js
function morse(binaryMorseCode) {
    // your code here ...
    return "Human Readable Text";
}
````

## **Issues**

The principal problem that we found when we started to program the solution was that its a bit difficult to start thinking a solution if it needs array methods because we are not so used to consider it as a tool due to its nature, but with a bit of research we kinda understood the functionality of this methods and used it for the solution.

# Fibonacci

In mathematics, Fibonacci numbers are a sequence where each number is the sum of the previous two, starting with 0 and 1.

## **Description**

This method was programmed with the name of **fibonacci** and receives a parameter that is the number of the position n of the fibonacci series. The parameter is entered in a **while loop** by adding the previous number with the current one, knowing that the **fibonacci of 1 is 1** and starting from there. All the numbers used are converted to **BigInt** to obtain large numbers.

````js
function fibonacci(nth) {
       // your code here ...
    return nthNumberOfFibonacci;
}
````

## **Issues**

Problems were found when programming this function. Since the numbers become of **immense proportions**, it was difficult to find the correct operations to avoid the **infinite number**. Before these problems it was tried to program the function in recursive mode, but it took too long and it had to be changed by the while cycle.


# Sum like kindergarten

## **Description**

The sum like kindergarten problem consist in sum two numbers without use the typical and easy form `strNum1 + strNum2`.

When all children learn to add two numbers with more than one digit, they usually do so by adding digits to a digit with their counterpart. Based on this method, there are two possibilities to solve the sums and are the following:

* When we add the numbers of a column and the **result is less than 10** the result is written under the column.
* When we add the numbers of a column and the **result is equal to or greater than 10** the units of the result are written and the tens in the next column are written down to add them later.

For example, adding up 982 and 9179 would be solved as follows:
````js
  1   1
    9 8 2
+ 9 1 7 9
_________
 10 1 6 1
````

For this case, the problem is to perform a function that can do the sum of two numbers. Having the following requirements:

1. Function **kSum** receives:
    * Two inputs are given that are of **type string** that represent the numbers to be added.
1. The result must be a string that represents the resulting number of the sum of the two inputs.
1. It´s not possible to use form `strNum1 + strNum2`, it´s necessary to use the method shown above that children use.

````js
function kSum('982', '9179') {
    //code here

    return '10161'
}
````
## **Problems and solutions...**

1. First, it´s verified that **both strings have only numerical** values ​​from 0 to 9. Otherwise, a message is requested requesting numerical values.
1. Here the first problem appeared, since we noticed that it was possible to receive numbers of different lengths, so zeros were added to the left of the shortest string to achieve the same length.
1. After this, both strings are transformed into arrays to simulate the two necessary rows in the sum.
1. The sum begins with the final elements of the array to the left and stops before the first element.
    * Only if the sum is greater than 9, a 1 is stored in a counter.
1. The result of the sum is stored in a different variable.
1. Another problem appeared and was that the sum of the first digits was not added completely, since if it was greater than 9 a unit was still added to the counter. Because of this, the sum of both digits is added separately to the rest of the elements.
1. Finally, the result is returned in a string.

## **And horror stories can't be missing...**

* I know that sending a message to your cell phone is stupid because you're dead, but I miss you ...\
* ✅✅ Viewed