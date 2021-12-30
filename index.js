//require()
var fs = require('fs');
var textIN = fs.readFileSync('games.txt','utf-8');
console.log(textIN);
var textOut = `Sports played : ${textIN}`;
fs.writeFileSync('./output/output.txt',textOut);
console.log(textOut);
console.log('the file has been written successfully..');
