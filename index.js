const { parseRequest } = require('./lib/app');
const { createServer } = require('net');

const server = createServer(sock => {
  console.log('browser connected');
  sock.on('data', data => {
    parseRequest(data);
    console.log('parse', parseRequest(data));
  });

});


server.listen(7880);
