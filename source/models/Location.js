// source/models/Location.js
import { pool } from '../config/database.js'

const Location = {
    find: async () => {
        const query = 'SELECT * FROM locations'
        try {
            const { rows } = await pool.query(query)
            return rows
        } catch (error) {
            return error
        }
    },
    findById: async (locationId) => {
        const query = 'SELECT * FROM locations WHERE location_id = $1'
        const values = [locationId]
        try {
            const { rows } = await pool.query(query, values)
            return rows
        } catch (error) {
            return error
        }
    }
}

export default Location