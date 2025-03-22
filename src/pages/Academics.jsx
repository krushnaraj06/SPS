import React from 'react';
import '../styles/academics.css';

const Academics = () => {
  return (
    <div className="academics">
      <section className="academics-hero">
        <div className="container">
          <h1>Academic Excellence</h1>
          <p>Nurturing Minds, Fostering Growth</p>
        </div>
      </section>

      <section className="curriculum container">
        <h2>Our Curriculum</h2>
        <div className="curriculum-grid">
          <div className="grade-level">
            <h3>Primary (Nursery - Grade 4)</h3>
            <ul>
              <li>Foundation in Language and Mathematics</li>
              <li>Environmental Studies</li>
              <li>Creative Arts and Music</li>
              <li>Physical Education</li>
            </ul>
          </div>
          <div className="grade-level">
            <h3>Middle School (Grade 5-8)</h3>
            <ul>
              <li>Advanced Mathematics and Sciences</li>
              <li>Language Arts and Literature</li>
              <li>Social Sciences</li>
              <li>Computer Science</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;