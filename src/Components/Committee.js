import React from 'react';
import './People.css'; // Make sure to create a Committee.css file for styling
import avatar from '../Assets/avatar.png'; // Path to your placeholder image

const CommitteeMemberCard = ({ name, role }) => (
  <div className="committee-card">
    <img src={avatar} alt={`${name}`} className="committee-image" />
    <div className="committee-info">
      <h3 className="committee-name">{name}</h3>
      <p className="committee-role">{role}</p>
</div>
</div>
);
const Committee = () => {
const committeeMembers = [
{ name: 'Julie SASC', role: 'Chair' },
{ name: 'Sara SASC', role: 'Treasurer' },
{ name: 'Cathy Young', role: 'Secretary' },
{ name: 'Kirsty McDonald', role: 'Committee Member' },
{ name: 'Deirdre SASC', role: 'Committee Member' },
{ name: 'Derek McKilligan', role: 'Committee Member' },
{ name: 'Katie Timney', role: 'Committee Member' },
{ name: 'Rowena SASC', role: 'Committee Member' },
{ name: 'Shona Diamond', role: 'Committee Member' },
{ name: 'Vivian Gunn', role: 'Committee Member' },
{ name: 'Kate Raffan', role: 'Committee Member' },
{ name: 'Selina Lavery', role: 'Committee Member' },

// Add more committee members here
];

return (
    <>
    <header className='header-block'>
    </header>

<div className="committee-container">
<h1>Committee and Volunteers</h1>
<div className="committee-grid">
{committeeMembers.map((member, index) => (
<CommitteeMemberCard key={index} name={member.name} role={member.role} />
))}
</div>
</div>
</>

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
      <h2>COACHING TEAM</h2>
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


);
};


