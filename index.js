require('dotenv').config()
const express  = require('express');
const apiRoute = require('./routes/api/index');
const bodyParser = require('body-parser');
const routes = require('./routes/routes')

const mongoose = require('mongoose')
const URI = require('./config/keys').mongoURI

// Mongo connection
const connection = mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to mongodb atlas"))
.catch((err)=>console.log(err))

const app = express();
const PORT  = process.env.PORT || 8000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// routes
app.get("/",routes.index)
app.use('/api', apiRoute);


app.listen(PORT,()=>console.log(`Server listening at port ${PORT}`))

