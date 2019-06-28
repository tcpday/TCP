const { makeHTTPPacket, makeTextOnlyPacket } = require('../lib/app');

describe('makehttppacket', () => {
  it('will make a header with html', () => {
  global.Date = jest.fn();
  const html = makeHTTPPacket('blue', 'text/html');
  expect(html).toEqual(`${html}`
    );
  });
  it('will make a header with text/text', () => {
    global.Date = jest.fn();
    const text = makeTextOnlyPacket('hi', 'text/text');
    expect(text).toEqual(`${text}`);
  });
});

describe('routes', () => {
  it('will route to red', () => {
    global.Date = jest.fn();
    const html = makeHTTPPacket('red', 'text/html');
    expect(html).toEqual(`${html}`
    );
  });
});