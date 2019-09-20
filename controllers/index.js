const Users = require("../data/user");

module.exports = {
  getAll: (req, res, next) => {
    res.send({
      Users
    });
  }
};

module.exports = {
  postUser: (req, res, next) => {
    try {
      let userId = user.length;

      Users.push({
        id: userId + 1,
        name: req.body.name
      });
      res.send({
        Users
      });
    } catch (error) {
      res.send({
        message: "error to post user ",
        error
      });
    }
  }
};

module.exports = {
  deleteUserById: (req, res, next) => {
    try {
      const idUser = user.findIndex(element => element.id == req.params.id);
      user.splice(idUser, 1);
      res.send({
        Users
      });
    } catch (error) {
      res.send({
        message: "error to delete user by id",
        error
      });
    }
  }
};
