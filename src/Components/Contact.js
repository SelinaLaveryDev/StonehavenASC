import { useState } from "react";
import "./Contact.css";
import "./About.css";

const contacts = [
  {
    title: "General enquiries",
    description:
      "Get in touch with any questions about the club or our training sessions.",
    email: "sasccontactus@gmail.com",
  },
  {
    title: "Membership",
    description: "Joining the club or questions about your membership.",
    email: "sascmembershipsecretary@gmail.com",
  },
];

const ContactCard = ({ title, description, email }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="contact-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={`mailto:${email}`} className="contact-email">
        {email}
      </a>
      <button type="button" className="copy-button" onClick={copyEmail}>
        {copied ? "Copied!" : "Copy email address"}
      </button>
    </div>
  );
};

const Contact = () => (
  <div className="contact-container">
    <h2>Got a question? Get in touch.</h2>
    <p className="contact-intro">
      Choose the right address below and we'll get back to you as soon as we
      can.
    </p>
    <div className="contact-cards">
      {contacts.map((contact) => (
        <ContactCard key={contact.email} {...contact} />
      ))}
    </div>
  </div>
);

export default Contact;
