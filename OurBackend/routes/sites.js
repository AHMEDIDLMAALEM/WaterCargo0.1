var express = require('express');
var router = express.Router();
const {getAllSites, getSiteById, createSite, updateSite, deleteSite} = require('../Models/site.js')
/* GET sites listing. */
router.all('/', function(req, res, next) {
  // get all sites
  getAllSites().then(sites => {
    res.json(sites)
  })
});
// the edit route
router.get('/:id()', function(req, res, next) {
  // get site by id
  getSiteById(req.params.id).then(site => {
    res.json(site)
  })
});
router.all('/delete/:id()', function(req, res, next) {
  // delete site by id
  deleteSite(req.params.id).then(site => {
    res.json(site)
  })
});
router.post('/create', function(req, res, next) {
  // create site
  createSite(req.body).then(site => {
    res.json(site)
  })
});
router.put('/update/:id()', function(req, res, next) {
  // update site by id
  updateSite(req.params.id, req.body).then(site => {
    res.json(site)
  })
});