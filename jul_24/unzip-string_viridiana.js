/*Unzip string
As a developer I want to have a function that receives a zipped string and returns me the original unzipped string.

Acceptance Criteria
The input string can contain any character.
When a numeric value (x) appears it indicates that the following characters will be repeated x number of times each one until a new numeric value appears.
A numeric value is one digit only [0-9]
The resulting string will not have any numeric character
Tech requirements
The function must be named unzipString.
The function should be in a file called unzip-string_<yourname>.js
At the end of the file you must add module.exports = unzipString;
Examples
'a2bc'     >> 'abbcc'
'3D2a5d2f' >> 'DDDaadddddff'
'3d332f2a' >> 'dddffaa'
'abcd'     >> 'abcd'
''         >> ''*/

function unzipString(word){
    let resultado ='';
    wordNew = 0;
    word.split("");
    
      for(let i = 0; i < wordNew.length; i++){ 
          if(!isNaN(wordNew[i])){
              if(isNaN(wordNew[i+1])===!isNaN(wordNew[i])){
                  resultado += wordNew[i+1].repeat(wordNew[i]);                 
              }
          }else{
              (isNaN(wordNew[i]))
              resultado += wordNew[i];
          }
      }
      return resultado;
  }
  unzipString('3D2a5d2f')
  //unzipString('a2bc')
  //unzipString('3D2a5d2f') 
  //unzipString('3d332f2a')
  //unzipString('abcd') 
  

  module.exports = unzipString