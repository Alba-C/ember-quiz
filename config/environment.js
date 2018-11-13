"use strict";

module.exports = function(environment) {
  let ENV = {
    modulePrefix: "ember-quiz",
    environment,
    contentSecurityPolicy: {
      "script-src": "'self' 'unsafe-eval' apis.google.com",
      "frame-src": "'self' https://*.firebaseapp.com",
      "connect-src": "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },
    firebase: {
      apiKey: "AIzaSyAL-1yiheDdHZmkXi2VLMMnL0xzP9u9U1o",
      authDomain: "emberquiz.firebaseapp.com",
      databaseURL: "https://emberquiz.firebaseio.com",
      projectId: "emberquiz",
      storageBucket: "emberquiz.appspot.com",
      messagingSenderId: "656979581763"
    },
    rootURL: "/",
    locationType: "auto",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
  }

  return ENV;
};
