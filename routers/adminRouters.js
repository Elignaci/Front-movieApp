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
        editMovies,
        deleteMovies,
        viewEditMovie,
        

     } = require('../controllers/adminControllers')

/* get Admin*/

router.get('/', getAllMovies)
router.get('/movies/:title', getMovieByTitle)
router.get('/create-movies', viewCreateMovies)
router.post('/new', createMovies)
router.put('/edit-movie/:id', editMovies)
router.get('/edit',viewEditMovie)
router.delete('/delete-movies/:id', deleteMovies)




module.exports = router;