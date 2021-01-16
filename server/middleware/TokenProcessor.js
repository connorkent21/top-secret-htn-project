const jwt = require('jsonwebtoken');

function generateToken(userId) {
  return jwt.sign(userId, process.env.TOKEN_SECRET);
}

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (token == null) {
    return res.sendStatus(401);
  }
  console.log(
    'this is the token secret in token processor: ',
    process.env.TOKEN_SECRET
  );
  jwt.verify(token, process.env.TOKEN_SECRET, (err, userId) => {
    if (err) return res.sendStatus(403);
    req.userId = userId;
    next();
  });
}

module.exports = {
  generateToken,
  authenticateToken,
};
