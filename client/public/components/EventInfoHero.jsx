

const EventInfoHero = ({ eventDetails, locationDetails }) => {
  return (
    <div>
      <div className="bg-slate-400">
        <h2>{eventDetails.name}</h2>
        <p>{eventDetails.description}</p>
        <p>{eventDetails.date}</p>
        <p>{eventDetails.time}</p>
        <p>{eventDetails.price}</p>
        <p>{eventDetails.expired}</p>
        <p>{eventDetails.date_posted}</p>
      </div>
      <div className="bg-slate-400">
        <h2>{locationDetails.name}</h2>
        <p>{locationDetails.description}</p>
        <p>{locationDetails.address}</p>
        <p>{locationDetails.city}</p>
        <p>{locationDetails.state}</p>
      </div>
    </div>

  )
}

export default EventInfoHero