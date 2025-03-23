import React from 'react';
import '../styles/contact.css';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in Touch with Sanskar Public School</p>
        </div>
      </section>

      <section className="contact-content container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-items">
            <div className="info-item">
              <Phone size={24} />
              <div>
                <h3>Phone</h3>
                <p>+91 95894 65678</p>
                
              </div>
            </div>
            <div className="info-item">
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <p>info@sanskarschool.com</p>
                <p>admissions@sanskarschool.com</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin size={24} />
              <div>
                <h3>Address</h3>
                <p> 127,JAGDAMBA NAGAR,JASWADI ROAD, <br /> NEAR MATA CHOUK,KHANDWA (M. P.)PIN-450001</p>
                
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;