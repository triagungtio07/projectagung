const db = require("../models/users");

class Users {
  async register(req, res) {
    const { body } = req;

    const data = await db.save(body);

    res.send("success");
  }
}

module.exports = new Users();
