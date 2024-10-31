# Proyecto de desarrollo web de aplicacion MobileAPP
## Índice
*[Descripción del proyecto][1](#descripción-del-proyecto)
*[Estado del proyecto][2](#Estado-del-proyecto)
*[Características de la aplicación y demostración][3](#Características-de-la-aplicación-y-demostración)
*[Funciones][4](#Funciones)
*[Requisitos][5](#Requisitos)
*[Tecnologia][6](#Tecnologia)
*[Personas Desarrolladoras][7](#Personas-Desarrolladoras)
* [1] Este es un proyecto de hecho por alumnos de desarrollo web del curso Neoland. En el, se ha pusesto en practica los conocimientos aprendidos para desarrollar una aplicacion web que se encarga de buscar  peliculas
* [2] El proyecto es una demo que se encarga de buscar peliculas por medio del consumo de una Api.
La aplicacion puede accederse por medio de una pagina de registro.
Contara principalmente con una vista publica donde habra una pagina de registro para igresar el mail y la contraseña.Una vez ingresado los datos se podra acceder a las vistas usuario y/o administrador
El usuario puede buscar peliculas por su nombre y guardarlas en una carpeta personal como favoritos.
El administrador puede ademas de buscar peliculas,tambien podra crearlas y editarlas transformando la info de cada una de ellas: director, titulo, año, genero, duracion y imagen representativa.
* [3] La aplicacion cuenta con dos partes. La vista Backend donde se accede a la Api externa para modificar la informacion de las peliculas.
Y luego esta el Frontend para consumir la Api y sacar las vistas de al App.
* [4] Hemos utilizado una serie de funciones por medio de los Endpoints en los requisitos que se pedian en el enunciado del proyecto:
-[GET] / Vista de inicio de la app
-[GET] /dashboard Panel de control
-[GET] /search/:title Vista detalle de la película
-[GET] /search Buscador de películas
-[GET] /movies Mis películas
-[POST] /signup Registrarse en la aplicación
-[POST] /login Hacer login en la aplicación
-[POST] /logout Salir
-[POST] /createMovie Crear película
-[PUT] /editMovie/:id Editar película
-[DELETE] /removeMovie Borrar película
-[GET] /recoverpassword Recuperar password
-[GET] /restorepassword Cambiar password
Por ello hemos creado unas funcione para ejecutar los distintos endpoints.
Vista Admin
getAllMovies buscador de peliculas
getMovieByTitle buscar pelicula por titulo
viewCreateMovies vista de crear peliculas
createMovies crear peliculas
viewEditMovie vista de editar peliculas
editMovies editar peliculas
deleteMovies eliminar peliculas
Vista User
getDashboard indice de la pagina
getMovies vista de peliculas
searchMovies funacion buscar peliculas
* [5] Para los requisitos hemos utilizado un diagrama para planficar las ventanas que tendra la aplicacion dependiaendo si es admin o users.
Gracias a esta informacion hemos podido desarrollar con mejor claridad cada una de las carpetas que tendra al App
Controladores, rutas, conexiones, vistas, helpers, middlewares, etc.
Ademas de todas las instalaciones en la tecnologia utilizada.
* [6]Tecnologia utilizada:
Lenguajes: JavaScript, Html.
Herramientas: Node.js, Oauth, JWT.
Componentes: Ejs, Express, Express-validator, Dotenv, Cors, Multer.
* [7]Personas Desarrolladoras:
-Elias Benitez(EliasBM98)
-Steven Arce Arebalo(stevlabs)
-Ignacio Garcia-Bonacho Dominguez(Elignaci)