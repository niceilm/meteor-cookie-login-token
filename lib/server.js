import {WebApp} from "meteor/webapp";
import {Meteor} from "meteor/meteor";
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

CookieLoginToken.getUserId =  getUserId;

function getUserId() {
  const cookies = new Cookies(req, res);
  const token = cookies.get('token');
  if (token) {
    const user = Meteor.users.findOne({'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token)});
    return user._id;
  }

  return null;
}