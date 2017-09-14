/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'admin',
    environment,
    rootURL: '/',
    locationType: 'auto',
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

  if (environment === 'development') {
    ENV.host = 'http://localhost:3000';

    ENV.contentSecurityPolicy = {
      'connect-src': "'self' localhost:3000",
      'font-src': "'self' data: m",
      'style-src': "'self' 'unsafe-inline' ",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'img-src': "'self' 'unsafe-inline' 'unsafe-eval' data:"
    };

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.host = 'https://sleepy-ridge-87594.herokuapp.com';

    ENV.contentSecurityPolicy = {
      'connect-src': "'self' sleepy-ridge-87594.herokuapp.com",
      'font-src': "'self' data: m",
      'style-src': "'self' 'unsafe-inline' ",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'img-src': "'self' 'unsafe-inline' 'unsafe-eval' data:"
    };
  }

  return ENV;
};
