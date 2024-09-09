import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Your existing CSS
import './About.css';
import title from "../Assets/SASCtitle 1.png";


const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Submit');
  const [buttonColor, setButtonColor] = useState('#00BFFF'); // or any default color you prefer

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    emailjs.sendForm('service_or3n458', 'template_mqz0i1r', form.current, 'aq6obCjDFMCjHRdT4')
      .then((result) => {
          console.log(result.text);
          // Clear the form fields
          form.current.reset();
          alert('Your message is on its way to us! We will be in touch soon.');
      }, (error) => {
          console.log(error.text);
          // Optionally reset form here if desired
          alert('Failed to send email. If this issue continues, please email sasccontactus@gmail.com');
      });
  };

  return (
    <>
      <header className='header-block'>
      <img src={title} alt="Welcome to Stonehaven Amateur Swimming Club" width={200}/>
      </header>
      <div className="contact-container">
        <h2>Got a question? Feel free to contact us below.</h2>
        <p>If your inquiry is not related to membership, please fill out the form below, and we'll get back to you as soon as possible.</p>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Enter your Name"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
          ></textarea>
          <button
            id="signinButton"
            type="submit"
            style={{ backgroundColor: buttonColor, color: 'white' }}
            setButtonColor={setButtonColor}
          >
            {buttonText}
          </button>
        </form>
        <h4>Or email us at <a href="mailto:sasccontactus@gmail.com">sasccontactus@gmail.com</a></h4>
        <h4 style={{ fontWeight: 'bold', color: '#ff4500' }}>For membership inquiries, please contact us at <a href="mailto:sascmembershipsecretary@gmail.com">sascmembershipsecretary@gmail.com</a></h4>
      </div>
    </>
  );
};

export default Contact;
