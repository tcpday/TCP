const parseRequest = (req) => {
  let request = req.toString().split('\n');
  let stringRequest = request.toString().split(' ');
  let method = stringRequest[0];
  let path = stringRequest[1];
  return { method, path }; 
};

// if(path === '/') {
//   console.log('made it here');
//   sock.write('hi');
  
// }

module.exports = { parseRequest };
