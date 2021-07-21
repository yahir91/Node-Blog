const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt',)
const writeStream = fs.createWriteStream('./docs/blogwrite.txt')
// readStream.on('data', (chunk) => {
//     console.log('new chunk')
//     console.log(chunk)
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)