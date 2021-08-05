"use strict";
const { getToken } = require("../service/storage");
const { getUserOrganisations } = require("../service/publicApi");

const userOrganisations = async (req, res) => {
  const token = await getToken();

  if (!token) {
    res.redirect("/");
  } else {
    const userOrgResponse = await getUserOrganisations();

    res.type("html");
    res.send(`
      <div style="margin: 30px 20px;">
        <a href="/">Back</a>
        <h3>/users/:userId/organisations</h3>
        <pre>Response: ${JSON.stringify(userOrgResponse, undefined, 2)}</pre>
      </div>
    `);
    // return;
  }
};

module.exports = { userOrganisations };
