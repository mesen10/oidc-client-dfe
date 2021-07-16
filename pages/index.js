"use strict";
const { clear } = require("./clear");
const { homePage } = require("./homepage");
const { oauthCallback } = require("./oauthCallback");
const { userAccessToService } = require("./userAccessToService");
const { userOrganisations } = require("./userOrganisations");

module.exports = { clear, homePage, oauthCallback, userAccessToService, userOrganisations };
