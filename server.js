const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.setHeader('Content-Type ')
});

server.listen(3000, 'localhost', () => {
    console.log('listening for equest on pot 3000')
})