const fs = require('fs');
const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    // set header content type
    res.setHeader('Content-Type', 'text/html')

    let path = './view/'
    switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-me':
            // path += 'about.html'
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break
        default: 
        path +=  '404.html'
        res.statusCode = 404
        break    
    }
    console.log(req.url)
    // send a thml file
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end()
        } else {
            // res.write(data);
            res.end(data)
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening for equest on pot 3000')
})