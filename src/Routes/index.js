const express = require('express');
const userRoute = require('./UserRoute');
const router = express.Router();

userRoute(router);

module.exports = router;