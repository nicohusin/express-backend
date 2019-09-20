const Users = require("../data/user");

module.exports = {
  getAll: (req, res, next) => {
    res.send({
      data: Users
    });
  },

  postUser: (req, res, next) => {
    try {
      let userId = Users.length;

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
  },
  deleteUserById: (req, res, next) => {
    try {
      const idUser = Users.findIndex(
        element => element.id === parseInt(req.params.id)
      );
      Users.splice(idUser, 1);
      res.send({
        Users
      });
    } catch (error) {
      console.log(error);
      res.send({
        message: "error to delete user by id",
        error
      });
    }
  }
};
