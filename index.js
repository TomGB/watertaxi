var util = require('util'),
    http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var socket = require('socket.io-client')('http://leedsdocktravel.azurewebsites.net/');

  socket.on('pushBoatData', function(data) {
      const string = JSON.stringify(data.twee, null, 4);
        res.write(string);
        res.end();
        socket.disconnect();
  });
}).listen(80);


/* server started */
util.puts('> hello world running on port 8000');
