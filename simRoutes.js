const express = require('express');
const router = express.Router();
const { activateSim, deactivateSim, getSimDetails } = require('../controllers/simController');

router.post('/activate', activateSim);
router.post('/deactivate', deactivateSim);
router.get('/sim-details/:simNumber', getSimDetails);

module.exports = router;
