import React from 'react';
import './Events.css'; // Make sure to create an Events.css file for styling

// const EventCard = ({ title, date, description }) => (
//   <div className="event-card">
//     <h3 className="event-title">{title}</h3>
//     <p className="event-date">{date}</p>
//     <p className="event-description">{description}</p>
//   </div>
// );

// const Events = () => {
//   // Placeholder events data
//   const upcomingEvents = [
//     {
//       title: 'Annual Swimming Gala',
//       date: 'Coming Soon',
//       description: 'Join us for our annual competitive gala. More details to be announced.',
//     },
//     // Add more placeholder or real events here
//   ];

function Events() {
  return (
    <>
          <header className='header-block'>
      </header>
<section className="news-container">
    <div className="aqua-container">
      <h2>AQUAMARK</h2>
      <p>We are delighted to have been one of the first clubs in Scotland to have achieved AquaMark 1, Scottish Swimming’s new accreditation framework.
The aims of the Aquamark accreditation are to provide a nationally recognised standard that enables clubs to:
</p>
        <div className="events-list">
          <ul>
            <li>Be inclusive, adhere to equality standards and engage with the local community.
</li>
            <li>Develop safe, effective, well governed, welcoming, and friendly environments, based on good practice.
</li>
            <li>Improve the club experience for all members by having an agreed vision and culture. 
</li>
            <li>Strive to be a long-term sustainable club focused on developing pathways for all.
</li>
          </ul>
        </div>
        <p>We are currently working towards AquaMark 2.</p>

        </div>
</section>

    </>
  );
};

export default Events;
