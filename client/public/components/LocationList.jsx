import LocationCard from "../modules/LocationCard"

const LocationList = ({ locations }) => {
  return (
    <div className="bg-gray-800">
      {locations.map(location => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  )
}

export default LocationList