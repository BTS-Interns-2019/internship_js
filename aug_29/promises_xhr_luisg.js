const {get:getCB,
    request: requestCB} = require('./simple_xhr_luisg').XMLHttpRequest;

const promise = new Promise((onsuccess, onerror) => request('GET', 'https://reqres.in/api/users/2', onsuccess, onerror));

function request(method,url,data){
 return new Promise((onsuccess,onerror)=>{
    requestCB(method,url,data,onsuccess,onerror)
 })
}

