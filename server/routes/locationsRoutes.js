import express from 'express'
import locationController from '../controllers/locationController.js'
const router = express.Router()

// base route: /locations

// GET / get all locations
router.route('/')
    .get(locationController.getAllLocations)

// GET / get a specific location
router.route('/:locationId')
    .get(locationController.getLocation)