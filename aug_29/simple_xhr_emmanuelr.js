const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function request(method, url, dataString, onSucess, onError) {
  const http = new XMLHttpRequest();
  http.open(method, url);
  http.send(dataString);
  http.onload = () => {
    if (http.status >= 400) {
      return onError(http);
    }
    onSucess(http.responseText);
  };
  http.onerror = (e) => {
    onError(http, e);
  };
}
function get(url, onSucess, onError) {
  request('GET', url, undefined, onSucess, onError);
}
function post(url, dataString, onSucess, onError) {
  request('POST', url, dataString, onSucess, onError);
}

get(
  'https://reqres.in/api/users/2',
  respuesta => console.log(':) ', respuesta),
  respuesta => console.log(':( ', respuesta),
);
const user = JSON.stringify(
  {
    name: 'morpheus',
    job: 'leader',
  },
);
post(
  'https://reqres.in/api/users',
  user,
  respuesta => console.log(':) ', respuesta),
  respuesta => console.log(':( ', respuesta),
);
request(
  'POST',
  'https://reqres.in/api/users/2',
  user,
  respuesta => console.log(':) ', respuesta),
  respuesta => console.log(':( ', respuesta),
);
