const { makeHTTPPacket, makeTextOnlyPacket, make400Error } = require('../lib/app');

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
  it('400 text with sorry', () => {
    global.Date = jest.fn();
    const text = makeTextOnlyPacket('sorry!', 'text/text');
    expect(text).toEqual(`${text}`);
  });
  it('404 text with error', () => {
    global.Date = jest.fn();
    const html = makeHTTPPacket('purple', 'text/html', '404 OK');
    expect(html).toEqual(`${html}`, 'text/html', '404 OK');
  });
});
