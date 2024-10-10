import LocationCard from "../modules/LocationCard"

const LocationList = ({ locations }) => {
  return (
    <div className="bg-slate-400">
      {locations.map(location => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  )
}

export default LocationList