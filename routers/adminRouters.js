const express = require('express');
const router = express.Router()

const {getAdmin}= require('../controllers/adminControllers')

/* get Admin*/
router.get('/admin',getAdmin)


module.exports = router;