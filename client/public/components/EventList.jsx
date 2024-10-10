import EventCard from "../modules/EventCard"

const EventList = ({ events, locationId }) => {
  return (
    <div className="bg-slate-400">
      {events.map(event => (
        <EventCard key={event.id} event={event} locationId={locationId} />
      ))}
    </div>
  )
}

export default EventList