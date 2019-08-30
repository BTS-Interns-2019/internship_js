//GET

function ajaxGet (URL, callback, callerror) {
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    let req = new XMLHttpRequest ();
    req.open ('GET', URL, true);
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
}

function show (answer){
    console.log(answer);
}

function error (err){
    console.log(err);
}

ajaxGet ('https://reqres.in/api/users/hjghjg', show, error);

//POST
function ajaxPost (URL, data, callback, callerror) {
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    let req = new XMLHttpRequest ();
    req.open ('POST', URL, true);
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
    req.send(data);
}

const data = {
    name: 'Edgar',
    last_name: 'Peregrino'
};

ajaxPost ('https://reqres.in/api/users', JSON.stringify(data), show, error);

//REQUEST

function ajaxRequest (method, URL, data, callback, callerror) {
    switch (method.toUpperCase()){
        case 'GET':
            ajaxGet (URL, show, callback, callerror);
            break;
        case 'POST':
            ajaxPost (URL, JSON.stringify(data), callback, callerror);
            break;   
        default:
            console.log('unknow method');
            break;
    }   
};

ajaxRequest ('POST', 'https://reqres.in/api/users', JSON.stringify(data), show, error);


