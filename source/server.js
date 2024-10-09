// source/server.js
import express from 'express'
// remember in 'type': 'module' in package.json, we need to add .js to the end of the imported file name
import locationRoutes from './routes/locationRoutes.js'
import eventRoutes from './routes/eventRoutes.js'
import cors from 'cors'

const app = express()

app.use(cors())

// location routes
app.use('/locations', locationRoutes)

// event routes
app.use('/locations/:locationId/events', eventRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})