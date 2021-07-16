"use strict";
const { getToken } = require("../service/storage");
const { getUserAccessToService } = require("../service/publicApi");

const userAccessToService = async (req, res) => {
  const token = await getToken();

  if (!token) {
    res.redirect("/");
  } else {
    const userOrgResponse = await getUserAccessToService();

    res.type("html");
    res.send(`
      <div style="margin: 30px 20px;">
        <a href="/">Back</a>
        <h3>/services/:serviceId/organisations/:organisationId/users/:userId</h3>
        <pre>Response: ${JSON.stringify(
          userOrgResponse,
          undefined,
          2
        )}</pre>
      </div>
    `);
    // return;
  }
};

module.exports = { userAccessToService };
