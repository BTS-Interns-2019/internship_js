const promise = new Promise ((callback, callerror) => {
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    let req = new XMLHttpRequest ();
    req.open ('GET', 'https://reqres.in/api/users/2', true);
    req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
       callback(req.responseText);
        } else {
            callerror(req.status + ' ' + req.statusText)
        } 
    });
    req.addEventListener('error', function () {
        console.error('network error');
    });
    req.send(null);
});

function show (answer){
    console.log(answer);
}

function error (err){
    console.log(err);
}

promise
    .then(show)
    .catch(error);