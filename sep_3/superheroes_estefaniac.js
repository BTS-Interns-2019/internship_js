const fetch = require('node-fetch');
// var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const MD5 = require('./md5')


const privatekey = '807870abdff028a9ab8578cef3d55ffccad3d81a'
      publickey = 'b4634c5cf151afd2689657d7c50b2abc'

function findHero(nameHero) {
    
const marvel = {
    render: () => {
        const ts = Date.now()
        const hash = MD5(ts + privatekey + publickey)
    /*la url donde vamos hacer la peticion de los personajes de la api de marvel*/
        const urlApi= `https://gateway.marvel.com:443/v1/public/characters?name=${nameHero}&ts=${ts}&apikey=${publickey}&hash=${hash}`;
        
        fetch(urlApi)
        .then(res => res.json())
        .then((json) => {
            // console.log(json)
            // for(const hero of json.data.results) {
            // let nameHero = hero.name
            // console.log(nameHero)
            // console.log(json.data.results)
            // }
            for(const hero of json.data.results) {
            let urlHero = hero.urls[1].url
            // console.log(urlHero)
            let obj ={
                wiki: urlHero
            }
            // return obj
            console.log(obj)
            }
            
        })
    }
    }
 return marvel.render()
}

console.log(findHero('Spider-Man'))
// console.log(marvel.render());


/*creando el metodo que nos haga la conección y nos traiga los elementos*/
// const getConnection = () => {



//       fetch(url)
//       /*con json es un metodo del objeto response que me va a traer la data y la va a formatear en json */
//               .then(response => response.json())
//               .then(response => {
//                   response.data.results.forEach(e => {
//                       get(url);
//                   });
//               });
//       };
// function request(method, url, onSuccess, onError, data) {
//     const http = new XMLHttpRequest();
//     let dataString;
  
//     if (data) {
//       dataString = JSON.stringify(data);
//     }
  
//     http.open(method, url);
//     http.send(dataString);
  
//     http.onreadystatechange = () => {
//       if (http.readyState === XMLHttpRequest.DONE) {
//         if (http.status < 400) {
//           try {
//             onSuccess(http.responseText);
//           } catch (error) {
//             onError(error);
//           }
//         } else if (http.status) {
//           try {
//             onError(http.responseText);
//           } catch (error) {
//             onError(error);
//           }
//         } else {
//           onError(new Error('An error ocurred'));
//         }
//       }
//     };
//   }
  
// function get(url) {
//     return new Promise((resolve, reject) => {
//         request('GET', url, resolve, reject);
//     });
// }
// getConnection();

// function findHero(name) {
    

module.exports = {
    findHero,
};