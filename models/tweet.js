const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tweetSchema = new Schema({
    body: { type: String, required: true , maxlength: 180 },
    by_user: { type: String, required: true },
    fav_by: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true })

const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet