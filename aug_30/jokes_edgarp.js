let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function  request (apiURL, category, onSuccess, onError) {
    let req = new XMLHttpRequest ();

     let URL;
    if (apiURL.match(new RegExp('https://sv443.net/jokeapi/category/'))) {
        URL = apiURL.concat('', category +'?type=twopart');
    } else {
        URL = apiURL;
    }

    req.open('GET', URL);
    
    req.addEventListener('load', function () {
        if (this.status >= 200 && this.status <= 299) {
       const responseObj = JSON.parse(this.responseText);

       if (typeof responseObj !== 'object' || !('setup' in responseObj)) {
           onError(`New Error: (No jokes at URL: ${URL})`)
           return false;
       }
       Object.defineProperties(responseObj, {
            saySetup: {
                value () {
                    return this.setup;
                },
                writable: false,
            },
            sayPunchLine: {
                value () {
                    return this.delivery;
                },
                writable: false,
            },
        });

        onSuccess(responseObj);
        return true;
        } 

        onError(`New Error: (No jokes at URL: ${URL})`);
        return false;
    });

        req.onError = () => {
        onError(`New Error: (No jokes at URL: ${URL})`);
        return false;
            };
    req.addEventListener('error', function () {
        console.error('network error');
    });
   req.send();
};

function giveMeAJoke(apiURL, category) {
  const promise = new Promise((resolve, reject) => {
    request (apiURL, category, resolve, reject);
  });
  promise
    .then(show)
    .catch(error);
}; 

function show (answer){
    console.log(answer);
}

function error (err){
    console.log(err);
}


giveMeAJoke('https://sv443.net/jokeapi/category/', 'dark');


module.exports = giveMeAJoke;





        
        
    
    





