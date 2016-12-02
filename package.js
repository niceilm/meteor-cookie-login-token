Package.describe({
  name: 'flynn:cookie-login-token',
  version: '0.0.2',
  summary: "meteor account login token save to cookie",
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:niceilm/meteor-cookie-login-token.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "cookies": "0.6.2"
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.2');
  api.use('ecmascript');
  api.use('tracker', 'client');
  api.use('accounts-base', 'client');
  api.use('http', 'client');
  api.use('webapp', 'server');
  api.addFiles('lib/common.js');
  api.addFiles('lib/server.js', 'server');
  api.addFiles('lib/client.js', 'client');
  api.export('CookieLoginToken');
});