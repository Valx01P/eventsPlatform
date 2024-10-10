import { useEffect, useState } from "react"

const LocationCard = ({ location }) => {

  return (
    <div className="bg-slate-600">
      <h2>{location.name}</h2>
      <p>{location.description}</p>
      <p>{location.city}</p>
      <p>{location.state}</p>
    </div>
  )
}

export default LocationCard