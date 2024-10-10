import EventCard from "../modules/EventCard"

const EventList = ({ events }) => {
  return (
    <div className="bg-slate-400">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventList