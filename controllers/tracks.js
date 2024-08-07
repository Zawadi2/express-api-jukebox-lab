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

//update a specific track 
router.put('/:trackId', async (req, res) => {
    try {
        const trackTOBeUpdated = await Track.findByIdAndUpdate(req.params.trackId, 
                                    {title: req.body.title, artist: req.body.artist},
                                    {new: true});
        res.json({ message: "Successfully updated track.", trackTOBeUpdated});
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

//delete 
router.delete('/:trackId', async (req, res) => {
    try {
        const deletedTrack = await Track.findByIdAndDelete(req.params.trackId);
        res.status(200).json({ message: 'Successfully deleted track.', deletedTrack})
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
})

module.exports = router;
