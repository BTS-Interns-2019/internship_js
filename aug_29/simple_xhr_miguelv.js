var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request=new XMLHttpRequest();
request.open('GET','https://reqres.in/api/users/2',false);
request.send();
//return request.responseText;
console.log(request.responseText);

function get(url, onsuccess, onerror){
    let http=new XMLHttpRequest();
    http.open("GET",url);
    console.log(http.send());
    http.onload=()=>{
        if(http.status<400){
            console.log("success");
            onsuccess(http.responseText)
        }else{
            console.log("fail");
            onerror(http.status)
        }
    }
    http.onerror=(e)=>{
        console.log("Error: ",e)
    }
}
get("https://reqres.in/api/users/2",
function(responseText){
    console.log("respuesta: ",responseText)
},
function(status){
    console.log("error: ",status)
})
function post(url,dataString,onsuccess,onerror){
    let http=new XMLHttpRequest();
    http.open("POST",url);
}

function request(method,url,dataString,onsuccess,onerror){
    let http=new XMLHttpRequest();
}