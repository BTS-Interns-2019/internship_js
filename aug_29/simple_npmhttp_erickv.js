//https://nodejs.dev/making-http-requests-with-nodejs

const http = require('http');

const gatito = {
    hostname: 'google.com',
    path: '/search?safe=off&rlz=1C1CHBF_enMX782MX782&ei=2ghoXZTsDIG4sgXzpqeQAQ&q=gatito&oq=gatito&gs_l=psy-ab.3..35i39j0i67j0i20i263j0j0i67j0j0i131j0l2j0i67.3788.4633..5212...0.0..0.110.578.5j1......0....1..gws-wiz.......0i131i67.PUrV6Het_Xw&ved=0ahUKEwiUwc6Iy6jkAhUBnKwKHXPTCRIQ4dUDCAo&uact=5',
    method: 'GET'
};

const request = http.request(gatito, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

request.on('error', error => {
    console.error(error)
})

request.end();