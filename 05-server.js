var http = require('http'),
    fs   = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html'});
  switch (req.url) {
    case '/step1':
      res.write(JSON.stringify({ step: 1 }));
      res.end();
      break;
    case '/step2':
      res.write(JSON.stringify({ step: 2 }));
      res.end();
      break;
    default:
      fs.readFile(__dirname + '/05.html', 'utf-8', function (err, file) {
        if (err) throw err;
        res.write(file);
        res.end();
      });
  }

}).listen(8080);
console.log('Running');