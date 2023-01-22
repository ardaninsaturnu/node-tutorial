/**
 *
 const MongoClient = require('mongodb').MongoClient;
 const url = 'mongodb://localhost:27017'; // The url of the MongoDB server
 const dbName = 'myDatabase'; // The name of the database you want to connect to
 
 MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  console.log("Connected successfully to server");
  const db = client.db(dbName); // Get the database
  // Perform operations on the database
  client.close(); // Close the connection when you're done
});
 
 **/


const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'; // The url of the MongoDB server
const dbName = 'myDatabase'; // The name of the database you want to connect to

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  console.log("Connected successfully to server");
  const db = client.db(dbName); // Get the database
  // Perform operations on the database
  client.close(); // Close the connection when you're done
});

