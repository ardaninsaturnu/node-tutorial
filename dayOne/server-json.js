const http = require('http');

http.createServer( ( request, response ) => {

  response.writeHead( 200, { 'Content-Type': 'application/json' }  );
  
  let jsonResponse = {
    status : 200 ,
    message : 'succssful' ,
    result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] ,
    code : 2000
  }

  response.end( JSON.stringify(jsonResponse) );

}).listen( 3000 );
