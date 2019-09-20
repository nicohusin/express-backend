const express = require("express");
const router = express.Router();
const userController = require('./indexControllers');

router.get("/", userController.getAll);

router.post("/", userController.postUser);

router.delete("/:id", userController.deleteUserById);

module.exports = router;
