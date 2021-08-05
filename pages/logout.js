"use strict";

const { getToken, setToken } = require("../service/storage");
const config = require("../config/config");

const logout = async (req, res) => {
  const token = await getToken();
  if (token) {
    const parsedToken = JSON.parse(token);
    await setToken(null);
    const url = encodeURI(
      `${config.OIDC.URL}${config.OIDC.LOGOUT}?id_token_hint=${parsedToken.id_token}&post_logout_redirect_uri=http://localhost:3000`
    );
    res.redirect(url);
  } else {
    res.redirect("/");
  }
};

module.exports = { logout };
