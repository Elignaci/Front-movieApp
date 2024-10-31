const express = require('express')
require('dotenv').config();
const cors = require('cors');

/* EXPRESS */
const app = express()
const port = process.env.PORT;

/* CORS */
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

/* EJS */
app.set('view engine', 'ejs')


/* PUBLIC VIEWS */
app.use(express.static(__dirname + "/public"));

/* RUTAS */
app.use('/admin', require ('./routers/adminRouters'))
app.use('/', require('./routers/publicRouters'))



app.listen(port,()=>{
    console.log(`server on port ${port}`)
})





