/* get index */
/* indice de la pagina */
const getDashboard = (req, res) => {
    res.render('users/dashboard', {

    })
}
/* vista de peliculas */    
const getMovies = (req, res) => {
    res.render('users/movies', {

    })
}
/* funacion buscar peliculas */
const searchMovies = (req, res) =>{
    res.render('users/searchtitle', {

    })
}
/* peliculas favoritas */
const getMyMovies = (req, res) => {
    res.render('users/my-movies', {

    })
}
/* vista de una sola peliculas(individual) */
const getSingleMovies = (req, res) => {
    res.render('user/searchtitle', {

    })
}



module.exports = {
    getDashboard,
    getMovies,
    getMyMovies,
    getSingleMovies,
    searchMovies
}