const router = require("express").Router();

const controller = require("../controller");

router.post("/register", controller.users().register);

module.exports = router;
