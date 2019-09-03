const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function request(method, url, onSuccess, onError) {
  const req = new XMLHttpRequest();

  req.open(method, url);
  req.send();

  req.onload = () => {
      if (req.status >= 200 && req.status < 300) {
          const responseObj = JSON.parse(req.responseText);
         
        onSuccess(responseObj);
        return true;         
      } else if (req.status) {
        try {
          onError(req.responseText);
        } catch (error) {
          onError(error);
        }
      } else {
        onError(new Error('An error ocurred'));
      }
  };
}

// GET 
function get(url) {
  const pc =  new Promise((resolve, reject) => {
    request('GET', url, resolve, reject);
  });
pc
.then(show)
.catch(error);
}

function show (answer){
    console.log(answer);
}

function error (err){
    console.log(err);
}


function findHero (name) {
link ='https://gateway.marvel.com:443/v1/public/characters?'
apikey = 'ca07ee3a91c19295d08a91cd49ba1596&hash=98d893735cfa455ead385b953c25f13d'

url = link.concat('ts=1&name='+name+'&apikey='+apikey);
get (url);
}

findHero('Thor');

module.exports = findHero;