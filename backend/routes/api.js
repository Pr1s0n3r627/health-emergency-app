const express = require('express');
const Reading = require('../models/Reading');
const router = express.Router();

// Get readings
router.get('/readings', async (req, res) => {
  const readings = await Reading.find();
  res.json(readings);
});

// Add new reading
router.post('/readings', async (req, res) => {
  const { bp, sugar } = req.body;
  const reading = new Reading({ date: new Date().toISOString(), bp, sugar });
  await reading.save();
  res.json({ message: 'Reading saved' });
});

// Emergency mock route
router.post('/emergency', (req, res) => {
  res.json({ tips: 'Stay calm. Get to a hospital.' });
});

module.exports = router;
