// create a new error message
const error = new Error('This is an error message.');

// error.message
console.log(error.stack);

/* error.code, error.stack, error.captureStackTrace, error.stackTraceLimit  */

// Asynchronously APIs
/*
  connection.on('error', (err) => {
      //This is the error event which is used
      //to handle the error properly
      console.error(err);
  });
*/


//Reading a File Asynchronously using nodejs
//if any error occurs such as file not found
//we don't have permissions , etc
//then an err message will be console.
//otherwise data will be printed
var fs=require('fs');

fs.readFile('message.txt', (err, data) => {
  if (err)
    return console.error(err);
  
  console.log("Content :  " + data);
});

