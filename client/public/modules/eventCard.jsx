
const EventCard = ({ event }) => {

  return (
    <div className="bg-slate-600">
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>{event.price}</p>
      <p>{event.expired}</p>
    </div>
  )
}

export default EventCard