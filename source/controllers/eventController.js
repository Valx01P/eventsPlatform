// source/controllers/eventController.js
import Event from '../models/Event.js'

const eventController = {
    getAllEvents: async (req, res) => {
        try {
            const locationId = req.params.locationId
            const events = await Event.find(locationId)
            res.json(events)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getEvent: async (req, res) => {
        try {
            const locationId = req.params.locationId
            const eventId = req.params.eventId
            const event = await Event.findById(locationId, eventId)
            res.json(event)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export default eventController