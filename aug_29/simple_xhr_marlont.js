function response (response) {
  console.log(response);
}

function error (error) {
  console.error(error);
}

function get (url, onSuccess, onError) {
  const http = new XMLHttpRequest();
  http.open('GET', url);
  http.addEventListener('load', function(){
    if(http.status >= 200 && http.status < 400){
      onSuccess(http.responseText);
    } else {
      onError(http.status + ' ' + http.statusText);
    }
  });
  http.send();
}

function post (url, data, onSuccess, onError) {
  const http = new XMLHttpRequest();
  http.open('POST', url);
  http.addEventListener('load', function(){
    if(http.status >= 200 && http.status < 400){
      onSuccess(http.responseText);
    } else {
      onError(http.status + ' ' + http.statusText);
    }
  });
  http.send(data);
}

function request (method, url, data, onSucces, onError) {
  switch (method.toUpperCase()){
    case 'GET': {
      get (url, onSucces, onError);
      break;
    }
      
    case 'POST': {
      post (url, JSON.stringify(data), onSucces, onError);
      break; 
    }
        
    default: {
      console.error('the specified method dont exists');
      break;
    }
  }   
}

const url = 'https://reqres.in/api/users/2';
const me = { first_name: 'Marlon', last_name: 'Torres' }