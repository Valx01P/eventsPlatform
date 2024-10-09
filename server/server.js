import express from 'express'
import locationRoutes from './routes/locationRoutes.js'
import eventRoutes from './routes/eventRoutes.js'
import cors from 'cors'

const yo = process.env.BRUV

const app = express()


app.use(cors())

app.use('/locations', locationRoutes)
app.use('/locations/:locationId/events', eventRoutes)


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})