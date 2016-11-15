var fs = require('fs');

var dateParser = function(filePath, callback){
  var path = __dirname + '/../data/' + filePath;

  fs.readFile(path, 'utf8',(err, data) => {
    if (err) throw err;

    var lines = data.split('\n').map(function(line, arr){
      var regex = /\d{4}\-\d{2}\-\d{2}/;
      return regex.exec(line)[0];
    });

    lines = lines.reduce(function(prev, curr){
      if(prev.indexOf(curr) === -1){
        prev.push(curr);
      }

      return prev;
    }, []);

    callback(lines.join("\n"));
});
}


module.exports = dateParser;
