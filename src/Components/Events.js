import React from 'react';
import './Events.css'; // Make sure to create an Events.css file for styling

const EventCard = ({ title, date, description }) => (
  <div className="event-card">
    <h3 className="event-title">{title}</h3>
    <p className="event-date">{date}</p>
    <p className="event-description">{description}</p>
  </div>
);

const Events = () => {
  // Placeholder events data
  const upcomingEvents = [
    {
      title: 'Annual Swimming Gala',
      date: 'Coming Soon',
      description: 'Join us for our annual competitive gala. More details to be announced.',
    },
    // Add more placeholder or real events here
  ];

  return (
    <>
          <header className='header-block'>
      </header>

    <div className="events-container">
      <h2>Upcoming Events</h2>
      {upcomingEvents.length > 0 ? (
        <div className="events-list">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      ) : (
        <p className="no-events-message">Check back soon for updates on our upcoming events!</p>
      )}
    </div>
    </>
  );
};

export default Events;
