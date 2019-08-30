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
        console.log("respuesta1: ",responseText);
    },
    function(status){
        console.log("error1: ",status);
    }
)


function post(url,dataString,onsuccess,onerror){
    let http=new XMLHttpRequest();
    http.open("POST",url);
    http.setRequestHeader("Content-type","aplication/json");
    http.send(dataString);
    http.onload=()=>{
        if(http.status<400){
            console.log("success");
            onsuccess(http.responseText);
        }else{
            console.log("fail");
            onerror(http.status)
        }
    }
    http.onerror=(e)=>{
        console.log("Error: ",e)
    }
}
post("https://reqres.in/api/users/2",
    '{"myData": "My data."}',
    function(responseText){
        console.log("respuesta2: ",responseText);
    },
    function(status){
        console.log("error2: ",status);
    })
function request(method,url,dataString,onsuccess,onerror){
    if(method==="GET"){
        get(url,onsuccess,onerror);
    }else{
        post(url,dataString,onsuccess,onerror);
    }
}