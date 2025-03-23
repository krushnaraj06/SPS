import React from 'react';
import '../styles/admissions.css';
import '../components/Divider';
import Divider from '../components/Divider';

const Admissions = () => {
  return (
    <div className="admissions">
      <section className="admissions-hero">
        <div className="container">
          <h1>Admissions</h1>
          <p>Join Our Learning Community</p>
        </div>
      </section>

      <section className="admission-process container">
        <h2>Admission Process</h2>
        <div className="process-steps">
          <div className="step">
            <h3>Step 1: Application</h3>
            <p>To Fill out application Form, Connect with us with required documents</p>
          </div>
          <div className="step">
            <h3>Step 2: Interaction</h3>
            <p>Student and parent interaction</p>
          </div>
          <div className="step">
            <h3>Step 3: Decision</h3>
            <p>Provisional Decision Making</p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="requirements container">
        <h2>Requirements</h2>
        <div className="requirements-content">
          <div className="documents">
            <h3>Required Documents</h3>
            <ul>
              <li>Birth Certificate</li>
              <li>Aadhar Card</li>
              <li>Previous School Records</li>
              <li>Passport Size Photographs</li>
              <li>Transfer Certificate (if applicable)</li>
              <li>Caste Certificate (if applicable)</li>
            </ul>
          </div>
          <div className="age-criteria">
            <h3>Age Criteria</h3>
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Age as of 31st July</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nursery</td>
                  <td>3+ years</td>
                </tr>
                <tr>
                  <td>KG</td>
                  <td>4+ years</td>
                </tr>
                <tr>
                  <td>Grade 1</td>
                  <td>6+ years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;