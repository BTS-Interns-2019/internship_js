function request(method, url, dataString, onsuccess, onerror) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const http = new XMLHttpRequest();
    http.open(method, url);
    if (dataString === undefined) {
        http.send();
    } else {
        http.send(JSON.stringify(dataString))
    }
    http.onload = function () {
        if (this.status < 400) {
            let resp = this.responseText;
            resp = JSON.parse(resp);
            resp.saySetup = () => resp.setup
            resp.sayPunchLine = () => resp.delivery
            onsuccess(resp);
        } else {
            onerror(this.responseText)
        }
    }
}

async function giveMeAJoke(apiUrl, category) {
    return new Promise((onsuccess, onerror) => {
        request("GET", apiUrl, undefined, onsuccess, onerror)
    })
}

giveMeAJoke('https://sv443.net/jokeapi/category/miscellaneous?type=twopart').then((joke) => {
    console.log(joke.saySetup());
    console.log(joke.sayPunchLine());
})