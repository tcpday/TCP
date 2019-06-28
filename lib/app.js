const parseRequest = (req) => {
  let request = req.toString().split('\n');
  let stringRequest = request.toString().split(' ');
  let method = stringRequest[0];
  let path = stringRequest[1];
  return { method, path }; 
};

const makeHTTPPacket = (greeting, contentType) => {
  return `HTTP/1.1 200 OK
  Date: ${new Date()};
  Server: Apache
  Accept-Ranges: bytes
  Content-Type: ${contentType}

  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>${greeting}</h1>
</body>
</html>`;
};

// if(path === '/') {
//   console.log('made it here');
//   sock.write('hi');
  
// }

module.exports = { parseRequest, makeHTTPPacket };
