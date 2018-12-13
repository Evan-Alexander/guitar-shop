const { User } = require('./../models/user');

let auth = (req, res, next) => {
  let token = req.cookies.w_auth;

  User.findByToken(token, (err, user) => {
    if(err) throw err;
    if(!user) return res.json({
      isAuth: false,
      error: true
    });
    // If all good, assign the token and user as properties to the request for future verification.
    req.token = token;
    req.user = user;
    next();
  })
}

module.exports = { auth }