import React from 'react';
import '../Components/Documents.css'; // Make sure to create a Documents.css file for styling

const Documents = () => {
  const policies = [
    { name: 'Complaints Policy' },
    { name: 'Anti-Bullying Policy' },
    { name: 'Social Media Policy' },
    { name: 'Disciplinary Policy' },
    { name: 'Photography Policy' },
    { name: 'Privacy Policy' },
    { name: 'Data Protection Notice' },
    { name: 'SASC Data Protection Policy' },
    { name: 'Poolside Assistant / Trainee Coach Policy' }
  ];

  return (
    <>
          <header className='header-block'>
      </header>

    <div className="documents-container">
      <h2>Documents and Policies</h2>
      <p>Below are a number of club policies that give guidance to parents in a number of governance areas of the club. They are adopted from Swim England Guidelines.</p>
      <div className="policies-list">
        {policies.map((policy, index) => (
          <a 
            key={index} 
            href="#!" // Placeholder link, replace with actual URL when available
            className="policy-link"
          >
            {policy.name}
          </a>
        ))}
      </div>
    </div>
    </>
  );
};

export default Documents;
