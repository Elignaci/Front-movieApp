/* get index */
/* indice de la pagina */
const getDashboard = (req, res) => {
    res.render('users/dashboard', {

    })
}
/* vista de peliculas */    
const getMovies = (req, res) => {
    res.render('users/favorites', {

    })
}
/* funacion buscar peliculas */
const searchMovies = (req, res) =>{
    res.render('users/movies', {

    })
}



module.exports = {
    getDashboard,
    getMovies,
    searchMovies
}