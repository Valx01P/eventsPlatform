

const EventInfoHero = ({ eventDetails, locationDetails }) => {
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-3">{eventDetails[0].name}</h1>
      <h1 className="text-xl mb-1">Location:</h1>
      <div className="mb-4">
        <h2>{locationDetails[0].name}</h2>
        <p>{locationDetails[0].description}</p>
        <p>{locationDetails[0].address}</p>
        <p>{locationDetails[0].city}</p>
        <p>{locationDetails[0].state}</p>
      </div>
      <h1 className="text-xl mb-1">Event:</h1>
      <div>
        <h2>{eventDetails[0].name}</h2>
        <p>{eventDetails[0].description}</p>
        <p>Event Date: {eventDetails[0].date.substring(0,10)}</p>
        <p>Event Time: {eventDetails[0].time}</p>
        <p>Event Price {eventDetails[0].price}</p>
        <p>Event Expired? {eventDetails[0].expired.toString()}</p>
        <p>Date Posted: {eventDetails[0].date_posted.substring(0,10)}</p>
      </div>
    </div>

  )
}

export default EventInfoHero