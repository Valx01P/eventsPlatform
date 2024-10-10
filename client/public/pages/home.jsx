import LocationList from "../components/LocationList"
import Hero from "../components/Hero"
import { useEffect, useState } from 'react'

const Home = () => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`http://localhost:3000/locations/`)
        const data = await response.json()
        setLocations(data)
        console.log(data)  
      } catch (error) {
        console.error(error)
      }
    }
    fetchLocations()
  }, [])

  return (
    <div>
      <Hero />
      <LocationList locations={locations} />
    </div>
  )
}

export default Home