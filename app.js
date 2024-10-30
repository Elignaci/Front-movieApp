const express = require('express')
require ('dotenv').config()
const port = process.env.PORT
const cors = require('cors')

/* EXPRESS */
const app=express()

/* CORS */
app.use(cors())

/* EJS */
app.set('view engine', 'ejs')
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())


/* PUBLIC VIEWS */
app.use(express.static(__dirname + "/public"));

/* RUTAS */
app.use('/', require ('./routers/adminRouters'))
app.use('/', require('./routers/publicRouters'))



app.listen(port,()=>{
    console.log(`server on port ${port}`)
})




