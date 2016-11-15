import {Meteor} from "meteor/meteor";
import {Accounts} from "meteor/accounts-base";
import {Tracker} from "meteor/tracker";
import {HTTP} from "meteor/http";

Tracker.autorun(() => {
  const userId = Meteor.userId();
  if (userId) {
    console.log('/api/cookie-login');
    HTTP.post('/api/cookie-login', {
      data: {
        token: Accounts._storedLoginToken()
      }
    }, () => {
    });
  } else {
    console.log('/api/cookie-logout');
    HTTP.post('/api/cookie-logout', () => {
    });
  }
});
