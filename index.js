const express = require("express");
const { PORT } = require("./src/config/serverConfig.js");
const bodyParser = require("body-parser");
const ApiRoutes = require("./src/routes/index.js");

const settingUpServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT, () => {
    console.log(`Server is listening on the port ${PORT}`);
  });
};
settingUpServer();
