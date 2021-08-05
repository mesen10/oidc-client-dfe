"use strict";
const jwt_decode = require("jwt-decode");
const axios = require("axios");
const config = require("../config/config");
const { getToken } = require("./storage");

const getUserAccessToService = async () => {
  const token = await getToken();

  if (token) {
    const parsedToken = JSON.parse(token);
    const decodedJwt = jwt_decode(parsedToken.id_token);
    const {
      sub,
      organisation: { id: organisationId },
    } = decodedJwt;

    let url = config.PUBLIC_API.URL + config.PUBLIC_API.PATH_USER_ACCESS;
    url = url
      .replace(":userId", sub)
      .replace(":serviceId", config.CLIENT_ID)
      .replace(":organisationId", organisationId);

    try {
      const response = await axios({
        url: url,
        headers: {
          Authorization: "bearer " + config.PUBLIC_API.TOKEN,
        },
      });

      // console.log(response.data);
      return response.data;
    } catch (e) {
      console.error("Error", e);
    }
  }
};

const getUserOrganisations = async () => {
  const token = await getToken();

  if (token) {
    const parsedToken = JSON.parse(token);
    const decodedJwt = jwt_decode(parsedToken.id_token);
    const { sub } = decodedJwt;

    let url = config.PUBLIC_API.URL + config.PUBLIC_API.PATH_USER_ORGANISATIONS;
    url = url.replace(":userId", sub);

    try {
      const response = await axios({
        url: url,
        headers: {
          Authorization: "bearer " + config.PUBLIC_API.TOKEN,
        },
      });
      // console.log(response.data);
      return response.data;
    } catch (e) {
      console.error("Error", e);
    }
  }
};

module.exports = { getUserAccessToService, getUserOrganisations };
