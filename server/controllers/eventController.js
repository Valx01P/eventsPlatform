import Event from '../models/eventModel.js'

const eventController = {
    getAllEvents: async (req, res) => {
        try {
            const events = await Event.find({ location: req.params.locationId })
            res.json(events)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getEvent: async (req, res) => {
        try {
            const event = await Event.findById(req.params.eventId)
            res.json(event)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export default eventController