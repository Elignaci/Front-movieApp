const express = require('express');
const router = express.Router()

const {
    getDashboard,
    getMovies,
    searchMovies,
    searchMoviesByTitle
    
    }= require('../controllers/publicControllers');


/* get index */
router.get('/dashboard', getDashboard);
router.get('/movies', getMovies);
router.get('/search', searchMovies);
router.post('/searchtitle', searchMoviesByTitle);



module.exports = router;