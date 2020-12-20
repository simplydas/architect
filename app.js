//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");
// const https = require("https");

const app = express();

app.use("/public", express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.get("/portfolio",function(req, res){
  res.sendFile(__dirname + "/portfolio.html");
})

app.get("/resume",function(req, res){
  res.sendFile(__dirname + "/resume.html");
})

app.get("/contact",function(req, res){
  res.sendFile(__dirname + "/contact-me.html");
})
app.get("/blog",function(req, res){
  res.sendFile(__dirname + "/blog.html");
})
app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000..");
  });
