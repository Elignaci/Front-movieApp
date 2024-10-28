
const { consulta } = require("../helpers/ajax");


/* get Admin */
const getAdmin = (req, res) => {
    res.render('admin/movies', {
    })
}
/**
 * 
 * @param {*Object} req donde se almacena el request de la funcion
 * @param {*Object} res donde se alamacena la respuesta de la funcion
 * Nos devuelve el estado de la respuesta
 */

const getAllMovies = async (req, res) => {
    const url = "movies";
    try {
        const { ok, data, msg } = await consulta(url)
        res.render('admin/movies', {
            ok,
            data,
            msg: 'Peliculas'
        })

    } catch (error) {
        throw (error)
    }

}

const getMovieByTitle = async (req, res) => {
        const title = req.query.title;
        if (!title) {
            return res.status(400).send('Se debe proporcionar un título de película.');
        }

        const url = 'movies';

        try {
            const { ok, data, msg } = await consulta(url);


            if (!ok) {
                return res.status(404).send('No se encontraron películas');
            }

            res.render('admin/movies', {
                ok,
                data,
                msg: 'Resultados de búsqueda para: ' + title
            });

        } catch (error) {
            res.status(500).send('Error al buscar la película');
        }
    };

const createMovies = async (req, res) => {
    const { pelicula, año, director, genero, duracion } = req.body
    const body = {
        pelicula, año, director, genero, duracion
    }
    try {
        await consulta('movies', 'post', body)

    } catch (error) {
        console.log(error)
    }
    res.redirect('/admin/movies')
}

const updateMovies = async (req, res) => {
    try {
        const movies = await consulta.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        console.log(movies)
        if (!movies) {
            return res.status(404).json({
                msg: "pelicula no encontrada",

            })
        }
        res.status(200).json({
            ok: true,
            msg: "La pelicula ha sido modificada",
            movies
        })

    } catch (error) {
        throw (error)

    }
}

const deleteMovies = async (req, res) => {
    try {
        const deleteMovies = await consulta.findByIdAndDelete(id);
        if (!deleteMovies) {
            return res.status(404).json({
                ok: false,
                msg: 'pelicula no encontrada'
            });
        }
        res.status(200).json({
            ok: true,
            msg: 'pelicula eliminada correctamente',
            deleteMovies,
        });
    } catch (error) {
        throw (error)

    }
}

module.exports = { getAdmin, getAllMovies, getMovieByTitle, createMovies, updateMovies, deleteMovies }