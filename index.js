const { parseRequest } = require('./lib/app');
const { createServer } = require('net');

const server = createServer(sock => {
  console.log('browser connected');
  
  sock.on('data', data => {
    
    console.log(data.toString());
    parseRequest(data);
    console.log(parseRequest());
    
  
  });

});


server.listen(7880);
