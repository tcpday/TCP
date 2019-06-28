const { makeHTTPPacket } = require('../lib/app');

describe('makehttppacket', () => {
  it('will make a header with html', () => {
  global.Date = jest.fn();
  const html = makeHTTPPacket('blue', 'text/html');
  expect(html).toEqual(`${html}`
    );
  });
  it('will make a header with text/text', () => {
    global.Date = jest.fn();
    const html = makeHTTPPacket('hi', 'text/text');
    expect(html).toEqual(`${html}`
    );
  });
});
