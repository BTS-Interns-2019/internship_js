function request(method, url, onSuccess, onError, data) {
    const http = new XMLHttpRequest();
    let dataString;
  
    if (data) {
      dataString = JSON.stringify(data);
    }
  
    http.open(method, url);
    http.send(dataString);
  
    http.onreadystatechange = () => {
      if (http.readyState === XMLHttpRequest.DONE) {
        if (http.status < 400) {
          try {
            onSuccess(http.responseText);
          } catch (error) {
            onError(error);
          }
        } else if (http.status) {
          try {
            onError(http.responseText);
          } catch (error) {
            onError(error);
          }
        } else {
          onError(new Error('An error ocurred'));
        }
      }
    };
  }
  
function get(url) {
    return new Promise((resolve, reject) => {
        request('GET', url, resolve, reject);
    });
}
  
function post(url, data) {
    return new Promise((resolve, reject) => {
        request('POST', url, resolve, reject, data);
    });
}
  
function put(url, data) {
    return new Promise((resolve, reject) => {
        request('PUT', url, resolve, reject, data);
    });
}
  
module.exports = {
    get,
    post,
    put
};