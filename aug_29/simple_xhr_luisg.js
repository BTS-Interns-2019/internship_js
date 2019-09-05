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
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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

//get('https://gateway.marvel.com:443/v1/public/characters/1009664?ts=1567528097271&apikey=1b53183162c44292d29aa540ad174a7b&hash=71557eb2386f763417caa4e2174c5511',(x)=>{console.log(JSON.parse(x).data.results[0])},(x)=>{console.log('error'+x)})


function post(url, dataString, onsuccess, onerror) {
    request("POST",url,dataString,onsuccess,onerror);
}


module.exports = {
    request,
    get,
    post,
  };