import EventInfoHero from '../components/EventInfoHero';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Event = () => {
  const { eventId, locationId } = useParams()
  const [eventDetails, setEventDetails] = useState({})
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
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/locations/${locationId}/events/${eventId}`)
        const data = await response.json()
        setEventDetails(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchLocationDetails()
    fetchEventDetails()
  }, [eventId, locationId])

  return (
    <div>
      <EventInfoHero eventDetails={eventDetails} locationDetails={locationDetails} />
    </div>
  )
}

export default Event