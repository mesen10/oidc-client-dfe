"use strict";
const { getAccessToken } = require("../service/oidc");

const oauthCallback = async (req, res) => {
  const { code, state } = req.query;
  console.log(`code: ${code} state: ${state}`);

  await getAccessToken(code);
  res.redirect("/");
};

module.exports = { oauthCallback };
