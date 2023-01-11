// regular expressions

//there are 2 ways to create regex expression one of them

// 1) by regular expression literals
//const regex = /ab*/;
// it will be match 'a', 'ab', 'abb', 'abbbbb' and so on

// 2) calling constructor function
//const reg = new RegExp('ab*');
// it will be match 'a', 'ab', 'abb', 'abbbbb' and so on
// exactly same both of them

/*
 g : global scope
 i : case insensitive
 m : multiline match
*/

// Finding specific text

/*
const fs = require('fs');
const fileName = require('./data.txt');

const str = fs.readFileSync(fileName).toString();
const pattern = /man/gim;
const filteredArr = str.match( pattern );
const length = filteredArr.length;

console.log("Occurrences of pattern in the string is : " + length );
*/


// Find number of tags

/*
const fs = require('fs');
const fileName = require('./index.html');

const str = fs.readFileSync( fileName ).toString();
const pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

const filteredArr = str.match( pattern );
const len = filteredArr.length;
console.log("Occurrences of pattern in the string is : " + len );
*/

// Validate an Email

const str = 'rjbitdemo@gmail.com'
const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const res = str.match( pattern );
if(res){
  console.log("Valid email address");
}else{
  console.log("Please enter a valid email address");
}
