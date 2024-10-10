

const EventInfoHero = ({ eventDetails, locationDetails }) => {
  return (
    <div>
      <div className="bg-slate-400">
        <h2>{locationDetails[0].name}</h2>
        <p>{locationDetails[0].description}</p>
        <p>{locationDetails[0].address}</p>
        <p>{locationDetails[0].city}</p>
        <p>{locationDetails[0].state}</p>
      </div>
      <div className="bg-slate-400">
        <h2>{eventDetails[0].name}</h2>
        <p>{eventDetails[0].description}</p>
        <p>{eventDetails[0].date}</p>
        <p>{eventDetails[0].time}</p>
        <p>{eventDetails[0].price}</p>
        <p>{eventDetails[0].expired}</p>
        <p>{eventDetails[0].date_posted}</p>
      </div>
    </div>

  )
}

export default EventInfoHero