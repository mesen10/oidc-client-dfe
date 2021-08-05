"use strict";

const config = {
  CLIENT_ID: "XXX",
  CLIENT_SECRET: "XXX",
  OIDC: {
    LOGOUT: "/session/end",
    URL: "https://test-oidc.signin.education.gov.uk",
    PATH_AUTH: "/auth",
    PATH_TOKEN: "/token",
  },
  PUBLIC_API: {
    URL: "https://test-api.signin.education.gov.uk",
    PATH_USER_ACCESS:
      "/services/:serviceId/organisations/:organisationId/users/:userId",
    PATH_USER_ORGANISATIONS: "/users/:userId/organisations",
    TOKEN: "XXX",
  },
  REDIRECT_URL: "http://localhost:3000/oauth/callback",
  SCOPE: "openid profile email organisationid",
  // SCOPE: "openid profile email",
};

module.exports = config;
