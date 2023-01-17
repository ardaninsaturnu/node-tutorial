const express = require('express');
const fs = require('fs');

const app = express();

app.get( '/', function (req, res){
  res.send('Simple example roots.')
})

app.get('/ardaninsaturnu', function( req,res ){
  // this is how we will receive params from front end
  const name = req.query.name;
  const email = req.query.email;
  const password = req.query.password;
  
  //For demo purpose
  console.log(name + '' + email + ' ' + password);
  
  /**
   * Store this in a database and perform further processing
   */
  
  res.send("In ardaninsaturnu module")
})

app.listen('3000')
