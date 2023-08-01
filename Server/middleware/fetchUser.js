const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const fetchUser = function (req, res, next) {
  const token = req.header("auth-token");

  if (!token) {
    res.status(401).send({ error: "Please authenticate-1 using valid token" });
  }

  jwt.verify(token, JWT_SECRET, function (err, decodedToken) {
    if (err) {
      res
        .status(401)
        .send({ error: "Please authenticate-1 using valid token" });
    } else {
      req.id = decodedToken.id; // Add to req object
      //console.info(decodedToken.id);
      next();
    }
  });
};

module.exports = fetchUser;
