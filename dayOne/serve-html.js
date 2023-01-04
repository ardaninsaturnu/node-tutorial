const http = require('http');
const fs = require('fs');

http.createServer( function (request,response) {
  
  // specify path for html file
  fs.readFile( 'index.html', ( err, data ) => {
   if( err ) {
     response.statusCode = 500;
     response.end( `Error getting the file : ${err}.`)
     return;
   }
   
   response.setHeader('Content-type', 'text/html')
   response.statusCode = 200;
   response.end( data );
  });
  
}).listen(3000 );

