import express from 'express'
import eventController from '../controllers/eventController.js'
const router = express.Router()

// base route: /locations/:locationId/events

// GET / get all events from a location
router.route('/')
    .get(eventController.getAllEvents)

// GET / get a specific event from a location
router.route('/:eventId')
    .get(eventController.getEvent)