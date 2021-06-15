"use strict";
const express = require("express");
const router = express.Router();
const loginController = require("../app/modules/controllers/login");

router.post('/login', loginController.login);
router.post('/addedituser', loginController.AddEditUser);
module.exports = router;