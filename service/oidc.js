"use strict";
const config = require("../config/config");
const axios = require("axios");
const { setToken } = require("./storage");

const getAccessToken = async (code) => {
  try {
    const response = await axios.post(
      `${config.OIDC.URL}${config.OIDC.PATH_TOKEN}`,
      {
        grant_type: "authorization_code",
        client_id: config.CLIENT_ID,
        client_secret: config.CLIENT_SECRET,
        redirect_uri: config.REDIRECT_URL,
        code,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        transformRequest: getQueryString,
      }
    );
    const token = response.data; // Populate accessToken variable with token response
    console.log("Token", token);

    await setToken(JSON.stringify(token));
  } catch (e) {
    console.log(e);
  }
};

function getQueryString(data = {}) {
  return Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}

module.exports = { getAccessToken };
