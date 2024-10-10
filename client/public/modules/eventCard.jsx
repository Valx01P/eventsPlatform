import { Link } from "react-router-dom"

const EventCard = ({ event, locationId }) => {
  return (
    <Link to={`/locations/${locationId}/events/${event.event_id}`} className="block hover:opacity-80 transition-opacity">
      <div className="bg-slate-600 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-white mb-2">{event.name}</h2>
        <p className="text-gray-300 mb-2">{event.description}</p>
        <p className="text-gray-200">Price: ${event.price}</p>
        <p className="text-gray-200">{event.expired ? 'Expired' : 'Active'}</p>
      </div>
    </Link>
  )
}

export default EventCard