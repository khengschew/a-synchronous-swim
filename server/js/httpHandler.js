const headers = require('./cors');

module.exports = (req, res) => {
  headers['Content-Type'] = 'application/json';

  res.writeHead(200, headers);
  console.log('the server is working!');

  // Generate random direction
  var directions = ['up', 'down', 'left', 'right'];

  // Move in random direction
  var newDirection = directions[Math.floor(Math.random() * 4)];

  res.end(JSON.stringify({direction: newDirection}));
};
