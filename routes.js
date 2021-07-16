"use strict";
const { clear, homePage, oauthCallback, userAccessToService, userOrganisations } = require("./pages");

const routes = (app) => {
  app.get("/", homePage);
  app.get("/clear", clear);
  app.get("/oauth/callback", oauthCallback);
  app.get("/userAccessToService", userAccessToService);
  app.get("/userOrganisations", userOrganisations);
};

module.exports = { routes };
