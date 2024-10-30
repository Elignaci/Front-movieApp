const express = require('express');
const router = express.Router()

const {
    getDashboard,
    getMovies,
    getMyMovies,
    getSingleMovies,
    searchMovies
    
    }= require('../controllers/publicControllers')

/* get index */
router.get('/dashboard',getDashboard)
router.get('/movies',getMovies)
router.get('/search',searchMovies)
router.get('/my-movies',getMyMovies)
router.get('/movies',getSingleMovies)


module.exports = router;