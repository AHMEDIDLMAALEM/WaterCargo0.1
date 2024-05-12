var express = require('express');
var router = express.Router();
const {getAllCiteWaterReserves, getWaterReserve, WaterReserve, updateWaterReserve, deleteWaterReserve} = require('../Models/waterreserve.js')

/* GET waterreserves listing. */

// the get all waterreserves by cite id route
router.get('/:id()', function(req, res, next) {
  // get all waterreserves by cite id
  getAllCiteWaterReserves(req.params.id).then(waterreserves => {
    res.json(waterreserves)
  })
});
// get waterreserve by id
router.get('/:id()', function(req, res, next) {
  // get waterreserve by id
  getWaterReserve(req.params.id).then(waterreserve => {
    res.json(waterreserve)
  })
});
// delete waterreserve by id
router.all('/delete/:id()', function(req, res, next) {
  // delete waterreserve by id
  deleteWaterReserve(req.params.id).then(waterreserve => {
    res.json(waterreserve)
  })
});
// create waterreserve
router.post('/create', function(req, res, next) {
  // create waterreserve
  WaterReserve(req.body).then(waterreserve => {
    res.json(waterreserve)
  })
});
// update waterreserve
router.put('/update/:id()', function(req, res, next) {
  // update waterreserve by id
  updateWaterReserve(req.params.id, req.body).then(waterreserve => {
    res.json(waterreserve)
  })
});
