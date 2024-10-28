const express = require('express');
const router = express.Router()

const { getAdmin,
        getAllMovies,
        getMovieByTitle,
        createMovies,
        updateMovies,
        deleteMovies
     } = require('../controllers/adminControllers')

/* get Admin*/
router.get('/admin', getAdmin)
router.get('/admin/movies', getAllMovies)
router.get('/admin/movies', getMovieByTitle)
router.post('/admin/createMovies', createMovies)
router.put('/admin/editMovies', updateMovies)
router.delete('/admin/editMovies', deleteMovies)



module.exports = router;