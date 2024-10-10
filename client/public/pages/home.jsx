import LocationList from "../components/LocationList"
import Hero from "../components/Hero"
import { useEffect, useState } from 'react'

const Home = () => {
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true)
      try {
        const response = await fetch(`http://localhost:3000/locations/`)
        const data = await response.json()
        setLocations(data)
        setLoading(false)
        console.log(data)  
      } catch (error) {
        console.error(error)
      }
    }
    fetchLocations()
  }, [])

  return (
    <div className="mt-18">
      <Hero />
      {
        loading ? <div className="text-center mt-8">Loading...</div> :
        <LocationList locations={locations} />
      }
    </div>
  )
}

export default Home