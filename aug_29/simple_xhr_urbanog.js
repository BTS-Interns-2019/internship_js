const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const url = 'https://reqres.in/api/users/2';
const http = new XMLHttpRequest();

http.open('GET', url, true);
http.onreadystatechange = function () {
    //readyState property eturns the state an XMLHttpRequest client is in
    // number 4 means tha the operation is complete 
    if (this.readyState == 4 && this.status == 200) {
        let result = this.responseText
        console.log(result)
    }
};
http.send();

// function get

function get(url, callback, error) {
    // const { XMLHttpRequest } = require('xmlhttprequest');
    const http = new XMLHttpRequest();

    http.open('GET', url, true);
    http.onload = function () {
        // readyState property eturns the state an XMLHttpRequest client is in
        // number 4 means tha the operation is complete
        if (this.status <= 400) {
            const result = this.responseText;
            callback(result);
        } else {
            error(`${this.status} ${this.statusText}`);
        }
    };
    http.send();
}
function callback(response) {
    console.log(response);
}
function error(e) {
    console.log(e);
}
//function post
function post(url, body, callback, error) {
    const http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.onload = function () {
        if (this.status <= 400) {
            const result = this.responseText;
            callback(result)
        } else {
            return error(http.status, http.statusText);
        }
    };
    http.send(body);
}

const body = {
    name: 'Urbano',
    apellido: 'Gonzalez',
    edad: 22
};

console.log(post('https://reqres.in/api/users', JSON.stringify(body), callback, error))

function request(url, method, callback, error,body) {
    if (typeof method !== 'string') {
        return 'Method parameter, must be a String'
    }
    let meth = method.toUpperCase();
    switch (meth) {
        case 'GET':
            get(url, callback, error);
            break;
        case 'POST':
            post(url, body, callback, error);
        default:
            'Bad method choice';
            break;
    }
}
request('https://reqres.in/api/users/1', 'get', callback, error);

