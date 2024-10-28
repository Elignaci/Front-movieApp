const express = require('express')
require ('dotenv').config()
const port = process.env.PORT || 3000; 
const cors = require('cors')

/* EXPRESS */
const app=express()

/* CORS */
app.use(cors())

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




