function request(method, url, data, onSucess, onError) {
  let http = new XMLHttpRequest()

  http.open(method, url)
  http.send(JSON.stringify(data));

  http.onload = () => {
    if (http.status >= 400) {
      return onError(http);
    }
    onSucess(http.responseText);
  }
  http.onerror = (e) => {
    onError(http, e);
  }

  return http;
}

function get(url, onSucess, onError) {
  request('GET', url, undefined, onSucess, onError);
}

function post(url, data, onSucess, onError) {
  request('POST', url, data, onSucess, onError);
}

module.exports = {
  request,
  get,
  post
};
