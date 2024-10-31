const { busqueda } = require("../helpers/ajax");

/* indice de la pagina */
const getDashboard = (req, res) => {
    res.render('users/dashboard', {

    })
};
/* vista de peliculas */    
const getMovies = (req, res) => {
    res.render('users/favorites', {

    })
};
/* funacion buscar peliculas */
const searchMovies = async (req, res) =>{
    try {
        const url = "user/search";
        const {ok, data, msg} = await busqueda(url);
        res.render('users/movies', {
            ok,
            data,
            msg: 'Peliculas'
        })
    } catch (error) {
        console.log(error)
        throw error  
    }
};

const searchMoviesByTitle = async() =>{
    const url = "user/searchtitle";
    const titleSearch = req.body.busqueda;
    try {
        const { ok, data, msg } = await busqueda(url, 'post', { title: titleSearch });
        console.log(data);
        res.render('users/movies', {
            ok,
            data,
            msg: 'Peliculas'
        });
    } catch (error) {
        console.log(error);
        throw (error);
    }
};



module.exports = {
    getDashboard,
    getMovies,
    searchMovies,
    searchMoviesByTitle
}