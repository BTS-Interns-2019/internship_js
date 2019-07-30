/*# Array Iterator Methods Homework

* file name `am_iterators_homerowk_<name>.js` for function definition.

* function name `charCounter`.

* Create a function that receives 1 string as parameter and returns an object indicating how many times a letter was used.
* Each key of the object will be a used letter in lowercase
* Any character that is not a letter must be ignored
* for, while, do...while loops are forbidden*/

function charCounter(word){
    let newObject={};
    word=word.toLowerCase().split('');
    //console.log(word)
    
    
    word.forEach(function(element) {
      if (element.match(/[a-z]/g)){
         if (newObject[element] !== 0 && !newObject[element]){
           //console.log(newObject)
           newObject[element] = 1;
        
         }else{
           newObject[element]++;
         }
      }
     
    }
    
    );
    
       return newObject;
    }
    charCounter('Hola Como EstaS')

    module.exports=charCounter;

