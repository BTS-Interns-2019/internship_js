const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function requestJoke(apiUrl, category, onSuccess, onError) {
  const xhr = new XMLHttpRequest();

  // format apiUrl
  let url;
  if (apiUrl.match(new RegExp('sv443.net'))) {
    url = apiUrl.concat('', `${category}?type=twopart`);
  } else {
    url = apiUrl;
  }

  xhr.open('GET', url);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status <= 299) {
      // parsing the JSON response as object
      const responseObj = JSON.parse(xhr.responseText);

      if (typeof responseObj !== 'object' || !('setup' in responseObj)) {
        onError(`new Error: (No jokes at url: ${url})`);
        return false;
      }

      // defining the methods of the object
      Object.defineProperties(responseObj, {
        saySetup: {
          value() {
            return this.setup;
          },
          writable: false,
        },
        sayPunchLine: {
          value() {
            return this.delivery;
          },
          writable: false,
        },
      });

      onSuccess(responseObj);
      return true;
    }

    onError(`new Error: (No jokes at url: ${url})`);
    return false;
  };

  xhr.onerror = () => {
    onError(`new Error: (No jokes at url: ${url})`);
    return false;
  };
}

// Promising Jokes
function giveMeAJoke(apiUrl, category) {
  return new Promise((resolve, reject) => {
    requestJoke(apiUrl, category, resolve, reject);
  });
}

module.exports = giveMeAJoke;
