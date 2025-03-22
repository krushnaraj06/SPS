import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import Testimonials from '../components/testimonials';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1 className="fade-in">Welcome to Sanskar Public School</h1>
          <p className='medium'>English Medium - Nursery to 8th <br />
          DISE NO - 23290710307</p>
          <p className="slide-in">तमसो मा ज्योतिर्गमय – Lead us from darkness to light</p>
          <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
        </div>
      </section>

      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <h2>A Legacy of Excellence & Innovation</h2>
            <div className="divider"></div>
            
           
            
            <div className="vision-block">
              
              <p>From Nursery to Grade 8, Sanskar Public School offers a progressive, student-centred learning environment where education is dynamic, interactive, and experiential. Our cutting-edge curriculum, technology-enabled classrooms, and activity-based learning methods ensure that each child receives a well-rounded and future-ready education.</p>
              <p>We believe that every child is a torchbearer of change, and our role is to illuminate their path with knowledge, wisdom, and strong values. With experienced educators, a nurturing environment, and a focus on 21st-century skills, we empower our students to dream, achieve, and lead.</p>
            </div>
            
            <div className="vision-block">
              <h2>Join Us in This Journey of Transformation</h2>
              <p>Education is the most powerful tool to shape the future. At Sanskar Public School, we don't just educate minds—we ignite souls, nurture leaders, and create changemakers. Together, let's embark on a journey from darkness to light, from learning to leadership, and from dreams to reality.</p>
              <div className="slogan">
                Sanskar Public School – Where Education Meets Excellence, and Values Build the Future.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Holistic Education</h3>
              <p>Blending modern education with Indian values and traditions</p>
            </div>
            <div className="feature-card">
              <h3>Expert Faculty</h3>
              <p>Dedicated teachers nurturing young minds with care</p>
            </div>
            <div className="feature-card">
              <h3>Modern Infrastructure</h3>
              <p>State-of-the-art facilities for comprehensive learning</p>
            </div>
            <div className="feature-card">
              <h3>Cultural Integration</h3>
              <p>Celebrating Indian culture through various activities</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Adding the Testimonials section */}
      <Testimonials />
    </div>
  );
};

export default Home;