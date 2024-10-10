

const LocationInfoHero = ({ locationDetails }) => {

  return (
    <div className="p-10">
      <h1 className="text-2xl pb-1">Events at {locationDetails[0].name}</h1>
      <p>{locationDetails[0].description}</p>
      <p>{locationDetails[0].address}</p>
      <p>{locationDetails[0].city}</p>
      <p>{locationDetails[0].state}</p>
    </div>
  )
}

export default LocationInfoHero