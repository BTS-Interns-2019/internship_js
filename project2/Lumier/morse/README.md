# Morse code
The **morse code** is a language that interprets a **message through signals in shape of dots, lines and blank spaces**. This code was used in **telegraph lines** which used to send **encrypted messages** in two or more different locations.

----------------------------------------
## Rules of Morse Code

1 The length of a *dot* is **one unit**   
2 A *dash* (line) is **three units**   
3 The *space between* parts of the **same letter** is **one unit**  
4 The *space between the ***letters**** is **three units**  
5 The *space between ***words**** is **seven units**  
6 One *unit* is equal to **two binary values**  
7 The *dots* and *dashes* are represented as **ones**  
8 The *spaces* are represented as **zeroes**

-------------------------------------------
## Morse alphabet

>   * A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · -
>   * B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   - · · ·
>   * C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - · - ·
>   * D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - · ·
>   * E &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ·
>   * F &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · - ·
>   * G &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - ·
>   * H &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · · ·
>   * I &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · ·
>   * J &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · - - -
>   * K &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - · -
>   * L &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · - · ·
>   * M &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - -
>   * N &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - ·
>   * O &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - -
>   * P &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · - - ·
>   * Q &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - · -
>   * R &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · - ·
>   * S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · ·
>   * T &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  -
>   * U &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · -
>   * V &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · · -
>   * W &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · - -
>   * X &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - · · -
>   * Y &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - · - -
>   * Z &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - · ·
>   * 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · - - - -
>   * 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · - - -
>   * 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · · - -
>   * 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · · · -
>   * 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · · · ·
>   * 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - · · · ·
>   * 7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - · · ·
>   * 8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - - · ·
>   * 9 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - - - ·
>   * 0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - - - -
------------------------
## Units

A *unit* is a pair of **binary numbers** that can be **one** or **zero** depending of the case.

### Zeroes

> - Space between part of the same letter: This means that this pair of zeroes divide the dots and dashes of a word  
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One unit: &nbsp;&nbsp;00    
> - Space between letters: This means that these pairs of zeroes divide a character of another character   
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Three units: &nbsp;&nbsp;00 00 00
> - Space between words: This means that these pairs of zeroes divide a word of another word   
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seven units: &nbsp;&nbsp;00 00 00 00 00 00 00

### Ones
> - · (dot):   
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One unit: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
> - \- (dash):   
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Three units: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11
## Binary table of the alphabet
> #### Table of characters
> -----
>   * A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 11 11
>   * B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   - · · · &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 00 11 00 11
>   * C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - · - · &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 00 11 11 11 00 11
>   * D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - · · &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 00 11
>   * E &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
>   * F &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · - ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 00 11 11 11 00 11
>   * G &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 11 11 00 11
>   * H &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · · ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 00 11 00 11
>   * I &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11
>   * J &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · - - -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 11 11 00 11 11 11 00 11 11 11
>   * K &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - · -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 00 11 11 11
>   * L &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · - · ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 11 11 00 11 00 11
>   * M &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 11 11
>   * N &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11
>   * O &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 11 11 00 11 11 11
>   * P &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · - - ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 11 11 00 11 11 11 00 11
>   * Q &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - · -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 11 11 00 11 00 11 11 11
>   * R &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · - ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 11 11 00 11
>   * S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 00 11
>   * T &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11
>   * U &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 00 11 11 11
>   * V &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · · -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 00 11 00 11 11 11
>   * W &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · - -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 11 11 00 11 11 11
>   * X &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - · · -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 00 11 00 11 11 11
>   * Y &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - · - -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 00 11 11 11 00 11 11 11
>   * Z &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - · ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 11 11 00 11 00 11
>   * 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · - - - -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 11 11 00 11 11 11 00 11 11 11 00 11 11 11
>   * 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · - - -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 00 11 11 11 00 11 11 11 00 11 11 11
>   * 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · · - -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 00 11 00 11 11 11 00 11 11 11
>   * 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · · · -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 00 11 00 11 00 11 11 11
>   * 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  · · · · ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 00 11 00 11 00 11 00 11
>   * 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - · · · ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 00 11 00 11 00 11
>   * 7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - · · ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 11 11 00 11 00 11 00 11
>   * 8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - - · ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 11 11 00 11 11 11 00 11 00 11
>   * 9 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - - - ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 11 11 00 11 11 11 00 11 11 11 00 11
>   * 0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - - - - -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 11 11 00 11 11 11 00 11 11 11 00 11 11 11
-------------
### Instructions of the function

The function works receiving **one argument**, which is a *string* (not a numeric value). This *string* value must contain a **valid chain of zeroes and ones**.

> Valid chain:   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 11 11 00 11 00 11 11 11 00 11 11 11 00 00 00 11 11 11 00 11 11 11 00 11 11 11 00 00 00 11 00 11 00 11 11 11   
>> This chain returns "YOU"  

How you can see **a valid chain always begins and ends with ones** and **each *unit* just contain ones or zeroes**, this exclude the cases 10 and 01 which are not considered in the function.   
Also, we can organize the chain for understand better how it composes.
> The first part is the letter 'y' (you can confirm it checking the alphabet table)   
> 11 11 11 &nbsp;&nbsp; 00 &nbsp;&nbsp; 11 &nbsp;&nbsp; 00 &nbsp;&nbsp; 11 11 11 &nbsp;&nbsp; 00 &nbsp;&nbsp; 11 11 11   
> The first *three units* are a *dash*, the second is a *space between a part of the letter*, the third is just *one unit*, it means a *dot*, and then the combination for produce the morse code '- · - - '.   
> 
> The next part are *three units* of zeroes, it means that **the first word is finalized**. This part is *the space between the letters*, it must be added once a letter has completed.   
> 00 00 00
>
> Continuing the *string*, we got another letter, this letter is the 'o' (you can confirm it checking the alphabet table)   
>11 11 11 &nbsp;&nbsp; 00 &nbsp;&nbsp; 11 11 11 &nbsp;&nbsp; 00 &nbsp;&nbsp; 11 11 11
>
> After that appear *the space between the letters* again   
> 00 00 00
>
> And finally, the *string* ends with the letter 'u' (you can confirm it checking the alphabet table)
>11 &nbsp;&nbsp; 00 &nbsp;&nbsp; 11 &nbsp;&nbsp; 00 &nbsp;&nbsp; 11 11 11

The *return value* will be **the message decrypted and interpreted in human language**.  
The table may be useful if you want to create your own messages, just remember that three units are t*he space between letters* and **seven units** are *the space between words* (a message that has a *blank space* like "HELLO WORLD" must need **seven units** for divide "HELLO" of "WORLD").