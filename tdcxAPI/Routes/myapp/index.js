const express = require('express');
const router = express.Router();

const signup = require('./registration');
const alltasks = require('./allTask')
const login = require('./login');
const task = require('./createTask')
const edit = require('./editeTask')
const deletetask = require("./deleteTask")


router.get('/task', alltasks)
router.post('/login', login)
router.post('/signup', signup)
router.post('/task', task)
router.put("/task/:id", edit)
router.delete('/task/:id', deletetask)


module.exports = router;