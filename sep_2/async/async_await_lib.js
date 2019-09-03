// const XMLHttpRequest = require( 'xmlhttprequest' ).XMLHttpRequest

function request(method, url, data){
  
  return new Promise( (resolve, reject) => {
    const Http = new XMLHttpRequest();
    
    Http.open(method, url);
    
    Http.onload = () => {
      if(Http.status === 200){
        resolve(Http.responseText);
      }
      else{
        reject(Http.responseText);
      };
    };

    Http.onerror = (error) => {
      let err = JSON.stringify(error);
      reject(err);
    };
    Http.send(data);

  }).then( (response) => {
    
    return response
  }).catch( (err) => {
    // console.log(err)
    return new Error(`No response from url: ${url}. Error: ${err}`)
  })
};

function get(url){

  return request('GET', url);
};

function post(url, data){
  return request('POST', url, data);
};


module.exports = {
  request,
  get,  
  post
};
