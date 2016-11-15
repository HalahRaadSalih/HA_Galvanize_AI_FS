var fs = require('fs');

var licenseWordCounter = function(filePath, callback){
  var path = __dirname + '/../data/' + filePath;
  fs.readFile(path, 'utf8', function(err, data){
    if(err){
      throw err;
    }
    var lines = data.split('\n').map(function(line){
      return line.toLowerCase().split(" ");
    }).reduce(function(a,b){
      return a.concat(b);
    });

    var linesObj = {};
    for(var i = 0; i < lines.length; i++){
      if(linesObj[lines[i]]){
        linesObj[lines[i]] += 1;
      }
      else {
        linesObj[lines[i]] = 1;
      }
    }
    callback(linesObj);
  });
};

module.exports = licenseWordCounter;
