const http = require('http')

const postOptions = {
    hostname: 'localhost',
    port: 8080,
    path: '/',
    method: 'POST',
    headers: {
        'whatwillsavetheworld': 'Love'
    }
}

const postRequest = http.request(postOptions, res => {

    console.log("Method: " + postOptions.method);
    console.log("request finished with code: " + res.statusCode);

    res.on('data', d => {
        process.stdout.write(d);
        console.log("Success");
    })
})

postRequest.on('error', error => {
    console.error(error);
})

postRequest.end();
