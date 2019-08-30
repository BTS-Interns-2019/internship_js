const Get = new Promise ((onsuccess, onerror) => {
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    let req = new XMLHttpRequest ();
    req.open ('GET', 'https://reqres.in/api/users/2', true);
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
});

function show (answer){
    console.log(answer);
}

function error (err){
    console.log(err);
}

Get
    .then(show)
    .catch(error);

const Post = new Promise ((data, onsuccess, onerror) => {
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let req = new XMLHttpRequest ();
    req.open ('POST', 'https://reqres.in/api/users', true);
    const datastring = JSON.stringify(data);
    Posts (req, datastring, onsuccess, onerror);

});

  const data = {
    name: 'Edgar',
    last_name: 'Peregrino'
};


function Posts (req, datastring, onsuccess, onerror) {
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

Post
    .then(show)
    .catch(error);

const Request = new Promise ((onsuccess, onerror) => {
    
    methods ('Get', onsuccess, onerror);

});

function methods (method, onsuccess, onerror){
    switch (method.toUpperCase()){
        case 'GET':
            Get
    .then(onsuccess)
    .catch(onerror);
            break;
        case 'POST':
            Post
    .then(onsuccess)
    .catch(onerror);
            break;   
        default:
            console.log('unknow method');
            break;
    }   

}

Request
    .then(show)
    .catch(error);