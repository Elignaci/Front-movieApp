const { busqueda } = require("../helpers/ajax");


/**
 * 
 * @param {*Object} req donde se almacena el request de la funcion
 * @param {*Object} res donde se alamacena la respuesta de la funcion
 * Nos devuelve el estado de la respuesta
 */

/* buscador de peliculas */
const getAllMovies = async (req, res) => {
    const url = "admin/movies";
    try {
        const { ok, data, msg } = await busqueda(url)
        console.log(data)
        res.render('admin/movies', {
            ok,
            data,
            msg: 'Peliculas'
        })

    } catch (error) {
        console.log(error)
        throw (error)
    }

}
/* buscar pelicula por titulo */
const getMovieByTitle = async (req, res) => {
    const url = "admin/movies";
    try {
        const { ok, data, msg } = await busqueda(url)
        console.log(data)
        res.render('admin/movies', {
            ok,
            data,
            msg: 'Peliculas'
        })

    } catch (error) {
        console.log(error)
        throw (error)
    }
};
/* vista de crear peliculas */
const viewCreateMovies = async (req, res) => {
    res.render('admin/createMovies', {})
}
/* crear peliculas */
const createMovies = async (req, res) => {
    const body = req.body;
    console.log(body)
    const url = "admin/createmovie";
    try {
        const respuesta = await busqueda(url,'post',body)
        console.log(respuesta)

    } catch (error) {
        console.log(error)
        throw (error)
    }
    res.redirect('create-movies')
    res.render(admin/createmovie,{
        msg:'La pelicula ha sido creada exitosamente'
    })
    /* añadir mensaje de confirmacion */
}
/* editar peliculas */
const editMovies = async (req, res) => {
    const body = req.body;
    const url = "admin/editmovie";
    try {
        const respuesta = await busqueda(url,'post',body)
        console.log(respuesta)

    } catch (error) {
        console.log(error)
        throw (error)
    }
    res.redirect('edit-movie')
}
/* vista de editar peliculas */
const viewEditMovie =async(req, res) =>{
    res.render('admin/editMovies', {})
}
/* eliminar peliculas */
const deleteMovies = async (req, res) => {
    return res.status(200).json({
        msg: 'entrando en deletemovies'
    })
    /* solo mensaje arriba dela pagina, y ya */
}

module.exports = {

    getAllMovies,
    getMovieByTitle,
    createMovies,
    editMovies,
    deleteMovies,
    viewCreateMovies,
    viewEditMovie,
    
}