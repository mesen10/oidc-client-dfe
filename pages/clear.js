"use strict";
const { setToken } = require("../service/storage");

const clear = async (req, res) => {
  await setToken(null);
  res.redirect("/");
};

module.exports = { clear };
