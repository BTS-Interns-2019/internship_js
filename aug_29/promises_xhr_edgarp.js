/*
const Get = new Promise ((onsuccess, onerror) => {
    //let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    let req = new XMLHttpRequest ();
    get (req, onsuccess, onerror);
    
});

function show (answer){
    console.log(answer);
}

function error (err){
    console.log(err);
}

function get (req, onsuccess, onerror) {
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
}

Get
    .then(show)
    .catch(error);

const Post = new Promise ((data, onsuccess, onerror) => {
    //let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let req = new XMLHttpRequest ();
    req.open ('POST', 'https://reqres.in/api/users', true);
    const datastring = JSON.stringify(data);
    post (req, datastring, onsuccess, onerror);

});

  const data = {
    name: 'Edgar',
    last_name: 'Peregrino'
};


function post (req, datastring, onsuccess, onerror) {
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
    
    request ('Get', onsuccess, onerror);

});

function request (method, onsuccess, onerror){
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

    module.exports = {
        get,
        post,
        request,
    } */

  function request(method, url, onSuccess, onError, data) {
  const req = new XMLHttpRequest();
  let dataString;

  if (data) {
    dataString = JSON.stringify(data);
  }

  req.open(method, url);
  req.send(dataString);

  req.onreadystatechange = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status >= 200 && req.status < 300) {
        try {
          onSuccess(req.responseText);
        } catch (error) {
          onError(error);
        }
      } else if (req.status) {
        try {
          onError(req.responseText);
        } catch (error) {
          onError(error);
        }
      } else {
        onError(new Error('An error ocurred'));
      }
    }
  };
}

// GET 
function get(url) {
  return new Promise((resolve, reject) => {
    request('GET', url, resolve, reject);
  });
}

// POST 
function post(url, data) {
  return new Promise((resolve, reject) => {
    request('POST', url, resolve, reject, data);
  });
}

// PUT 
function put(url, data) {
  return new Promise((resolve, reject) => {
    request('PUT', url, resolve, reject, data);
  });
}

module.exports = {
  request,
  get,
  post,
  put,
};