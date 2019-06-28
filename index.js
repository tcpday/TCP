const { parseRequest } = require('./lib/app');
const { createServer } = require('net');


const makeHTTPPacket = (data, contentType) => {
  return `HTTP/1.1 200 OK
  Date: ${new Date()};
  Server: Apache
  Accept-Ranges: bytes
  Content-Type: ${contentType}

  ${data}`;
};


const server = createServer(sock => {
  console.log('browser connected');
  sock.on('data', data => {
    const req = parseRequest(data);
    console.log('req', req);
    if(req.method === 'GET' && req.path === '/') {
      sock.write('hello');
      console.log('within if');
    }
  });

});


server.listen(7880);

module.exports = { makeHTTPPacket };
