import React, { useState } from 'react';
import './Contact.css'; // Make sure to create a Contact.css file for styling

const Contact = () => {
  const [name, setName] = useState('');
  const [swimmerName, setSwimmerName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
        // Reset form or give user feedback
      } else {
        console.error('Failed to send email');
        // Handle errors or give user feedback
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors or give user feedback
    }
  };
  
  return (
    <>
    <header className='header-block'>
    </header>

    <div className="contact-container">
      <h2>Got a question? Feel free to contact us below.</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Contact;
