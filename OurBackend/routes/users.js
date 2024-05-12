var express = require('express');
var router = express.Router();
const {getAllUsers, getUserById, createUser, updateUser, deleteUser} = require('../Models/users.js')

/* GET users listing. */
router.all('/', function(req, res, next) {
  // get all users
  getAllUsers().then(users => {
    res.json(users)
  })
});

// the edit route
router.get('/:id()', function(req, res, next) {
  // get user by id
  getUserById(req.params.id).then(user => {
    res.json(user)
  })
});
router.all('/delete/:id()', function(req, res, next) {
  // delete user by id
  deleteUser(req.params.id).then(user => {
    res.json(user)
  })
});
router.

router.post('/create', function(req, res, next) {
  // create user
  createUser(req.body).then(user => {
    res.json(user)
  })
});

router.put('/update/:id()', function(req, res, next) {
  // update user by id
  updateUser(req.params.id, req.body).then(user => {
    res.json(user)
  })
});


module.exports = router;
