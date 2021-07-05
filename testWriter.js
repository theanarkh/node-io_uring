const { FileWriter } = require('./FileWriter');
const fs = require('fs');
const fd = fs.openSync('./1.txt', 'w');
const fileWrite = new FileWriter({fd});
fileWrite.write("hello world", () => {console.log(111)});

