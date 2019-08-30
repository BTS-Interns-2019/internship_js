const { request: request1 } = require('./simple_xhr_viridianad');


function request (method, url, data){
    return new Promise((resolve, reject)=>{
        request1(method, url, data, resolve, reject)
    })
}

