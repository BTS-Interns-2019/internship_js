//GET

function ajaxGet (URL) {
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    let req = new XMLHttpRequest ();
    req.open ('GET', URL, true);
    Gets (req, show, error );
    
}

function Gets(req, onsuccess, onerror ) {
req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
       onsuccess(req.responseText);
        } else {
            onerror(req.status + ' ' + req.statusText)
        } 
    });
    req.addEventListener('error', function () {
        console.error('network error');
    });
    req.send(null);
};

function show (answer){
    console.log(answer);
}

function error (err){
    console.log(err);
}

ajaxGet ('https://reqres.in/api/users/2');

//POST
function ajaxPost (URL, datastring, onsuccess, onerror) {
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    let req = new XMLHttpRequest ();
    req.open ('POST', URL, true);
    req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
       onsuccess(req.responseText);
        } else {
            onerror(req.status + ' ' + req.statusText)
        } 
    });
    req.addEventListener('error', function () {
        console.error('network error');
    });
    req.send(datastring);
}

const data = {
    name: 'Edgar',
    last_name: 'Peregrino'
};

ajaxPost ('https://reqres.in/api/users', JSON.stringify(data), show, error);

//REQUEST

function ajaxRequest (method, URL, datastring, onsuccess, onerror) {
    switch (method.toUpperCase()){
        case 'GET':
            ajaxGet (URL, onsuccess, onerror);
            break;
        case 'POST':
            ajaxPost (URL, datastring, onsuccess, onerror);
            break;   
        default:
            console.log('unknow method');
            break;
    }   
};

ajaxRequest ('Post', 'https://reqres.in/api/users/2', JSON.stringify(data), show, error);


