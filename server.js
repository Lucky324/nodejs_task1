const http = require("http");
const port = 8080;

const requestHandler = (request, response) => {
    if (request.method === 'GET') {
        console.log('GET request');
        response.end('GET response\n');
    }
    if (request.method === 'POST') {
        console.log('Request headers: ', request.headers);
        response.end(`Your request: ${
            request.headers.whatwillsavetheworld ?
                `Post with header "whatwillsavetheworld":"${request.headers.whatwillsavetheworld}"\n` :
                `Just post\n`
        }`);
    }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log("The exception happened: ", err);
    }

    console.log(`Server listening on port ${port}`);
})
