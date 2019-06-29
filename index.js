const { parseRequest, makeHTTPPacket, makeTextOnlyPacket } = require('./lib/app');
const { createServer } = require('net');

const server = createServer(sock => {
  console.log('browser connected');
  sock.on('data', data => {
    const req = parseRequest(data);
    
    if(req.method === 'GET' && req.path === '/') {
      sock.write(makeTextOnlyPacket('hi', 'text/plain'));
    } else if(req.method === 'POST' && req.path === '/') {
      sock.write(makeTextOnlyPacket('Sorry!', 'text/plain')); 
    } else if(req.method === 'GET' && req.path === '/red') {
      sock.write(makeHTTPPacket('red', 'text/html'));
    } else if(req.method === 'GET' && req.path === '/blue') {
      sock.write(makeHTTPPacket('blue', 'text/html'));
    } else if(req.method === 'GET' && req.path === '/green') {
      sock.write(makeHTTPPacket('green', 'text/html'));
    } else if(req.method === 'GET') {
      sock.write(makeHTTPPacket('404 NOT FOUND', 'text/html', '404 OK'));
    }
     
    sock.end();
  });

});


server.listen(7880);

module.exports = { makeHTTPPacket };
