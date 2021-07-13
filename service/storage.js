"use strict";

const storage = require("node-persist");
const TOKEN = "token";

const getToken = async () => {
  return await storage.getItem(TOKEN);
};

const setToken = async (token) => {
  await storage.setItem(TOKEN, token);
};

module.exports = {
  getToken,
  setToken,
};
