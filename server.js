const http = require('http');
const port = 3012;

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/html'});
    res.end("Hello World!");
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});