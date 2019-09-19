const express = require("express");
const router = express.Router();
const user = require("../data/user");

router.get("/", (req, res, next) => {
  res.send({
    data: user
  });
});

router.post("/", (req, res, next) => {
  let userId = user.length;

  user.push({
    id: userId + 1,
    name: req.body.name
  });
  res.send({
    data: user
  });
});

router.delete("/:id", (req, res, next) => {
  const idUser = user.findIndex(element => element.id == req.params.id);
  user.splice(idUser, 1);
  res.send({
    user
  });
});

module.exports = router;
