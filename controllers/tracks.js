const express = require('express')
const router = express.Router()
const Track = require('../models/track')

router.post('/tracks', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


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