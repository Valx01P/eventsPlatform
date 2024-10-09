import { pool } from './database.js'
import locationData from './data/locations.js'
import eventData from './data/events.js'


const initDB = async () => {
    try {
        await resetDB()
        await createDB()
        await seedDB()
        console.log('🥳 Database tables successfully created with sample data')
    } catch (error) {
        console.error('⚠️ Error initializing database', error)
    }
}


const dropEventTableQuery = `
    DROP TABLE IF EXISTS events
`

const dropLocationTableQuery = `
    DROP TABLE IF EXISTS locations
`

const createEventTableQuery = `
    CREATE TABLE events (
        event_id SERIAL PRIMARY KEY,
        location_id INT,
        FOREIGN KEY (location_id) REFERENCES locations(location_id) ON DELETE CASCADE,
        name VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        date DATE NOT NULL,
        time TIME NOT NULL,
        price DECIMAL NOT NULL,
        expired BOOLEAN NOT NULL,
        date_posted DATE NOT NULL
    )
`

const createLocationTableQuery = `
    CREATE TABLE locations (
        location_id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        address VARCHAR(100) NOT NULL,
        city VARCHAR(100) NOT NULL,
        state CHAR(2) NOT NULL
    )
`

const newEventQuery = `
    INSERT INTO events (location_id, name, description, date, time, price, expired, date_posted)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
`

const newLocationQuery = `
    INSERT INTO locations (name, description, address, city, state)
    VALUES ($1, $2, $3, $4, $5)
`

const resetDB = async () => {
    try {
        await pool.query(dropEventTableQuery)
        await pool.query(dropLocationTableQuery)
        console.log('🚧 Database tables dropped')
    } catch (error) {
        console.error('⚠️ Error dropping tables', error)
    }
}

const createDB = async () => {
    try {
        await pool.query(createLocationTableQuery)
        await pool.query(createEventTableQuery)
        console.log('🏗️ Database tables created')
    } catch (error) {
        console.error('⚠️ Error creating tables', error)
    }
}

const seedDB = async () => {
    try {
        locationData.forEach(async location => {
            await pool.query(newLocationQuery, [location.name, location.description, location.address, location.city, location.state])
            console.log(`📌 ${location.name} added successfully`)
        })
        eventData.forEach(async event => {
            await pool.query(newEventQuery, [event.locationId, event.name, event.description, event.date, event.time, event.price, event.expired, event.datePosted])
            console.log(`🍿 ${location.name} added successfully`)
        })
        console.log('🎉 Database successfully seeded with sample data')

    } catch (error) {
        console.error('⚠️ Error seeding database', error)
    }
}

initDB()