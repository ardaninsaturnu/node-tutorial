// encoding with md5 algorithm
/*
const crypto = require('crypto');
const hash = crypto.createHash('md5');
const data = hash.update('Mehmet Arda Çelik', 'utf-8');
const generateHash = data.digest('hex');
console.log(generateHash);
*/

// encoding with WhirlPool algorithm
/*
const crypto = require('crypto');
const hash = crypto.createHash('whirlpool');
const data = hash.update('MehmetArdaÇelik','utf-8');
const generateHash = data.digest('hex');
console.log( generateHash );
*/

// encoding with SHA1 algorithm
/*
const crypto = require('crypto');
const hash = crypto.createHash('SHA1');
const data = hash.update('sikimiye','utf-8');
const generateHash = data.digest('hex');
console.log(generateHash)
*/

// encoding with SHA224 algorithm
/*
 const crypto = require('crypto');
const hash = crypto.createHash('SHA224');
const data = hash.update('coelhoMamet', 'utf-8');
const generateHash = data.digest('hex');
console.log(generateHash)
*/

// encoding with SHA256 algorithm
/*
 const crypto = require('crypto');
const hash = crypto.createHash('SHA256');
const data = hash.update('coelhoMamet', 'utf-8');
const generateHash = data.digest('hex');
console.log(generateHash)
*/

// encoding with SHA384 algorithm
/*
 const crypto = require('crypto');
const hash = crypto.createHash('SHA384');
const data = hash.update('coelhoMamet', 'utf-8');
const generateHash = data.digest('hex');
console.log(generateHash)
*/

// encoding with SHA512 algorithm
/*
 const crypto = require('crypto');
const hash = crypto.createHash('SHA512');
const data = hash.update('coelhoMamet', 'utf-8');
const generateHash = data.digest('hex');
console.log(generateHash)
*/

// encoding with SHA512 algorithm
/*
const crypto = require('crypto');
const hash = crypto.createHash('SHA224');
const data = hash.update('coelhoMamet', 'utf-8');
const generateHash = data.digest('hex');
console.log(generateHash)
*/

//loading the required modules in node.js
const crypto = require('crypto');
const fs = require('fs');

//algoritm to be used for HASH
const algorithm = 'sha256';
const hash = crypto.createHash(algorithm);

// reading the content of the file
const filename = "./data.txt";
const file_data = fs.ReadStream(filename);

//passing the data to be hashed
file_data.on('data', function( data ){
  hash.update( data )
})

// Creating hash in the required format and writing it in file
file_data.on('end', function () {
  const gen_hash = hash.digest('hex')
  console.log( 'Hash generated using' + algorithm  );
  fs.writeFileSync( filename, gen_hash );
  console.log(gen_hash)
})




