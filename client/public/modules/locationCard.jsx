import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const LocationCard = ({ location }) => {

  return (
    <Link to={`/locations/${location.location_id}`} className="block hover:opacity-80 transition-opacity">
      <div className="bg-gray-900 px-10 py-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-white mb-2">{location.name}</h2>
        <p className="text-gray-300 mb-2">{location.description}</p>
        <p className="text-gray-400">{location.city}, {location.state}</p>
      </div>
    </Link>
  )
}

export default LocationCard