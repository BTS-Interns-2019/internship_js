/*function ajax() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const http = new XMLHttpRequest();
    const url = 'https://reqres.in/api/users/2'
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }
    http.open("GET", url);
    http.send();
}*/

function request(method, url, dataString, onsuccess, onerror) {
    //var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const http = new XMLHttpRequest();
    http.open(method, url);
    if (dataString === undefined) {
        http.send();
    }else{
        http.send(JSON.stringify(dataString))
    }
    http.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            onsuccess(this.responseText);
        } else {
            onerror(this.responseText)
        }
    }
}

function get(url, onsuccess, onerror) {
    request("GET",url,undefined,onsuccess,onerror);
}

//get('https://reqres.in/api/users/2',(x)=>{console.log(x)},(x)=>{console.log('error'+x)})
function post(url, dataString, onsuccess, onerror) {
    request("POST",url,dataString,onsuccess,onerror);
}


module.exports = {
    request,
    get,
    post,
  };