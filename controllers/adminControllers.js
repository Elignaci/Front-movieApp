const { busqueda } = require("../helpers/ajax");

/**
 * 
 * @param {*Object} req donde se almacena el request de la funcion
 * @param {*Object} res donde se alamacena la respuesta de la funcion
 * Nos devuelve el estado de la respuesta
 */

/* buscador de peliculas */
const getAllMovies = async (req, res) => {
    try {
        const url = "admin/movies";
        const { ok, data, msg } = await busqueda(url);
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

/* buscar pelicula por titulo */
const getMovieByTitle = async (req, res) => {
    const url = "admin/search";
    const titleSearch = req.body.busqueda;
    try {
        const { ok, data, msg } = await busqueda(url, 'post', { title: titleSearch });
        console.log(data);
        res.render('admin/search', {
            ok,
            data,
            msg
        });
    } catch (error) {
        console.log(error);
        throw (error);
    }
};

/* vista de crear peliculas */
const viewCreateMovies = async (req, res) => {
    try {
        const url = "admin/genres";
        const genres = await busqueda(url);
        res.render('admin/createMovies', {
            genres
        })
    } catch (error) {
        console.log(error);
        throw (error);
    }
}

/* crear peliculas */
const createMovies = async (req, res) => {
    // cambiar por multer
    req.body.image_url = "ejemplo";
    const body = req.body;
    const url = "admin/createmovie";
    try {
        const respuesta = await busqueda(url, 'post', body);
        console.log(respuesta);
        res.redirect('/admin')
    } catch (error) {
        console.log(error);
        throw (error);
    }
}

/* vista de editar peliculas */
const viewEditMovie =async(req, res) =>{
    const id = req.params.id;
    console.log(id)
    const urlMovie = `admin/movies/${id}`;
    const urlGenre = `admin/genres`;
    try {
        const movie = await busqueda(urlMovie);
        const genres = await busqueda(urlGenre);
        //console.log(data);
        res.render('admin/editMovies', {
            movie,
            genres
        });
    } catch (error) {
        console.log(error)
        throw (error)
    }
};

/* editar peliculas */
const editMovies = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.image_url = " ";
        const url = `admin/editmovie/${id}`;
        await busqueda(url, 'put', body)
        res.redirect('/admin')
    } catch (error) {
        console.log(error)
        throw (error)
    }
}

/* eliminar peliculas */
const deleteMovies = async (req, res) => {
    // cambiar por multer
    try {
        const id = req.params.id;
        console.log(id)
        const url = `admin/removemovie/${id}`;
        const respuesta = await busqueda(url, 'delete');
        //console.log(respuesta);
        res.redirect('/admin')
    } catch (error) {
        console.log(error);
        throw (error);
    }
    /*
    res.render('admin/createmovie',{
        msg:'La pelicula ha sido creada exitosamente'
    })*/
    /* añadir mensaje de confirmacion */
    /*
    return res.status(200).json({
        msg: 'entrando en deletemovies'
    })
        */
    /* solo mensaje arriba dela pagina, y ya */
}
/*
const getAllGenres = async (req, res) => {
    res.render('admin/genres', {
    })
}
const creategenre = async(req, res) =>{
    res.render('admin/create-genres', {
    })
}
*/
module.exports = {
    getAllMovies,
    getMovieByTitle,
    viewCreateMovies,
    createMovies,
    viewEditMovie,
    editMovies,
    deleteMovies
}