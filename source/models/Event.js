// source/models/Event.js
import { pool } from '../config/database.js'

const Event = {
    find: async (locationId) => {
        const query = 'SELECT * FROM events WHERE location_id = $1'
        const values = [locationId]
        try {
            const { rows } = await pool.query(query, values)
            return rows
        } catch (error) {
            return error
        }
    },
    findById: async (locationId, eventId) => {
        const query = 'SELECT * FROM events WHERE location_id = $1 AND event_id = $2'
        const values = [locationId, eventId]
        try {
            const { rows } = await pool.query(query, values)
            return rows
        } catch (error) {
            return error
        }
    }
}

export default Event