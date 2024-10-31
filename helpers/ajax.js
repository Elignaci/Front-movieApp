const fetch= require('node-fetch');

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
            method
        }
    }
    try {
        console.log(options);
        console.log(`${process.env.URL_BASE}/${url}`);
        const respuesta = await fetch(`${process.env.URL_BASE}/${url}`, options)
        console.log('entrando en la base de datos')
        if (respuesta.ok) {
            return await respuesta.json()
        } else {
            const errorResponse = await respuesta.json();
            throw new Error(`Error ${respuesta.status}: ${JSON.stringify(errorResponse)}`);
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

module.exports = {
    busqueda
}

