module.exports=giveMeAJoke;

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function giveMeAJoke(url){new Promise(function(resolve,reject){
    setTimeout(function(){
        let http=new XMLHttpRequest();
        http.open('GET',url,true);
        http.send();
        http.onload=()=>{
            if(http.status<400){
                return resolve(http.responseText);
            }else{
                return reject(new Error(`No jokes at url: ${url}`))
            }
        }
    },1000);
})}
giveMeAJoke.prototype.saySetup=function(){
    let r=JSON.parse(responseText);
    console.log("success");
    console.log(r.setup);
    return r.setup;
}
giveMeAJoke.prototype.sayPunchLine=function(){
    let r=JSON.parse(responseText);
    console.log("success");
    console.log(r.delivery);
    return r.delivery;
}

giveMeAJoke('https://sv443.net/jokeapi/category/miscellaneous?type=twopart').then((joke) => {
  console.log(joke.saySetup());
  console.log(joke.sayPunchLine());
})