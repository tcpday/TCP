const { parseRequest, makeHTTPPacket } = require('./lib/app');
const { createServer } = require('net');

const server = createServer(sock => {
  console.log('browser connected');
  sock.on('data', data => {
    const req = parseRequest(data);
    console.log('req', req);
    if(req.method === 'GET' && req.path === '/') {
      sock.write(makeHTTPPacket('hi', 'text/text'));
    } else if(req.method === 'GET' && req.path === '/red') {
      sock.write(makeHTTPPacket('red', 'text/html'));
    }
     
    sock.end();
  });

});


server.listen(7880);

module.exports = { makeHTTPPacket };
