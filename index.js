const express = require("express");
const { PORT } = require("./src/config/serverConfig.js");
const bodyParser = require("body-parser");

const settingUpServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    console.log(`Server is listening on the port ${PORT}`);
  });
};
settingUpServer();
