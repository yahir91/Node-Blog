const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find()
    .then((result) => {
      res.render('blogs/index', {title:'All blogs', blogs: result})
    })
}

const blog_details = (req, res) => {
    const id = req.params.id
    console.log(id)
    Blog.findById(id)
    .then((result) => {
      res.render('blogs/details', {title: 'Blog Detail', blog: result})
    })
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
    .then((result) => {
      res.redirect('/blogs')
    })
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({redirect: '/blogs'})
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
      blog_index,
      blog_details,
      blog_create_get,
      blog_create_post,
      blog_delete,
}