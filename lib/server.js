import {WebApp} from "meteor/webapp";
const Cookies = Npm.require('cookies');

WebApp.connectHandlers.use('/api/cookie-login', function (req, res, next) {
  if (req.method === 'POST') {
    const {token} = req.body;
    const cookies = new Cookies(req, res);
    cookies.set('token', token, {httpOnly: true});
    res.statusCode = 200;
    res.end();
  } else {
    next();
  }
});
WebApp.connectHandlers.use('/api/cookie-logout', function (req, res, next) {
  if (req.method === 'POST') {
    const cookies = new Cookies(req, res);
    cookies.set('token', '', {httpOnly: true});
    res.statusCode = 200;
    res.end();
  } else {
    next();
  }
});