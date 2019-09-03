
const privateKey='ca2eaa2ac0f6e6874d71f29c35e2ffd4dfb385b3',
    publicKey='d807331cdbf39818935beaaf61d8ebe9'
const getConnection = () => {
    const ts= Date.now(),
    hash=MD5(ts+privateKey+publicKey),
    url=`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publickey}&hash=${hash}`;
    fetch(url)
    .then(response=>response.json())
    .then(response=>{
        response.data.result.forEach(e=>{
        SuperHero(e)
    });
});
function get(url){
    let newPromise= new Promise(function(resolve, reject){
        let http = new XMLHttpRequest();
        http.open('GET', url);
    
        http.onload = () => {
          if (http.status < 400) {
            resolve(http.responseText);
          } else {
            reject(new Error(http.responseText));
          }
        };
        http.send();
      });
      return newPromise;
    }
    }

getConnection();


module.exports=getConnection;