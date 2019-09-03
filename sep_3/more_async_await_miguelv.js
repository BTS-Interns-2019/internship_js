var md5 = require('../../node_modules/blueimp-md5');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports={findHero, findSeries};

/*const marvel = {
    render: () => {

        const urlAPI = "https://gateway.marvel.com:443/v1/public/characters?name=Black-Widow&apikey=3ee825f31bd11f3d60b465f450f6eae6";
        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            console.log(json, 'RES.JSON');
        })
    }
};*/
async function findHero(hero){}
async function findSeries(serie){}
function get(url){
    try{
        return new Promise(function (resolve,reject){
            console.log("url = "+url+"-->"+typeof url)
            let http=new XMLHttpRequest();
            http.open("GET",url,true);
            http.send();
            http.onload=()=>{
                console.log("status = "+http.status+"-->"+typeof http.status);
                if(http.status<400){
                    console.log("success");
                    console.log(typeof http.responseText);
                    console.log(http.responseText);
                    console.log("-"+JSON.parse(http.responseText).urls)
                    resolve(http.responseText);
                }else{
                    console.log("fail");
                    reject(http.responseText);
                }
            }
            http.onerror=(e)=>{
                console.log("Error: ",e)
            }
        })
    }catch(e){
        console.log(e);
    }
}
async function neo(){
    let p = "3d439829a5351f94e9224b2c8a1f58126278381b";
    let p2 = "3ee825f31bd11f3d60b465f450f6eae6";
    let ts = Date.now();//ts es dinamico, numero de milisegundos obtenidos por date
    let link = "https://gateway.marvel.com:443/v1/public/characters?name=Black-Widow&ts="+ts+"&apikey=3ee825f31bd11f3d60b465f450f6eae6";
    let linkp = "&hash="+md5(ts+p+p2);
    let a = await get(link+linkp);
    return a;
}
console.log(neo());

//marvel.render();