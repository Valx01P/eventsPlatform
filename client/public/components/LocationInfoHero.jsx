

const LocationInfoHero = ({ locationDetails }) => {

  return (
    <div className="bg-slate-400">
      <h2>{locationDetails[0].name}</h2>
      <p>{locationDetails[0].description}</p>
      <p>{locationDetails[0].address}</p>
      <p>{locationDetails[0].city}</p>
      <p>{locationDetails[0].state}</p>
    </div>
  )
}

export default LocationInfoHero