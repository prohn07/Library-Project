var jwt = require("jsonwebtoken");
var secretkey = "qwerty";

function bookMiddleware(req, res, next) {
  let token;

  token = req.headers.authorization.slice(7);

  jwt.verify(token, secretkey, (error) => {
    if (error) {
      res.json({
        ok: false,
        result: "failed to match token",
      });
    } else {
      next();
    }
  });
}

module.exports = bookMiddleware;
