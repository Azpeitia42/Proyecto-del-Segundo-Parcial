const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    const file = request.url == '/' ? './WWW/Catalogo.html' : `./WWW/${request.url}`;
    
    if (request.url == '/registro') {
        let data = [];
        request.on("data", value => {
            data.push(value);
        }).on("end", () => {
            let params = Buffer.concat(data).toString();
            fs.appendFile('query.txt', params + '\n', (err) => {
                if (err) {
                    response.writeHead(500, {'Content-Type': 'text/plain'});
                    response.end("Error interno del servidor");
                } else {
                    response.writeHead(200, {'Content-Type': 'text/plain'});
                    response.end("Datos guardados correctamente");
                }
            });
        });
    } else {
        fs.readFile(file, (err, data) => {
            if (err) {
                response.writeHead(404, {"Content-Type": "text/plain"});
                response.end("Not Found");
            } else {
                const extension = request.url.split('.').pop();
                switch (extension) {
                    case 'txt':
                        response.writeHead(200, {"Content-Type": "text/plain"});
                        break;
                    case 'html':
                        response.writeHead(200, {"Content-Type": "text/html"});
                        break;
                    case 'jpeg':
                        response.writeHead(200, {"Content-Type": "image/jpeg"});
                        break;
                    case 'css':
                        response.writeHead(200, {"Content-Type": "text/css"});
                        break;
                    case 'js':
                        response.writeHead(200, {"Content-Type": "text/javascript"});
                        break;
                    case 'png':
                        response.writeHead(200, {'Content-Type': 'image/png'});
                        break;
                    default:
                        response.writeHead(200, {'Content-Type': 'text/html'});
                }
                response.end(data);
            }
        });
    }
}).listen(8888, () => {
    console.log('Servidor corriendo en http://localhost:8888/');
});