const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();

const url = 'https://enbqpcikulwyi.x.pipedream.net'
const lorem = 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?'

// Http.onreadystatechange = function (){
//   if(this.readyState == 4 && this.status == 200){
//     console.log(`readystate; ${this.readyState}`);
//     console.log(`StatusCode: ${this.status}`);
//     console.log(this.responseText);
//   }
//   else{
//     console.log(`readystate; ${this.readyState}`);
//     console.log(`StatusCode: ${this.status}`);
//     console.log(this.responseText);
//   }
// };

// Http.open('GET', url);
// Http.send();
// Http.open('POST', url);
// Http.send(lorem);

/*-------------------GET POST REQUEST------------------ */

function request(url, method, dataString, onsuccess, onerror){
  if(method == 'GET'){
    get(url, onsuccess, onerror);
  }
  else if(method == 'POST'){
    post(url, dataString, onsuccess, onerror);
  }
};

/*-------------------Get callback---------------------  */
function get(url, onsuccess, onerror){
    Http.open('GET', url);
    Http.send();
 
  Http.onreadystatechange = function (){
    let readyState = this.readyState;
    let statusCode = this.status;
    if(readyState === 4 && statusCode === 200){
      let response = JSON.parse(this.responseText)
      onsuccess(response)
    }
    else if(readyState === 4 && statusCode < 200 || statusCode > 299){
      onerror(response)
    }
  }
};

/*----------------------Post callback ---------------------*/
function post(url, dataString, onsuccess, onerror){
  Http.open('POST', url);
  Http.send(dataString)

  Http.onreadystatechange = () => {
    let readyState = this.readyState;
    let statusCode = this.status;
    if(readyState === 4 && statusCode === 200){
      let response = JSON.parse(this.responseText);
      onsuccess(response);
    }
    else if(readyState === 4 && statusCode < 200 || statusCode > 299){
      onerror(response)
    }
  }
};

/*---------onsucces callback-------------- */
function onsuccess(response){
  console.log({
    msg: `Success!!`,
    body: response
  })
};
/*----------onerror callback--------------- */
function onerror(response){
  console.log({
    msg: new TypeError,
    body: response
  })
};