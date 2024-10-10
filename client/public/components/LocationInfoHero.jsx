

const LocationInfoHero = ({ locationDetails }) => {

  return (
    <div className="bg-slate-400">
      <h2>{locationDetails.name}</h2>
      <p>{locationDetails.description}</p>
      <p>{locationDetails.address}</p>
      <p>{locationDetails.city}</p>
      <p>{locationDetails.state}</p>
    </div>
  )
}

export default LocationInfoHero