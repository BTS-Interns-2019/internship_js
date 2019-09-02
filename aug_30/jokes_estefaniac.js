const fetch = require('node-fetch');

async function giveMeAJoke(apiUrl, category){
    let  url;
    if (apiUrl.match(new RegExp('sv443.net'))) {
        url = apiUrl.concat('', category + '?type=twopart') 
    } else {
        url = apiUrl
    }
    let response = await fetch(url);
    let jsonResponse = await response.json();
    
    if(!jsonResponse.jokes) throw new Error(`No jokes at url: ${apiUrl}`);
    
    let joke = jsonResponse.jokes
    
    return { 
        saySetup: function(){
            return joke.setup;
        },
        sayPunchLine: function(){
            return joke.delivery;
        }
    }
}


giveMeAJoke('https://sv443.net/jokeapi/category/miscellaneous?type=twopart', 'Miscellaneous').then((joke) => {
  console.log(joke.saySetup());
  console.log(joke.sayPunchLine());
}).catch((function error(e) {console.log(e.status, e.statusText, e)}));

module.exports = giveMeAJoke;