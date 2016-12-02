import {Meteor} from "meteor/meteor";
import {Accounts} from "meteor/accounts-base";
import {Tracker} from "meteor/tracker";
import {HTTP} from "meteor/http";

Tracker.autorun(() => {
  const userId = Meteor.userId();
  if (userId) {
    HTTP.post('/api/cookie-login', {
      data: {
        token: Accounts._storedLoginToken()
      }
    }, () => {
    });
  } else {
    HTTP.post('/api/cookie-logout', () => {
    });
  }
});
