const express = require("express");
const router = express.Router();
const {getAll, PostUser, deleteUserById};

router.get("/", getAll);

router.post("/", PostUser);

router.delete("/:id", deleteUserById);

module.exports = router;
