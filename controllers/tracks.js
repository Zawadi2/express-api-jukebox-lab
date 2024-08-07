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

module.exports = router;