// const events = require('events')
// const em = new events.EventEmitter()
// // const result = 1001

// // function f(x=0011) {
// //     let result = x
// //     console.log(result)
// // }

// // f(0)

// // let x = 22+7+'b'+5+4

// // console.log(x)

// // console.log(process.currentWorkingDirectory())

// em.once('once', ( ) => console.log('once'))
// em.once('more', ( ) => console.log('more'))

// em.emit('once')
// em.emit('more')
// em.emit('once')
// em.emit('more')
// const express = require('express');
// const mongoose = require('mongoose')
// const app = express();

// const dbUri = 'mongodb+srv://yahir91:darkluna@node-tuts.6suph.mongodb.net/node-tuts?retryWrites=true&w=majority'



setTimeout(() => {
    console.log('joe')
}, 8000);
setTimeout(()=> {
    console.log('jimmy')
}, 0)

// app.get('/all-blogs', (req, res)=> {
//    console.log('d')
//   })
  mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
.then((res) => {
 console.log('lin')
  setTimeout(() => {
      console.log('emmy')
  }, 7000)
})
// getDataFromDatabase((err,data) => {
//     console.log('lin');
//     setTimeout(() => {
//         console.log('emmy')
//     }, 7000)
// })

console.log('Immy')