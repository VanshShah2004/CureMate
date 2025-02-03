import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Pulse Parameters</h3>
              </a>
              <p>Pulse rate, rhythm, amplitude, pressure, oxygen, variability, perfusion, waveform</p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-pills"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Report Testing</h3>
              </a>
              <p>Report, validation, accuracy, consistency, completeness, format, data, review</p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-hospital-user"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Book Appointments</h3>
              </a>
              <p>Booking, schedule, time, date, confirmation, availability, consultation, reminder.</p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-dna"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Doctor Consultation</h3>
              </a>
              <p>Brain, nerves, diagnosis, treatment, assessment.</p>
              <a href="#" className="stretched-link"></a>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-wheelchair"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Wheelchair Accessiblity</h3>
              </a>
              <p>Ramp, entry, space, mobility, compliance.</p>
              <a href="#" className="stretched-link"></a>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-notes-medical"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Health Metrics</h3>
              </a>
              <p>BMI, blood pressure, cholesterol, glucose, heart rate, oxygen, temperature</p>
              <a href="#" className="stretched-link"></a>
            </div>
          </div>
          {/* End Service Item */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
