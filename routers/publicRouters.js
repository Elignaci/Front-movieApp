const express = require('express');
const router = express.Router()

const {getIndex}= require('../controllers/publicControllers')

/* get index */
router.get('/',getIndex)



module.exports = router;