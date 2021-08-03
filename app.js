const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const Blog = require('./models/blog');
const { render } = require('ejs');


// express app
const app = express();

const dbUri = 'mongodb+srv://yahir91:darkluna@node-tuts.6suph.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
.then((res) => {
  app.listen(3000);
  console.log('connected to DB')
}).catch((err)=> {
  console.log(err)
})
// listen for requests


// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  });
  blog.save().then((result)=> {
    res.send(result)
  }).catch((err) => {
    console.log(err)
  })
})

app.get('/all-blogs', (req, res)=> {
  Blog.find()
  .then((result) => {
    res.send(result)
  })
  .catch((err)=> {
    console.log(err)
  })
})

app.get('/single-blog', (req, res) =>{
  Blog.findById('61063de02a42a3293da9ca36')
  .then((result) => {
    res.send(result)
  })
})

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  res.redirect('/blogs')
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs', (req,res) => {
  Blog.find()
  .then((result) => {
    res.render('index', {title:'All blogs', blogs: result})
  })
})

app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body)
  blog.save()
  .then((result) => {
    res.redirect('/blogs')
  })
})

app.get('/blogs/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  Blog.findById(id)
  .then((result) => {
    res.render('details', {title: 'Blog Detail', blog: result})
  })
})

app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  Blog.findByIdAndDelete(id)
  .then(result => {
    res.json({redirect: '/blogs'})
  })
  .catch(err => {
    console.log(err)
  })
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
