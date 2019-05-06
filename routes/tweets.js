const express = require('express');
const router = express.Router()
// const Smoothie = require('../models/smoothie');
const Tweet = require('../models/tweet');

//INDEX
router.get('/', (req, res) => {
  
    Tweet.find()
    .then((tweets)=>{
        res.send({ tweets })
      //res.render('index', { tweets })
    }).catch(err => console.log(err))
  
  })
  //POST NEW tweet
  router.post('/', (req, res) => {
  
    let data = {
      body: req.body.body, 
      by_user: req.body.by_user
    }
    let tweet = new Tweet(data)
    tweet.save()
    .then(()=> {
        res.send(tweet)
      //res.redirect('/tweets')
    }).catch(err => console.log(err))
  })
  
  //SHOW
  router.get('/:indexOfTweetsArray', (req, res) => {
    Tweet.findById(req.params.indexOfTweetsArray)
    .then((tweet)=>{
      res.send({tweet: tweet})
    })
  })

  //DELETE
  router.delete('/:indexOfTweetsArray', (req, res) => {
    Tweet.findByIdAndDelete(req.params.indexOfTweetsArray)
      .then(() => {
          res.send("deleted")
        //res.redirect('/Tweets');
      })
  })

  module.exports = router;