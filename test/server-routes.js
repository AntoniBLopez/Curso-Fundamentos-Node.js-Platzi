// Ejemplo 1:

// const http = require('http');
// const url = require('url');

// function handler(req, res) {

//     const parsedUrl =url.parse(req.url, true);

//     if(parsedUrl.pathname === '/'){

//         res.writeHead(200, {'Content-type': 'text/plain'});
//         res.write('Hello, I am a webserver !');
//         res.end();

//     }else if (parsedUrl.pathname === '/time'){

//         res.writeHead(200, {'Content-type': 'text/plain'});
//         res.write(new Date().toString());

//         return res.end();

//     }else {

//         res.writeHead(404, {'Content-type': 'text/plain'});
//         res.end();
//     };
// }

// const server = http.createServer(handler);

// server.listen(3000);


// Ejemplo 2

const http = require('http');
const url = require('url');
function handler(req, res) {
    const parsedUrl =url.parse(req.url, true);
    if(parsedUrl.pathname === '/'){
        res.writeHead(200, {'Content-type':'text/plain'});
        res.write('Hello, I am a webserver !');
        res.end();
    }else if (parsedUrl.pathname === '/time'){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write(new Date().toString());
        return res.end();
    }else if(parsedUrl.pathname === '/hello'){
        const name = parsedUrl.query.name;
        if(!name) {
            res.writeHead(400, {'Content-type': 'text/plain'});
            return res.end();
    }
    res.writeHead(200, {'Content-type':'text/plain'});
    res.write(`Hello ${name}`);
    return res.end();
    }else {
        res.writeHead(404, {'Content-type':'text/plain'});
        res.end();
    };
}
const server = http.createServer(handler);
server.listen(3000);

console.log('Estoy usando el puerto 3000');