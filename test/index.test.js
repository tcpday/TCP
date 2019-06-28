const { makeHTTPPacket } = require('../lib/app');

describe('makehttppacket', () => {
  it('will make a header', () => {
  global.Date = jest.fn();
  const html = makeHTTPPacket('a', 'b');
  expect(html).toEqual(`HTTP/1.1 200 OK
  Date: ${new Date()};
  Server: Apache
  Accept-Ranges: bytes
  Content-Type: b

  a`
    );
  });
});
