require('dotenv').config();
let express = require('express');
let path = require('path');
let mongo = require('mongodb');
let bodyParser = require('body-parser');
let crypto = require('crypto');

let app = express();

app.get( '/', function( req,res ){
  res.set({
    'Access-Control-Allow-Origin' : '*'
  })
})
