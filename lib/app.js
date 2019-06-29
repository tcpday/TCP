const parseRequest = (req) => {
  let request = req.toString().split('\n');
  let stringRequest = request.toString().split(' ');
  let method = stringRequest[0];
  let path = stringRequest[1];
  return { method, path }; 
};

const getHTML = (greeting) => {
  return `<!DOCTYPE html>
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

const makeHTTPPacket = (greeting, contentType, status = '200 OK') => {
  const html = getHTML(greeting);
  return `HTTP/1.1 ${status}
  Date: ${new Date()};
  Server: Apache
  Accept-Ranges: bytes
  Content-Type: ${contentType}

  ${html}
  `;
};
const makeTextOnlyPacket = (greeting, contentType, status = '200 OK') => {
  return `HTTP/1.1 ${status}
  Date: ${new Date()};
  Server: Apache
  Accept-Ranges: bytes
  Content-Type: ${contentType}

  ${greeting}
  `;
};

module.exports = { parseRequest, makeHTTPPacket, makeTextOnlyPacket };
