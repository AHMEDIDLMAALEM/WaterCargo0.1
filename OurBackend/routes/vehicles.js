var express = require('express');
var router = express.Router();
const {getAllUserVehicule,getVehicleById, createVehicle, updateVehicle, deleteVehicle} = require('../Models/vehicule.js')

/* GET vehicles listing. */

// the get all vehicules by user id route
router.get('/:id()', function(req, res, next) {
  // get all vehicules by user id
  getAllUserVehicule(req.params.id).then(vehicules => {
    res.json(vehicules)
  })
});
// get vehicle by id
router.get('/:id()', function(req, res, next) {
  // get vehicle by id
  getVehicleById(req.params.id).then(vehicle => {
    res.json(vehicle)
  })
});
// delete vehicle by id
router.all('/delete/:id()', function(req, res, next) {
  // delete vehicle by id
  deleteVehicle(req.params.id).then(vehicle => {
    res.json(vehicle)
  })
});
// create vehicle
router.post('/create', function(req, res, next) {
  // create vehicle
  createVehicle(req.body).then(vehicle => {
    res.json(vehicle)
  })
});
// update vehicle
router.put('/update/:id()', function(req, res, next) {
  // update vehicle by id
  updateVehicle(req.params.id, req.body).then(vehicle => {
    res.json(vehicle)
  })
});



module.exports = router;
