const swaggerJsDoc = require("swagger-jsdoc");
const { APP_NAME } = require("../utils/constants");
const { version } = require("../package.json");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: APP_NAME,
      version,
      description: "Utilities service for GDSC FPTU",
    },
  },
  apis: ["./apps/*/routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
