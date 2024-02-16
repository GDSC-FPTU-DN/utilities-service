const express = require("express");
const router = express.Router();

// Api routers
router.use("/emails", require("./emails/routes/emails"));

module.exports = router;
