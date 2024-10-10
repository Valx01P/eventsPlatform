import LocationInfoHero from '../components/LocationInfoHero'
import EventList from '../components/EventList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Locations = () => {
  const { locationId } = useParams()
  const [events, setEvents] = useState([])
  const [locationDetails, setLocationDetails] = useState({})

  useEffect(() => {
    const fetchLocationDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/locations/${locationId}`)
        const data = await response.json()
        setLocationDetails(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    const fetchEvents = async () => {
      try {
        const response = await fetch(`http://localhost:3000/locations/${locationId}/events`)
        const data = await response.json()
        setEvents(data)
        console.log(data)  
      } catch (error) {
        console.error(error)
      }
    }
    fetchLocationDetails()
    fetchEvents()
  }, [locationId])

  return (
    <div>
      <LocationInfoHero locationDetails={locationDetails} />
      <EventList events={events} />
    </div>
  )
}

export default Locations