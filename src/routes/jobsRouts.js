const express = require('express');
const jobController = require('../controllers/jobController');
const router = express.Router();

router.route('/').get(jobController.findJobs);
router.route('/industries').get(jobController.getIndustries);
router.route('/companys').get(jobController.getCompanys);
router.route('/locations').get(jobController.getLocations);


module.exports = router;