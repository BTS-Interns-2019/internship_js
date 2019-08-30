const { get } = require('./simple_xhr_hectors');

// Promises
const promise = new Promise((resolve, reject) => get('https://reqres.in/api/users/10', resolve, reject));

// Executing the promise
promise
  .then(response => console.log(response))
  .catch(error => console.log(`Error: ${error}`));
