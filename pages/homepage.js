"use strict";
const { v4 } = require("uuid");
const jwt_decode = require("jwt-decode");
const config = require("../config/config");
const { getToken } = require("../service/storage");
const { getUserOrganisations } = require("../service/publicApi");

const homePage = async (req, res) => {
  const token = await getToken();

  if (!token) {
    res.type("html");
    res.send(`
      <h1>Hello</h1>
      <h2>Please sign in to continue</h2>
      <form action="${config.OIDC.URL}${config.OIDC.PATH_AUTH}">
        <input type="hidden" name="client_id" value="${config.CLIENT_ID}" />
        <input type="hidden" name="redirect_uri" value="${
          config.REDIRECT_URL
        }" />
        <input type="hidden" name="scope" value="${config.SCOPE}" />
        <input type="hidden" name="response_type" value="code" />
        <input type="hidden" name="state" value="${v4()}" />
        <button>Sign in</button>
      </form>
    `);
    // return;
  } else {
    const parsedToken = JSON.parse(token);
    const decodedJwt = jwt_decode(parsedToken.id_token);

    const userOrgResponse = await getUserOrganisations();

    res.type("html");
    res.send(`
      <h1>Hello ${decodedJwt.given_name} ${decodedJwt.family_name}</h1>
      <a href="/clear">Clear token</a>
      <pre>token: ${JSON.stringify(parsedToken, undefined, 2)}</pre>
      <br>
      <pre>/users/:userId/organisations response: ${JSON.stringify(
        userOrgResponse,
        undefined,
        2
      )}</pre>
    `);
    // return;
  }
};

module.exports = { homePage };
