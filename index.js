"use strict";

const express = require("express");
const storage = require("node-persist");
const { routes } = require("./routes");

const init = async () => {
  const app = express();
  await storage.init();
  routes(app);

  app.listen(3000);
  console.log("Applications started on http://localhost:3000");
};

init();
