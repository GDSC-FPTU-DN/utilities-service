const express = require("express");
const bodyParser = require("body-parser");
const useragent = require("express-useragent");
const swaggerUi = require("swagger-ui-express");
const apiRouter = require("./apps/index");
const { loggerMiddleware } = require("./middlewares/logger.middleware");
const { APP_NAME } = require("./utils/constants");
const swaggerSpec = require("./configs/swagger.config");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(useragent.express());
app.use(loggerMiddleware);

// Serve Swagger UI
app.get("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Register API routes
app.use("/api", apiRouter);

// Error handler
app.use(function (err, req, res, next) {
  console.error(err.message, err.stack);
  res.status(err.statusCode || 500).json({ error: err.message });
  return;
});

app.listen(port, () => {
  console.log(`${APP_NAME} is listening on port: ${port}`);
});
