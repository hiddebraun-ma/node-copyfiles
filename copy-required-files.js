const fs = require("fs");
let files = require('./required_files.json');

let copyCallback = function (err) {
  if (err) {
    console.error(err.message);
  }
};

files.forEach((fileInfo) => {
  console.log(`Copying ${fileInfo.source} to ${fileInfo.destination}`);
  fs.copyFile(fileInfo.source, fileInfo.destination, copyCallback);
});
