const XMLHttpRequest = require ('xmlhttprequest').XMLHttpRequest;
const Http = new XMLHttpRequest();

const url = 'https://enbqpcikulwyi.x.pipedream.net/';
const goo = 'http://google.com'
const data = JSON.stringify({
  this: 'has',
  been: 'so',
  much: 'fun',
  that: 'I',
  am: 'deeply',
  gratefull: 'Thank you.' 
});

/*-----------------Promise Get---------------------- */
const promiseGet = new Promise( (resolve, reject) => {
  Http.open('GET', url);
  Http.send();
  Http.onreadystatechange = function (){
    const response = JSON.stringify(this.responseXML)
    resolve(response)
  }
});
promiseGet.then( function(response) {
  console.log(response)
});

/*-----------------Promise Post---------------------- */
const promisePost = new Promise ( (resolve, reject) => {
  Http.open('POST', url);
  Http.send(data)
  Http.onreadystatechange = function (){
    const response = JSON.stringify(this.responseXML)
    resolve(response)
  }
});
promisePost.then( function(response) {
  console.log(response)
});

