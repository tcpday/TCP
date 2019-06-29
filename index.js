const { parseRequest, makeHTTPPacket, makeTextOnlyPacket } = require('./lib/app');
const { createServer } = require('net');

const bar = {
  bars: 'scandals',
  age: 21,
  drink: 'paloma',
  weight: 'light'
};

const jsonBar = JSON.stringify(bar);

const server = createServer(sock => {
  sock.on('data', data => {
    const req = parseRequest(data);
    
    if(req.method === 'GET' && req.path === '/') {
      sock.write(makeTextOnlyPacket('hi', 'text/plain'));
    } else if(req.method === 'POST' && req.path === '/') {
      sock.write(makeTextOnlyPacket('Sorry!', 'text/plain', '400 Bad Request')); 
    } else if(req.method === 'GET' && req.path === '/red') {
      sock.write(makeHTTPPacket('red', 'text/html'));
    } else if(req.method === 'GET' && req.path === '/blue') {
      sock.write(makeHTTPPacket('blue', 'text/html'));
    } else if(req.method === 'GET' && req.path === '/green') {
      sock.write(makeHTTPPacket('green', 'text/html'));
    } else if(req.method === 'GET' && req.path === '/bar') {
      sock.write(makeTextOnlyPacket(jsonBar, 'application/json'));
    } else if(req.method === 'GET') {
      sock.write(makeHTTPPacket('404 NOT FOUND', 'text/html', '404 Not Found'));
    }  
    sock.end();
  });

});

server.listen(7880);

module.exports = { makeHTTPPacket };
