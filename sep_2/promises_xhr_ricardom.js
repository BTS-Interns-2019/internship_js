

function get(url, onSuccess, onError) {
  getPromise = new Promise(url, )
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if(xhr.status < 200 || xhr.status > 299){
        onError(xhr.responseText)}
        else{ onSuccess(xhr.responseText);}
  };

  xhr.onerror = () => {
    onError(xhr.responseText);
  };
}



function post(){};
function request(){};


  module.exports = {get,post,request};