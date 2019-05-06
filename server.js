const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;
const mongoose= require('mongoose')
const usearsRoutes = require('./routes/users')

//allow other to acssess
const cors = require('cors')
app.use(cors())
app.use(express.json())


mongoose.connect(URL, {useNewUrlParser: true})
.then(()=>{console.log("mongoose is running")},
(error) =>{console.log(error)}
)
app.use('/user' , usearsRoutes)

//listen on port
app.listen(PORT, () => console.log(`active on ${PORT}`))