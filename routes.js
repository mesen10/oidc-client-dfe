"use strict";
const {
  clear,
  homePage,
  logout,
  oauthCallback,
  userAccessToService,
  userOrganisations,
} = require("./pages");

const routes = (app) => {
  app.get("/", homePage);
  app.get("/clear", clear);
  app.get("/logout", logout);
  app.get("/oauth/callback", oauthCallback);
  app.get("/userAccessToService", userAccessToService);
  app.get("/userOrganisations", userOrganisations);
};

module.exports = { routes };
