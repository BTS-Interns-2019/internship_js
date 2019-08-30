const url = 'https://reqres.in/api/users/2';
const fake_url = 'https://reqres.in/lalala/lalala';
const me = { first_name: 'Marlon', last_name: 'Torres' };
const method = 'GET';

const promiseGet = new Promise ((onSuccess, onError) => {
  let http = new XMLHttpRequest ();
  http.open ('GET', url, true);
  http.addEventListener('load', function () {
    if (http.status >= 200 && http.status < 400) {
      onSuccess(http.responseText);
    } else {
      onError(http.status + ' ' + http.statusText);
    } 
  });
  http.send();
});

const promisePost = new Promise((onSuccess, onError) => {
  let http = new XMLHttpRequest ();
  http.open('POST', url, true);
  http.addEventListener('load', () => {
    if (http.status >= 200 && http.status < 400) {
      onSuccess(http.responseText);
    } else {
      onError(http.status + ' ' + http.statusText)
    } 
  });
  http.send(me);
});

const promiseRequest = new Promise((onSuccess, onError) => {
  switch (method.toUpperCase()){
    case 'GET': {
      let http = new XMLHttpRequest ();
      http.open ('GET', url, true);
      http.addEventListener('load', function () {
        if (http.status >= 200 && http.status < 400) {
          onSuccess(http.responseText);
        } else {
          onError(http.status + ' ' + http.statusText);
        } 
      });
      http.send();
      break;
    }
      
    case 'POST': {
      let http = new XMLHttpRequest ();
      http.open('POST', url, true);
      http.addEventListener('load', () => {
        if (http.status >= 200 && http.status < 400) {
          onSuccess(http.responseText);
        } else {
          onError(http.status + ' ' + http.statusText)
        } 
      });
      http.send(me);
      break; 
    }
        
    default: {
      console.error('the specified method dont exists');
      break;
    }
  }   
});

function response (response){
  console.log(response);
}

function error (error){
  console.error(error);
}

promiseGet
  .then(response)
  .catch(error);

promisePost
  .then(response)
  .catch(error);

promiseRequest
  .then(response)
  .catch(error);