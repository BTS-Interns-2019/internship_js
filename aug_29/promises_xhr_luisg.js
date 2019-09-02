const {
    request: requestCB,
    get,
    post} = require('./simple_xhr_luisg');

//const promise = new Promise((onsuccess, onerror) => request('GET', 'https://reqres.in/api/users/2',undefined,onsuccess,onerror));

//const promiseGet = new Promise((resolve, reject) => requestCB('GET', 'https://reqres.in/api/users/2',undefined, resolve, reject));
//const promisePost = new Promise((resolve, reject) => requestCB('POST', 'https://reqres.in/api/users/2','{}', resolve, reject));
function request(method,url,dataString){
    return new Promise((resolve, reject) => requestCB(method, url,dataString, resolve, reject));
}

/*request("GET",'https://reqres.in/api/users/2',undefined)
  .then(resolve => console.log('response: '+resolve))
  .catch(reject => console.log('Error: '+reject));*/