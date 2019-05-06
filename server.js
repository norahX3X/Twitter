const express = require('express');
require('dotenv').config()
const app = express();
//get port 
const PORT = process.env.PORT;

const methodOverride = require('method-override')
const mongoose= require('mongoose')
const ejs = require('ejs');
// get routs 
const tweetRouts = require('./routes/tweets');

//allow other to acssess
const cors = require('cors')
app.use(cors())
//post man instad of ejs
app.use(express.json())
mongoose.connect('mongodb://localhost/tweets', {useNewUrlParser: true})
.then(()=>{console.log("mongoose is running")},
(error) =>{console.log(error)}
)
//for rendering
app.set('view engine', 'ejs');
mongoose.set('useCreateIndex', true);
//true for embaded ojects in schema/db 
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
//use routs 
app.use('/tweets', tweetRouts);
//listen to port
app.listen(PORT, () => console.log(`active on ${PORT}`))