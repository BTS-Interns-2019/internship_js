const {
    request: requestCB,
    } = require('./simple_xhr_luisg');

//const promise = new Promise((onsuccess, onerror) => request('GET', 'https://reqres.in/api/users/2',undefined,onsuccess,onerror));

//const promiseGet = new Promise((resolve, reject) => requestCB('GET', 'https://reqres.in/api/users/2',undefined, resolve, reject));
//const promisePost = new Promise((resolve, reject) => requestCB('POST', 'https://reqres.in/api/users/2','{}', resolve, reject));
function request(method,url,dataString){
    return new Promise((resolve, reject) => requestCB(method, url,dataString, resolve, reject));
}

function get(url){
    return request("GET",url,undefined);
}

function post(url,dataString){
    return request("POST",url,dataString);
}

module.exports = {get,post,request}


/*request("GET",'https://reqres.in/api/users/2',undefined)
  .then(resolve => console.log('response: '+resolve))
  .catch(reject => console.log('Error: '+reject));*/