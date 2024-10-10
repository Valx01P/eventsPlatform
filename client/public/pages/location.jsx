import LocationInfoHero from '../components/LocationInfoHero'
import EventList from '../components/EventList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Location = () => {
  const { locationId } = useParams()
  const [events, setEvents] = useState([])
  const [locationDetails, setLocationDetails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [locationResponse, eventsResponse] = await Promise.all([
          fetch(`http://localhost:3000/locations/${locationId}`),
          fetch(`http://localhost:3000/locations/${locationId}/events`)
        ])
        
        const locationData = await locationResponse.json()
        const eventsData = await eventsResponse.json()
        
        console.log(locationData)
        console.log(eventsData)
        setLocationDetails(locationData)
        setEvents(eventsData)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [locationId])

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>
  }

  return (
    <div className="space-y-8">
      {<LocationInfoHero locationDetails={locationDetails} />}
      <EventList events={events} />
    </div>
  )
}

export default Location