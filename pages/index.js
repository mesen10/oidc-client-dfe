"use strict";
const { clear } = require("./clear");
const { homePage } = require("./homepage");
const { logout } = require("./logout");
const { oauthCallback } = require("./oauthCallback");
const { userAccessToService } = require("./userAccessToService");
const { userOrganisations } = require("./userOrganisations");

module.exports = {
  clear,
  homePage,
  logout,
  oauthCallback,
  userAccessToService,
  userOrganisations,
};
