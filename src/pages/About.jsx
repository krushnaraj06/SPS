import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About Sanskar Public School</h1>
          <p>Building Character, Creating Future Leaders</p>
        </div>
      </section>

      <section className="about-content container">
        <div className="vision-mission">
          <div className="vision">
            <h2>Our Vision</h2>
            <p>We envision a world where education transcends the confines of textbooks and classrooms. Sanskar Public School is committed to fostering a learning environment where students grow into visionary leaders, critical thinkers, and socially responsible citizens.<br />
We strive to develop individuals who:<br />
• Think beyond boundaries – Encouraging creativity, problem-solving, and independent thought.<br />
• Lead with integrity – Instilling values, ethics, and a sense of responsibility towards society.<br />
• Innovate for a better tomorrow – Empowering students with modern skills and a futuristic mindset.</p>
          </div>
          <div className="mission">
            <h2>Our Mission</h2>
            <p>Our mission is to provide an education that nurtures not only academic excellence but also emotional intelligence, leadership, and global awareness.<br /> At Sanskar Public School, we:<br />
• Inspire Lifelong Learning – Encouraging curiosity, exploration, and a passion for knowledge.<br />
• Build Strong Character – Instilling values of honesty, discipline, and empathy.<br />
• Empower Through Holistic Education – Integrating academics, arts, sports, and life skills for all-round development.<br /></p>

          </div>
        </div>

        <div className="messages-section">
          <h2>Message from Our Visionary Leaders</h2>
          
          <div className="message-card">
            <div className="message-header">
             
              <div className="profile-info">
                <h3>Shir Karan Singh Rajput</h3>
                <p>Director, Sanskar Public School</p>
              </div>
            </div>
            <div className="message-content">
              <blockquote>"True education is that which liberates the mind and soul."</blockquote>
              <p>Dear Future Leaders,</p>
              <p>Education is not merely the accumulation of facts and figures—it is the pathway to enlightenment, self-discovery, and transformation. It shapes our thoughts, strengthens our character, and equips us with the wisdom to navigate life's journey with confidence and integrity.</p>
              <p>In today's rapidly evolving world, knowledge alone is not enough. The true essence of learning lies in curiosity, creativity, resilience, and ethical responsibility. It is about developing a mindset that questions, innovates, and contributes meaningfully to society.</p>
              <p>As young learners, you must remember that education is your greatest power—a force that can break barriers, uplift communities, and change the world. Be fearless in your pursuit of knowledge, embrace challenges as stepping stones, and let your values guide your actions.</p>
              <p>Let us strive to create a future where learning is not confined to classrooms but extends into real-life experiences—where success is not just measured by achievements, but by the impact we create through our wisdom, compassion, and perseverance.</p>
              <p>Dream big, think beyond, and lead with integrity. The world needs visionaries, changemakers, and lifelong learners—be one of them.</p>
              <p className="signature">With Best Wishes,<br />Shir Karan Singh Rajput<br />Director, Sanskar Public School</p>
            </div>
          </div>

          <div className="message-card">
            <div className="message-header">
             
              <div className="profile-info">
                <h3>Mr. Yashpal Rajput</h3>
                <p>Principal, Sanskar Public School</p>
              </div>
            </div>
            <div className="message-content">
              <blockquote className="sanskrit-quote">या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता ।<br />या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना ॥</blockquote>
              <p>Dear ChangeMaker's,</p>
              <p>At Sanskar Public School, we believe that education is not just about acquiring knowledge; it is about enlightenment, wisdom, and character-building. True learning is guided by values, creativity, and the power to think independently—an ethos deeply inspired by Goddess Saraswati, the divine embodiment of knowledge and wisdom.</p>
              <p>From Nursery to Grade 8, we provide a nurturing environment where every child is encouraged to explore, innovate, and excel. Our modern teaching techniques, technology-enabled classrooms, experiential learning, and strong moral foundation ensure that students grow into confident, responsible, and future-ready individuals.</p>
              <p>We at Sanskar Public School are committed to offering an education that blends tradition with innovation, discipline with creativity, and knowledge with ethical values. We don't just prepare children for exams—we prepare them for life.</p>
              <p>We invite you to be part of this journey where every child's potential is recognized, nurtured, and celebrated. Together, let's shape a brighter, wiser, and more empowered future!</p>
              <p className="signature">With Warm Regards,<br />Mr. Yashpal Rajput<br />Principal, Sanskar Public School</p>
            </div>
          </div>

          <div className="message-card">
            <div className="message-header">
              
              <div className="profile-info">
                <h3>Mrs. Neeti Rajput</h3>
                <p>Headmistress, Sanskar Public School</p>
              </div>
            </div>
            <div className="message-content">
              <p>Dear Students,</p>
              <p>Education is not just about textbooks and exams; it is the key to unlocking your true potential. It shapes your thoughts, strengthens your character, and gives you the power to dream, create, and lead.</p>
              <p>In today's fast-changing world, success is not defined by marks alone but by your curiosity, resilience, and the values you uphold. True learning happens when you ask questions, embrace challenges, think beyond boundaries, and strive to make a difference.</p>
              <p>Each one of you has the potential to achieve greatness. Believe in yourself, push your limits, and never be afraid to dream big. The world belongs to those who dare to learn, grow, and lead with integrity.</p>
              <p>At Sanskar Public School, we are here to guide and support you on this incredible journey. Let's make learning an adventure, let's make excellence a habit, and let's create a future we can all be proud of.</p>
              <p>Dream, explore, achieve—because you are the leaders of tomorrow!</p>
              <p className="signature">With Best Wishes,<br />Mrs. Neeti Rajput<br />Headmistress, Sanskar Public School</p>
            </div>
          </div>
        </div>

        <div className="values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Excellence</h3>
              <p>Striving for the highest standards in everything we do</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Building trust through honest and ethical behavior</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Embracing new ideas and methods in education</p>
            </div>
            <div className="value-card">
              <h3>Respect</h3>
              <p>Fostering mutual respect and understanding</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;