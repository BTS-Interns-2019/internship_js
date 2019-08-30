const promise = new Promise ((onSuccess, onError) => {
  let http = new XMLHttpRequest ();
  http.open ('GET', 'https://reqres.in/api/users/2');
  http.addEventListener('load', function () {
    if (http.status >= 200 && http.status < 400) {
      onSuccess(http.responseText);
    } else {
      onError(http.status + ' ' + http.statusText)
    } 
  });
  req.send();
});

function response (response){
  console.log(response);
}

function error (error){
  console.log(error);
}

promise
  .then(response)
  .catch(error);