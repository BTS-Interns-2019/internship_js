const XMLHttpRequest = require ('xmlhttprequest').XMLHttpRequest;
const Http = new XMLHttpRequest();

const url = 'https://enbqpcikulwyi.x.pipedream.net/';
const goo = 'http://google.com'
const data = `{
  'this': 'has',
  'been': 'so',
  'much': 'fun',
  'that': 'I',
  'am': 'deeply',
  'grateful': 'Thank you.' 
}`;


/*-----------------Promise Get---------------------- */
// const promiseGet = new Promise( (resolve, reject) => {
//   const Http = new XMLHttpRequest();
//   Http.open( 'GET', `${url}/from_i_dunno/kitty.png` );
//   Http.send();
//   Http.onreadystatechange = function (){
//     const response = JSON.stringify(this.responseXML)
//     resolve(response)

//     if(this.status < 200 || this.status > 299 && this.readyState == 4){
//       reject(response)
//     }
//   }
// });
// promiseGet.then( function(response) {
//   console.log(response)
// }).catch( (reason) => {
//   console.log(`Something went bad: ${reason}`)
// });


// /*-----------------Promise Post---------------------- */
// const promisePost = new Promise ( (resolve, reject) => {
//   const Http = new XMLHttpRequest();
//   Http.open( 'POST', `${url}/muchgrateful` );
//   Http.send(data)
//   Http.onreadystatechange = function (){
//     const response = JSON.stringify(this.responseXML)
//     resolve(response)
//   }
// });
// promisePost.then( function(response) {
//   console.log(response)
// }).catch( (reason) => {
//   console.log(`Something went bad: ${reason}`)
// })

get(`${url}/funny_cats`).then ( (res) => console.log(res)).catch((reason) => { console.log ('no sirvio')})
post(`${url}/grateful`, data).catch((reason) => { console.log ('no sirvio')})  // this are handlers.

/*----------------GET----------------------- */
function get(url){

  return request('GET', url);
};
/*----------------POST---------------------- */
function post(url, data){

  return request("POST", url, data);
};
/*-------------------------Refactor------------------------ */
function request(method, url, data){
    const thisPromise = new Promise( (resolve, reject) => {
      const Http = new XMLHttpRequest()
      Http.open(method, url)
      Http.send(data)
    
/*-------------track request-response-------------- */
  Http.onload = function(){
    if(this.status === 200){
      let response = JSON.parse(this.responseText)
      resolve(response);
    }
    else{
      let reason = JSON.parse(this.responseText)
      reject(reason);
    }      
  }
  Http.onerror = function(error){
    reject(error)
  }
})
/*----------------------then-catch----------------- */
    return thisPromise.then( (response) => {
      return `{
        msg: 'Success!',
        body: ${response}
        }`;
    }).catch( (reason) => {
      return Promise.reject(reason)
    });
};



