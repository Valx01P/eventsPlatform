import EventInfoHero from '../components/EventInfoHero';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Event = () => {
  const { eventId, locationId } = useParams()
  const [eventDetails, setEventDetails] = useState([])
  const [locationDetails, setLocationDetails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [locationResponse, eventResponse] = await Promise.all([
          fetch(`http://localhost:3000/locations/${locationId}`),
          fetch(`http://localhost:3000/locations/${locationId}/events/${eventId}`)
        ])
        
        const locationData = await locationResponse.json()
        const eventData = await eventResponse.json()
        
        setLocationDetails(locationData)
        setEventDetails(eventData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [eventId, locationId])

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>
  }

  if (!eventDetails || !locationDetails) {
    return <div className="text-center mt-8">Event or location details not found.</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <EventInfoHero eventDetails={eventDetails} locationDetails={locationDetails} />
    </div>
  )
}

export default Event