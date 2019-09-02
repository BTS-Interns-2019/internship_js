const XMLHttpRequest = require( 'xmlhttprequest').XMLHttpRequest;

/* endpoints and categories */ 
const apiUrl = 'https://sv443.net/jokeapi/category';
const category = ['programming', 'miscellaneous', 'dark','any']; //?type=single  type=twopart


// giveMeAJoke(apiUrl, category[3]).then( (response) => {
//   console.log( saySetUp(response) );
//   console.log( sayPunchLine(response) );
// }).catch( () => {
//   console.log(new Error ('Internet gone or something... find it out!'))
// });

/* Request function */
function giveMeAJoke(apiUrl, category){

  return new Promise ( (resolve, reject) => {
    
    const Http = new XMLHttpRequest();
    
    Http.open('GET', `${apiUrl}/${category}`)
    
    Http.onload = function(){
      if(this.status === 200){
        let response = JSON.stringify(this.responseText);
        resolve(response);
      }
      else{
        let reason = JSON.stringify(this.responseText);
        reject(reason);
      }
    };
    Http.onerror = (error) => {
      reject(error)
    }
    Http.send();
  }).then( (response) => {

    return response
  }).catch( (reason) => {

    return new Error(`No jokes at url: ${apiUrl}`)
  })
};

/* Setup extraction */
function saySetUp(string){
  let lines = string.split(',\\n\\t');
  
  for(let line of lines){
    if(line.includes('setup')){
      return line.replace(/[\\]/g, '');
    };
  };
};

/* Punchline (delivery) extraction */
function sayPunchLine(string){
  let lines = string.split(',\\n\\t');

  for(let line of lines){
    if(line.includes('delivery')){
      return line.replace(/[\\]/g, '');
    };
  };
};

module.exports = {
  giveMeAJoke,
  saySetUp,
  sayPunchLine
};