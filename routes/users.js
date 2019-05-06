const express = require('express')
const router = express.Router()
const User = require('../models/user');

router.get('/', (req, res) => {
  
  User.find()
    .then((users) => {
      res.send({users})
    }).catch(err => console.log(err))
})

//POST
router.post('/', (req, res) => {

  let data = {
    username: req.body.username,
    email: req.body.email,
    name : req.body.name, 
    //telephone : req.body.telephone,
  }

  let user = new User(data)
  user.save()
    .then(() => {
      res.send({message : "added!", user})
    //   res.redirect('/fsers')
    }).catch(err => console.log(err))


})

//SHOW
router.get('/:indexOfFsersArray', (req, res) => {
  User.findById(req.params.indexOfUsersArray)
    .then((user) => {
      res.render('show', {
        fser: fser
      })
    })
})

//EDIT
router.get('/:indexOfFsersArray/edit', (req, res) => {
  User.findById(req.params.indexOfusersArray)
    .then(user => {
      res.render('edit', {
        user
      })
    })
})

//DELETE
router.delete('/:indexOfUsersArray', (req, res) => {
  User.findByIdAndDelete(req.params.indexOfUsersArray)
    .then(() => {
      res.redirect('/users');
    })
})

//PUT
router.put('/:indexOfUsersArray', (req, res) => {
  let updateduser = req.body


  User.findByIdAndUpdate(req.params.indexOfUsersArray)
    .then(fser => {
      res.redirect(`/users/${user._id}`);
    })
})

module.exports = router