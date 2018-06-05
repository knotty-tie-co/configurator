
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const Shopify = require('shopify-api-node');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/configurator');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

//add models here
const Post = require("../models/post");

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


const SHOPIFY_CONFIG = require('./shopify-variables')

const shopify = new Shopify(SHOPIFY_CONFIG);

// Fetch order from Shopify

app.get('/orders', (req, res) => {
  shopify.order.list({ limit: 5 })
  .then(orders => res.send({
      orders
    }))
  .catch(err => console.error(err));
})

// Create product on Shopify

app.post('/products', (req, res) => {
  var title = "api test product";
  var productType = "Configurable Tie";
  var vendor = "Knotty Tie Co.";
  var template = "real-photo"
  shopify.product.create({
    "title": title,
    "body_html": "test product via api",
    "vendor": vendor,
    "template_suffix": template,
    "product_type": productType
})
  .then(product => res.send({
      product
    }))
  .catch(err => console.error(err));
})

// Fetch all posts
app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

// Add new post
app.post('/posts', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_post = new Post({
    title: title,
    description: description
  })

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

// Fetch single post
app.get('/post/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})

// Update a post
app.put('/posts/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) { console.error(error); }

    post.title = req.body.title
    post.description = req.body.description
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// Delete a post
app.delete('/posts/:id', (req, res) => {
  var db = req.db;
  Post.remove({
    _id: req.params.id
  }, function(err, post){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

app.listen(process.env.PORT || 8081)