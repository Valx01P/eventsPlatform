import Location from '../models/locationModel.js'

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
            const location = await Location.findById(req.params.locationId)
            res.json(location)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export default locationController