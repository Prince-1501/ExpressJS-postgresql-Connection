const express  = require('express');
const router = express.Router();
const todoRoute  = require('./todo');
const rootRouter = require("./todo");

router.use('/',rootRouter)
router.use('/todo',todoRoute);


module.exports = router;

// It look like localhost:3000/api/todo
// Now include this in main index.js
