var md5 = require('../../node_modules/blueimp-md5');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports={findHero, findSeries};

async function findHero(hero){
    try{
        return new Promise(async function(resolve,reject){
            let link=await url(hero);
            console.log("url = "+link+"-->"+typeof link)
            let http=new XMLHttpRequest();
            http.open("GET",link,true);
            http.send();
            http.onload=()=>{
                if(http.status<400){
                    console.log("success");
                    //console.log(http.responseText);
                    console.log("-Wiki URL-\n"+JSON.stringify(
                        JSON.parse(http.responseText).data.results[0].urls.filter((c)=>{
                            return c.type === "wiki";
                        })[0].url));
                    let obhero = {};
                    let jr = JSON.parse(http.responseText).data.results[0];
                    obhero.id= jr.id;
                    obhero.name=jr.name;
                    obhero.description=jr.description;
                    obhero.modified=jr.modified;
                    obhero.thumbnail=jr.thumbnail.path;
                    obhero.resourceURI=jr.resourceURI;
                    obhero.comics=jr.comics.available;
                    obhero.series=jr.series.available;
                    obhero.stories=jr.stories.available;
                    obhero.events=jr.events.available;
                    obhero.detail=lfh(jr.urls,"detail");
                    obhero.wiki=lfh(jr.urls,"wiki");
                    obhero.comiclink=lfh(jr.urls,"comiclink");
                    console.log(typeof obhero.wiki);
                    resolve(obhero,jr);
                }else{
                    console.log("fail");
                    reject(http.responseText);
                }
            }
        })
        
    }catch(e){
        console.log(e);
    }
}
async function findSeries(serie){}

function url(hero){
    let p = "3d439829a5351f94e9224b2c8a1f58126278381b";
    let p2 = "3ee825f31bd11f3d60b465f450f6eae6";
    let ts = Date.now();
    let link = "https://gateway.marvel.com:443/v1/public/characters?name="+hero+"&ts="+ts+"&apikey="+p2;
    let linkp = "&hash="+md5(ts+p+p2);
    return link+linkp;
}
function lfh(path, type){
    let r = path.filter((c)=>{
        return c.type === type;
    })[0].url;
    let div = r.split("?");
    return div[0];
}
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
                    //console.log(typeof http.responseText);
                    //console.log(http.responseText);
                    console.log("-"+JSON.parse(http.responseText).data.results[0].urls);
                    console.log("-Wiki URL-\n"+JSON.stringify(
                        JSON.parse(http.responseText).data.results[0].urls.filter((c)=>{
                            return c.type === "wiki";
                        })[0].url));
                    resolve(JSON.stringify(JSON.parse(http.responseText).etag));
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
async function bwi(){
    let p = "3d439829a5351f94e9224b2c8a1f58126278381b";
    let p2 = "3ee825f31bd11f3d60b465f450f6eae6";
    let ts = Date.now();//ts es dinamico, numero de milisegundos obtenidos por date
    let link = "https://gateway.marvel.com:443/v1/public/characters?name=Black-Widow&ts="+ts+"&apikey=3ee825f31bd11f3d60b465f450f6eae6";
    let linkp = "&hash="+md5(ts+p+p2);
    l=link+linkp;
    let a = await get(l).then((tag)=>{
        console.log("..."+tag);
    });
}
async function thor(){
    let p = "3d439829a5351f94e9224b2c8a1f58126278381b";
    let p2 = "3ee825f31bd11f3d60b465f450f6eae6";
    let ts = Date.now();
    let link = "https://gateway.marvel.com:443/v1/public/characters?name=Thor&ts="+ts+"&apikey=3ee825f31bd11f3d60b465f450f6eae6";
    let linkp = "&hash="+md5(ts+p+p2);
    l=link+linkp;
    let b = await get(l).then((tag)=>{
        console.log("..."+tag);
    });
}
//console.log(bwi());
//console.log(thor());

//marvel.render();

console.log(findHero("Thor").then(thor =>{
    //console.log(thor);
    console.log("v-->"+typeof thor);
    console.log("describe = "+thor.description);
}));

//find hero retorna un objeto, wiki sin ?... y description 