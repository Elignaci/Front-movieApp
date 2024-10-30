const express = require('express');
const router = express.Router()

const {
    getIndex,
    getMovies,
    getMyMovies,
    getSingleMovies
    
    }= require('../controllers/publicControllers')

/* get index */
router.get('/',getIndex)
router.get('/movies',getMovies)
router.get('/my-movies',getMyMovies)
router.get('/movies',getSingleMovies)


module.exports = router;