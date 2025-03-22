import React, { useEffect, useRef } from 'react';
import '../styles/testimonials.css';

const Testimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    // Clone the first few testimonials and append them to create the infinite scroll effect
    const setupClones = () => {
      const testimonials = slider.querySelectorAll('.testimonial-card');
      const testimonialsToClone = Math.min(testimonials.length, 3);
      
      for (let i = 0; i < testimonialsToClone; i++) {
        const clone = testimonials[i].cloneNode(true);
        slider.appendChild(clone);
      }
    };

    // Auto scroll function
    const startAutoScroll = () => {
      let scrollAmount = 0;
      const step = 1;
      const scrollSpeed = 30; // Lower is faster

      const autoScroll = () => {
        slider.scrollLeft += step;
        scrollAmount += step;

        // Reset scroll position when we've scrolled through one testimonial
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
          scrollAmount = 0;
        }

        slider.scrollTimeout = setTimeout(autoScroll, scrollSpeed);
      };

      slider.scrollTimeout = setTimeout(autoScroll, scrollSpeed);
    };

    // Pause auto-scroll on mouse interactions
    const pauseAutoScroll = () => {
      if (slider.scrollTimeout) {
        clearTimeout(slider.scrollTimeout);
      }
    };

    // Mouse down event
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      pauseAutoScroll();
    });

    // Mouse leave event
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
      startAutoScroll();
    });

    // Mouse up event
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
      startAutoScroll();
    });

    // Mouse move event (for drag scrolling)
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    slider.addEventListener('touchstart', () => {
      pauseAutoScroll();
    });

    slider.addEventListener('touchend', () => {
      startAutoScroll();
    });

    // Initialize the slider
    setupClones();
    startAutoScroll();

    // Cleanup
    return () => {
      pauseAutoScroll();
      slider.removeEventListener('mousedown', () => {});
      slider.removeEventListener('mouseleave', () => {});
      slider.removeEventListener('mouseup', () => {});
      slider.removeEventListener('mousemove', () => {});
      slider.removeEventListener('touchstart', () => {});
      slider.removeEventListener('touchend', () => {});
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Parents Says About Us</h2>
     
        
        <div className="testimonials-slider-container">
          <div className="testimonials-slider" ref={sliderRef}>
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Sanskar Public School has completely transformed my child's approach to learning. The focus on both academic excellence and personal development has helped my daughter become more confident and curious.
              </p>
              <div className="testimonial-author">
                <div className="author-name">Priya Sharma</div>
                <div className="author-title">Parent of Grade 5 student</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                The teachers at Sanskar Public School are exceptional. They don't just teach concepts but inspire students to think critically. My son has developed an incredible love for mathematics because of his encouraging teachers.
              </p>
              <div className="testimonial-author">
                <div className="author-name">Rajesh Verma</div>
                <div className="author-title">Parent of Grade 3 student</div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                What sets this school apart is how they blend modern education with traditional values. My children are learning to be global citizens while staying rooted in our cultural heritage. The balance is perfect.
              </p>
              <div className="testimonial-author">
                <div className="author-name">Anjali and Vikram Patel</div>
                <div className="author-title">Parents of Grade 2 and 4 students</div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                I joined Sanskar Public School last year, and I've made so many friends. The teachers make learning fun with projects and activities. Science class is my favorite because we do cool experiments every week!
              </p>
              <div className="testimonial-author">
                <div className="author-name">Aryan Gupta</div>
                <div className="author-title">Grade 4 student</div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                The infrastructure and facilities at Sanskar Public School are outstanding. From the well-equipped science labs to the digital classrooms, everything is designed to enhance the learning experience of our children.
              </p>
              <div className="testimonial-author">
                <div className="author-name">Sunita Agarwal</div>
                <div className="author-title">Parent of Grade 6 student</div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Moving our child to Sanskar was the best decision we made. The personal attention each student receives is remarkable. The principal knows every child by name, and the teachers truly care about each student's progress.
              </p>
              <div className="testimonial-author">
                <div className="author-name">Dr. Amit and Dr. Meera Joshi</div>
                <div className="author-title">Parents of Grade 1 student</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;