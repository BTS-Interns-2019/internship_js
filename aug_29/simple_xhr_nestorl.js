var XMLHttpRequest = require('xmlhttpRequest').XMLHttpRequest;
// const url = 'https://reqres.in/api/users/2';
const http = new XMLHttpRequest();
// http.open("GET", url)
// http.onreadystatechange = function(){

//     if(this.readyState == 4 && this.status == 200){
//         var resultado = JSON.parse(this.responseText);
//         console.log(resultado);
        
//     }
// }
// http.send();
/*------------ function get ----------------------------------*/
function get(url,cb,error){
    const http = new XMLHttpRequest();
    http.open("GET", url, true)
    http.onreadystatechange = () =>{
        if(http.readyState == 4){
            if(http.status == 200){
            var resultado = JSON.parse(http.responseText);
            return cb(http.responseText);
            } 
            return error(`Error ${http.status} ${url}`);
        }
    };
    http.send();
}
// const num = 2;
// get(`https://reqres.in/api/users/${num}`,(res)=>{console.log(res)},(e)=>{console.error(e)});
/*---------------------function post---------------------------*/
function post(url, body, cb, error){
    const http = new XMLHttpRequest();
    http.open("POST", url, true)
    http.onreadystatechange = () =>{
        if(http.readyState == 4){
            if(http.status == 200){
                var resultado = JSON.parse(http.responseText);
                cb(resultado);
            }else{
                error(`Error ${http.status} ${url}`)
            }
        }
    };
    http.send(body);
}
// const data = {
//     nombre: 'nestor',
//     apellido: 'lira',
//     hobbie: 'ver pelis'
// };
// post('https://en74aq4z283n.x.pipedream.net/',JSON.stringify(data),(res)=>{

//     console.log(res);
// },(e)=>{
//     console.error(e)
// });
/*---------------------function request---------------------------*/

function request(method, url, cb, error, body) {
    if(typeof method !== "string"){
        return error("debe de ser una cadena de texto")
    }
    let meth = method.toUpperCase();
    switch (meth) {
        case 'GET':
            get(url, cb, error);
            break;
        case 'POST':
            post(url, body, cb, error);
        default:
            'Wrong method';
            break;
    }
}
// request('post','https://reqres.in/api/users/1', ()=>{}, ()=>{}, ()=>{})
module.exports = {get, post, request}