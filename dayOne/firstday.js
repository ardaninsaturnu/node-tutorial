const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer( ( request, response ) => {
  response.writeHead( 200, { "Content-Type": "text/html" });
  fs.readFile('index.html', ( err, data ) => {
    if( err )
        throw err;
      console.log( "Operation Success" );
      response.end( data );
  })
  
  response.end('made by Mehmet Arda Celik');
})

server.listen( port, host, ( error ) => {
    if( error ) {
      return console.log( 'error lan', error );
    }
  
  console.log( 'server is listening on ' + host + ':'+ port );
})


