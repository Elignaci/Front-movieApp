const fetch= require('node-fetch');


/* fetch('https://back-movie-app-u72s.onrender.com/api/v1')
    .then(res=>res.json())
    .then(json=>console.log(body)) */

const busqueda = async (url, method = 'get', body = {}) => {
    let options = {}

    if (method == 'post' || method == 'put') {
        options = {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            }
        }
    } else if (method == 'get' || method == 'delete') {
        options = {
            method,
        }
    }
    try {
        const respuesta = await fetch(`${process.env.URL_BASE}/${url}`, options)
        console.log('entrando en la base de datos')
        if (respuesta.ok) {
            return await respuesta.json()
        } else {
            throw respuesta.json()
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    busqueda
}

