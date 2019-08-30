const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function get(url, onSucess, onError) {
  const http = new XMLHttpRequest();
  http.open('GET', url);
  console.log(http.send());
  http.onload = () => {
    if (http.status < 400) {
      console.log('funcionó correctamente');
    } else {
      console.log('hubo una respuesta negativa');
      return onError(http);
    }
    http.onerror = (e) => {
      console.log('errorcillo: ', e);
      onError(http);
    };
  };
}
get(
  'https://reqres.in/api/users/2',
  respuesta => console.log(':) ', respuesta),
  respuesta => console.log(':( ', respuesta),
);

function post(url, dataString, onSucess, onError) {
  const http = new XMLHttpRequest();
  http.open('POST', url);
  console.log(http.send(dataString));
  http.onload = () => {
    if (http.status < 400) {
      console.log('uncionó correctamente');
    } else {
      console.log('hubo una respuesta negativa');
      return onError(http)
    }
    http.onerror = (e) => {
      console.log('errorcillo: ', e);
      onError(http);
    };
  };
}
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

function request(method, url, dataString, onSucess, onError) {
  if (method === 'GET') get(url, onSucess, onError);
  else if (method === 'Post') post(url, dataString, onSucess, onError);
  else console.log('hay algo mal en este request');
}

request(
  'POST',
  'https://reqres.in/api/users/2',
  user,
  respuesta => console.log(':) ', respuesta),
  respuesta => console.log(':( ', respuesta),
);
