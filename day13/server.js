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


/**
// Express.js kurulumu
const express = require('express');
const app = express();

// MongoDB bağlantısı için kurulum
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://root:saturn123@@signupster.vdvhmpb.mongodb.net/?retryWrites=true&w=majority";

// Form verilerini almak için body-parser kurulumu
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Şifreleri hashlemek için bcrypt kurulumu
const bcrypt = require('bcrypt');

// HTML formunu ekleme
app.get('/', (req, res) => {
  res.send(`
    <form action="/signup" method="post">
      <label>İsim:</label>
      <input type="text" name="name" required>
      <br>
      <label>E-posta:</label>
      <input type="email" name="email" required>
      <br>
      <label>Telefon Numarası:</label>
      <input type="tel" name="phone" required>
      <br>
      <label>Şifre:</label>
      <input type="password" name="password" required>
      <br>
      <input type="submit" value="Kaydol">
    </form>
  `);
});

// Form verilerini alma ve kaydetme
app.post('/signup', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.log(err);
      res.send('Bir hata oluştu, lütfen tekrar deneyin.');
    } else {
      MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
        if (err) {
          console.log(err);
          res.send('Veritabanına bağlanılamadı, lütfen tekrar deneyin.');
        } else {
          const dbo = db.db("signupster");
          const user = { name: name, email: email, phone: phone, password: hashedPassword };
          dbo.collection("users").insertOne(user, (err, result) => {
            if (err) {
              console.log(



MEHMET ARDA ÇELİK
devam edebilirsin
err);
res.send('Kayıt işlemi gerçekleştirilemedi, lütfen tekrar deneyin.');
} else {
console.log('Kayıt işlemi başarılı: ' + result);
res.redirect('/');
}
db.close();
});
}
});
}
});
});

// Sunucuyu başlatma
app.listen(3000, () => {
console.log('Sunucu 3000 portunda çalışıyor.');
});
 **/
