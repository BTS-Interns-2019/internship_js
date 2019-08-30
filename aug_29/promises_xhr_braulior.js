const {XMLHttpRequest} = require('xmlhttprequest');
const { request: requestCB } = require('./simple_xhr_braulior');


function request(method, url, data) {
  return new Promise((resolve, reject) => {
    requestCB(method, url, data, resolve, reject)
  });
}

function get(url) {
  return request("GET", url);
}

function post(url, data) {
  return request("POST", url, data);
}


get('https://enswc9cwyc6ho.x.pipedream.net/view')
  .then((response) => {
    console.log(response);
  })
  ;

post('https://enswc9cwyc6ho.x.pipedream.net/like', { postId: 6585, now: Date.now() })
  .then((response) => {
    console.log('el like', response);
  })
  ;

request("DELETE", 'https://enswc9cwyc6ho.x.pipedream.net/like', { postId: 6585 })
  .then((response) => {
    console.log('el delete de like', response);
  })
  ;
