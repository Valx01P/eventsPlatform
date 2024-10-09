// source/controllers/locationController.js
import Location from '../models/Location.js'

const locationController = {
    getAllLocations: async (req, res) => {
        try {
            const locations = await Location.find()
            res.json(locations)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getLocation: async (req, res) => {
        try {
            const locationId = req.params.locationId
            const location = await Location.findById(locationId)
            res.json(location)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export default locationController