require('dotenv').config();
let express = require('express');
let path = require('path');
let mongo = require('mongodb');
let bodyParser = require('body-parser');
let crypto = require('crypto');

let app = express();
const new_db = process.env.DB_URI;

app.get( '/', function( req,res ){
  res.set({
    'Access-Control-Allow-Origin' : '*'
  })
  
  return res.redirect('/public/')
}).listen(3000 );

console.log(__dirname,__filename);

app.use('/public', express.static('public'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

const getHash = ( pass, phone ) => {
  const hmac = crypto.createHmac('sha512', phone );
  const data = hmac.update( pass );
  // creating hmac in the required format
  const gen_hmac = data.digest('hex');
  console.log( gen_hmac );
  return gen_hmac;
}


// Sign-up function starts here
app.post('/sign_up', function( req, res){
  
  console.log('what happened')
  
  const name = req.body.name;
  const email = req.body.email;
  const pass = req.body.password;
  const phone = req.body.phone;
  const password = getHash( pass, phone );
  
  var data = {
    "name": name,
    "email": email,
    "password": password,
    "phone" : phone
  }
  
  mongo.connect( new_db , function( err, db ){
    if(err) {
      console.log(err, 'fuck')
      throw err;
    }
    
    console.log('connected succesfully')
    db.collection("details").insertOne(data, (err , collection) => {
      if(err) throw err;
      console.log("Record inserted successfully");
      console.log(collection);
    });
  })
  
  console.log("DATA is " + JSON.stringify(data) );
  res.set({
    'Access-Control-Allow-Origin' : '*'
  });
  return res.redirect('/public/success.html');
})

