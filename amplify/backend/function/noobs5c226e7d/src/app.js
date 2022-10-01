/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var admin = require("firebase-admin");
var serviceAccount = require("./priv_key.json");
admin.initializeApp({
		credential: admin.credential.cert(serviceAccount)
		});
let db = admin.firestore();

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const { response } = require("express");

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.get('/api/*', async function(req, res) {
  var response = {};
  if(req.headers.context.toString() === "home_blogs"){
    const posts = db.collection('categories').doc('home');
    response = (await posts.get()).data();
  }
  else if(req.headers.context.toString() === "get_blog"){
    const post = db.collection('standard-post-blogs').doc(req.headers.blog_title.toString());
    response = (await post.get()).data();
  }
  else if(req.headers.context.toString() === "get_blogs"){
    const posts = db.collection('categories').doc(req.headers.category);
    response = (await posts.get()).data();
  }
  else if(req.headers.context.toString() === "featured"){
    const featured_posts = db.collection('featured').doc('home');
    response = (await featured_posts.get()).data();
  }
  else {
    response = {"error" : "NO_CONTEXT_FOUND"}
  }
  //const post_content = fire.get_api('standard-post-blogs', 'test-blog')
  res.json(response);
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
