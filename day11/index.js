const express = require('express');
const app = express();

app.get('/', function( req, res){
  res.send('hello mamet')
})

app.get( '/signup', function (req,res){
  res.send('hello signup mamet')
})

app.get('/login', function( req, res ){
  res.send('hello login mamet')
})

app.get( '/login/ardaboard', function( req, res){
  res.send( 'ardaboard ready to use by everyone' )
})

app.listen( 3000, function () {
  console.log('server listening on 3000')
})
