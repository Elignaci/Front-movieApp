/* get index */
const getIndex = (req, res) => {
    res.render('users/index', {

    })
}
    
const getMovies = (req, res) => {
    res.render('users/movies', {

    })
}

const getMyMovies = (req, res) => {
    res.render('users/my-movies', {

    })
}

const getSingleMovies = (req, res) => {
    res.render('users/singlemovie', {

    })
}



module.exports = {
    getIndex,
    getMovies,
    getMyMovies,
    getSingleMovies
}