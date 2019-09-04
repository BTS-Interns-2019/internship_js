const {get,post,request} = require('./get_post_put.js');
var md5 = require('blueimp-md5');
const urlMarvel = 'https://gateway.marvel.com:443/v1/public/characters?name=';
const apikey = '3741cf3185ddf0e0680c6fc3cabeb0e6';
let hash = md5('14e5bbc9393ca7b70cf6df726d3cbc408ab8d4a3f3741cf3185ddf0e0680c6fc3cabeb0e6');



function findHero(name){

    let url = urlMarvel+name+'&ts=1'+'&apikey='+apikey+'&hash='+hash;
    console.log(url);
    
    let obj = get(url, function(dato){
        console.log('get_findHero');
        
    }, function(dato){
        console.log(dato);
        
    });
    console.log(obj);
    

    return obj;
}

module.exports = findHero;