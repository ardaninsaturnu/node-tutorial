const http = require('http');
const fs = require('fs');

http.createServer( ( request, response ) => {
  
  fs.exists('audio.mp3', function( exists ) {
    if( exists ) {
      const rstream = fs.createReadStream('audio.mp3');
      rstream.pipe( response );
    } else {
      response.end('It is a 404')
    }
    
  })
  
}).listen(3000 )


