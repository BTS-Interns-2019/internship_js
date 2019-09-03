const {get,post,request} = require('../sep_3/get_post_put.js');

function findHero(name){
    console.log('SUPER - HEROES');
    
    let reject = function(data) {
        console.log(data);
        
    }
    let resolve = function(data){
        console.log(data)   
    }
    return get(name, resolve, reject);
}

module.exports = findHero