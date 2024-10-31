const express = require('express');
const router = express.Router()

const {
    getDashboard,
    getMovies,
    searchMovies
    
    }= require('../controllers/publicControllers')

/* get index */
router.get('/dashboard',getDashboard)
router.get('/movies',getMovies)
router.get('/search',searchMovies)



module.exports = router;