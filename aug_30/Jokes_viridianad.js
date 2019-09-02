const HMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function giveMeAJoke(apiUrl, category){
    return new Promise((resolve, reject) => {
      if(apiUrl !== "https://sv443.net/jokeapi/category/miscellaneous?type=twopart") 
      throw new Error('No jokes at url: '+apiUrl);
      
      fetch("https://sv443.net/jokeapi/category/miscellaneous?type=twopart").then(resp => {
        return resp.json();
      }).then(result => { 
        resolve({
          saySetup() {
            return jokes[0].setup;
          },
          sayPunchLine() {
            return jokes[0].delivery;
          }
        });
      }).catch(e => reject(e));
    });
  }

