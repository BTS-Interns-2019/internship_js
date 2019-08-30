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

request('GET', url, data);
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

/*-------------------------Refactor------------------------ */
function request(method, url, data){
  if(method === 'GET'){
    return new Promise( (resolve, reject) => {
      const Http = new XMLHttpRequest()
      Http.open('GET', `${url}/funny_cats`)
      Http.send()
    });
  }
  else if(method === 'POST'){

    return new Promise( (resolve, reject) => {
      const Http = new XMLHttpRequest()
        Http.open('POST', `${url}/thanks_message`)
        Http.send(data)
    });
  }
/*-------------track request-response-------------- */
  Http.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
      let response = JSON.parse(this.responseText)
      resolve(response)
    }
    else{
      reject(response)
    }      
  }
/*----------------------then-catch----------------- */
    Promise.then( (response) => {
      console.log(
        {
        msg: 'Success!',
        body: response
        });
    }).catch( (reason) => {
      console.log(
        {
          msg: 'Something went wrong...',
          body: reason
        });
    })
};



