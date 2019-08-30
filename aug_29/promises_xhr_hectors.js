const { request } = require('./simple_xhr_hectors');

// Promises
const promise = new Promise((resolve, reject) => request('GET', 'https://reqres.in/api/users/10', resolve, reject));

// Executing the promise
promise
  .then(response => console.log(response))
  .catch(error => console.log(`Error: ${error}`));
