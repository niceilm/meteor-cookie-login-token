meteor login token with cookie
----

```
meteor add flynn:cookie-login-token
```

## example
```
WebApp.connectHandlers.use(function (req, res, next) {
    const Cookies = Npm.require('cookies');
    const cookies = new Cookies(req, res);
    const token = cookies.get('token');
    if (token) {
        const user = Meteor.users.findOne({ 'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token) });
        user._id;
    }
}
```