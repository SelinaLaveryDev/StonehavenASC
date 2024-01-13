import React, { useState } from 'react';
import './Contact.css'; // Make sure to create a Contact.css file for styling

const Contact = () => {
  const [name, setName] = useState('');
  const [swimmerName, setSwimmerName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the submission, for example sending data to a server
    console.log(name, swimmerName, email, message);
  };

  return (
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
          type="text"
          placeholder="Enter Swimmer Name"
          value={swimmerName}
          onChange={(e) => setSwimmerName(e.target.value)}
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
  );
};

export default Contact;
