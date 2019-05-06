const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const tweet = 
// const tweet = require('../models/fruit').Fruit;
const tweetsSchema  =require('./tweet').tweetsSchema;


const userSchema = new Schema({
    username: String,
    passwoord: Number,
    name: String,
    email: String,
    telephone: Number,
    tweet: [tweetsSchema]
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User;