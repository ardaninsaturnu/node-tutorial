require('dotenv').config();
const crypto = require('crypto');

// Express.js kurulumu
const express = require('express');
const app = express();

// MongoDB bağlantısı için kurulum
const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB_URI;

// Form verilerini almak için body-parser kurulumu
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static('public'));

app.get( '/', function( req,res ){
  res.set({
    'Access-Control-Allow-Origin' : '*'
  })
  
  res.redirect( '/public' );
}).listen(3000 );


const getHash = ( pass, phone ) => {
  const hmac = crypto.createHmac('sha512', phone );
  const data = hmac.update( pass );
  
  // creating hmac in the required format
  return data.digest('hex');
}


// Sign-up function starts here
app.post('/sign_up', function( req, res){
  
  console.log('what happened', req.body.name)
  
  const name = req.body.name;
  const email = req.body.email;
  const pass = req.body.password;
  const phone = req.body.phone;
  const password = getHash( pass, phone );
  
  const user = { name, email, phone, password };
  
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      console.log(err);
      res.send('Veritabanına bağlanılamadı, lütfen tekrar deneyin.');
    } else {
      const dbo = db.db("signupster");
      dbo.collection("users").insertOne( user, (err, result) => {
        if (err) {
          console.log(err);
          res.send('Kayıt işlemi gerçekleştirilemedi, lütfen tekrar deneyin.');
        } else {
          console.log('Kayıt işlemi başarılı: ' + result);
          res.redirect('/public/success.html');
        }
        db.close();
      });
    }
  });
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
              console.log(err);
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
