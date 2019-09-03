const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function  request (apiURL, category, onSuccess, onError) {
    let req = new XMLHttpRequest ();

     let URL;
    if (apiURL.match(new RegExp('sv443.net'))) {
        URL = apiURL.concat('', category +'?type=twopart');
    } else {
        URL = apiURL;
    }

    req.open('GET', URL);
    req.send();
    req.onload = () => {
        if (req.status >= 200 && req.status <= 299) {
       const responseObj = JSON.parse(req.responseText);

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
    };

        req.onError = () => {
        onError(`New Error: (No jokes at URL: ${URL})`);
        return false;
            };
    req.addEventListener('error', function () {
        console.error('network error');
    });
   
};

function giveMeAJoke(apiURL, category) {
  return new Promise((resolve, reject) => {
    request (apiURL, category, resolve, reject);
  });
}; 



giveMeAJoke('https://sv443.net/jokeapi/category/', 'dark');


module.exports = giveMeAJoke;





        
        
    
    





