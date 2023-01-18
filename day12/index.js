const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  if(err) throw err;
  const db = client.db(dbName);
  db.createCollection("myCollection", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    client.close();
  });
});
