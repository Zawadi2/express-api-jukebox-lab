const express = require('express')
const router = express.Router()
const Track = require('../models/track')

router.post('/tracks', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})