"use strict";
const { clear, homePage, oauthCallback } = require("./pages");

const routes = (app) => {
  app.get("/", homePage);
  app.get("/clear", clear);
  app.get("/oauth/callback", oauthCallback);
};

module.exports = { routes };
