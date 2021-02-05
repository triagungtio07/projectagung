const usersController = require("./users");

class Controller {
  users() {
    return usersController;
  }
}

module.exports = Object.freeze(new Controller());
