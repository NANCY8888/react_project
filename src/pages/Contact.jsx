import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div className='conts'>
    <div className="contact-us-container ">
      <h1>Contact Us</h1>
      <div className="contact-us-content">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-us-info">
          <p>
            If you have any questions or concerns, please don't hesitate to contact us using the form above or the information below:
          </p>
          <p>
            Phone: 555-555-5555<br />
            Email: info@homemadechocolates.com<br />
            Address: 123 Main St, Anytown, USA
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
