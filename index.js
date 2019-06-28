const { parseRequest, makeHTTPPacket, makeTextOnlyPacket } = require('./lib/app');
const { createServer } = require('net');

const server = createServer(sock => {
  console.log('browser connected');
  sock.on('data', data => {
    const req = parseRequest(data);
    console.log(req);
    const route = req.path;
    const realRoute = route.substr(1);
    console.log('RealRoute', realRoute);
    console.log('this is route', route);
    console.log('req', req);
    if(req.method === 'GET' && req.path === '/') {
      sock.write(makeTextOnlyPacket('hi', 'text/text'));
    } else if(req.method === 'GET' && req.path === '/red') {
      sock.write(makeHTTPPacket('red', 'text/html'));
    } else if(req.method === 'GET' && req.path === '/blue') {
      sock.write(makeHTTPPacket('blue', 'text/html'));
    } else if(req.method === 'GET' && req.path === '/green') {
      sock.write(makeHTTPPacket('green', 'text/html'));
    } else {
      sock.statusCode = 404;
      sock.end(makeHTTPPacket('Not Found', 'text/html'));
    }
     
    sock.end();
  });

});


server.listen(7880);

module.exports = { makeHTTPPacket };
