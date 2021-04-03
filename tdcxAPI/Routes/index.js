const express = require('express');
const router = express.Router()

const myapp = require('./myapp')

router.use('/myapp', myapp)



module.exports = router