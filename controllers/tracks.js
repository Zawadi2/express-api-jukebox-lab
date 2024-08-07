const express = require('express')
const router = express.Router()
const Track = require('../models/track')

router.post('/', async (req, res) => {
    try {
        const track = await Track.create({
            title: req.body.title,
            artist: req.body.artist
        })
        res.status(201).json({ track })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const tracks = await Track.find()
        res.status(200).json({ tracks })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get a single track
router.get('/tracks/:id', async (req, res) => {
    try {
      const track = await Track.findById(req.params.id);
      if (!track) {
        res.status(404).json({ message: 'Track not found' });
      } else {
        res.status(200).json(track);
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

module.exports = router;

