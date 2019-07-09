const { parseRequest, makeHTTPPacket, makeTextOnlyPacket } = require('./lib/app');
const { createServer } = require('net');

const bar = {
  bar: 'scandals',
  age: 21,
  drink: 'paloma',
  weight: 'light'
};

const jsonBar = JSON.stringify(bar);

const router = {
  POST: {
    '/': makeTextOnlyPacket('Sorry!', 'text/plain')
  },
  GET: {
    '/': makeTextOnlyPacket('hi', 'text/plain'),
    '/red': makeHTTPPacket('red', 'text/html'),
    '/blue': makeHTTPPacket('blue', 'text/html'),
    '/green': makeHTTPPacket('green', 'text/html'),
    '/bar': makeTextOnlyPacket(jsonBar, 'application/json')
  }
};

const server = createServer(sock => {
  sock.on('data', data => {
    const req = parseRequest(data);
    const res = router[req.method][req.path] || makeHTTPPacket('404 NOT FOUND', 'text/html', '404 Not Found');
  
    sock.write(res);

    sock.end();
    
  });

});

server.listen(7880);

module.exports = { makeHTTPPacket };
