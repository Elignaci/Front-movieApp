/**Importacion de expressy  validacion de las rutas 
 * 
 */
const express = require('express');
const router = express.Router()

/**
 * Ruta de las funaciones de admin
 */
const { 
        getAllMovies,
        getMovieByTitle,
        viewCreateMovies,
        createMovies,
        viewEditMovie,
        editMovies,
        deleteMovies
     } = require('../controllers/adminControllers')

/* get Admin*/

router.get('/', getAllMovies);
router.post('/search', getMovieByTitle);
router.get('/create-movies', viewCreateMovies)
router.post('/new', createMovies)
router.get('/edit/:id', viewEditMovie)
router.put('/edit-movie/:id', editMovies)
router.post('/delete-movies/:id', deleteMovies)

//router.get('/movies/:title', getMovieByTitle)
//router.get('/create-movies', viewCreateMovies)
//router.post('/new', createMovies)

//router.get('/edit',viewEditMovie)

//router.get('/genres', getAllGenres)
//router.post('/create-genre',creategenre)
//router.get('/search', getMovieByTitle)

module.exports = router;