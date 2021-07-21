const fs = require('fs')

console.log('hi')


// writing files
fs.writeFile('./docs/blog.txt', 'hello world', () => {
    console.log('file written')
})

// directories
if( !fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    console.log(err)
    console.log('directory created')
})
}